import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import { fetchUpdateTaskAction } from "store/actions";
import type { TState } from "store/store.types";
import { statusList } from "consts/const";
import { boardWrapper } from "./BoardComponent.styles";
import {
  getSortTasks,
  reorder,
  move,
  getListStyle,
  getItemStyle,
} from "./BoardComponent.utils";

function BoardComponent() {
  const dispatch = useDispatch();
  const tasks = useSelector((state: TState) => state.tasks);

  const [state, setState] = useState(getSortTasks(tasks));

  const statusNames = Object.values(statusList);

  function onDragEnd(result) {
    const { source, destination, draggableId } = result;

    // Если элемент упал мимо листа
    if (!destination) {
      return;
    }
    const sInd = +source.droppableId;
    const dInd = +destination.droppableId;

    if (sInd === dInd) {
      const items = reorder(state[sInd], source.index, destination.index);
      const newState = [...state];
      newState[sInd] = items;
      setState(newState);
    } else {
      const result = move(state[sInd], state[dInd], source, destination);
      const newState = [...state];
      newState[sInd] = result[sInd];
      newState[dInd] = result[dInd];

      const draggableTask = tasks.find((task) => task?.id === draggableId);
      if (draggableTask) {
        draggableTask.status = statusNames[dInd];
        dispatch(fetchUpdateTaskAction(draggableTask));
      }
      setState(newState);
    }
  }

  return (
    <div style={boardWrapper}>
      <DragDropContext onDragEnd={onDragEnd}>
        {state.map((el, ind) => (
          <Droppable key={ind} droppableId={`${ind}`}>
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
                {...provided.droppableProps}
              >
                <Typography>{`Статус: ${statusNames[ind]}`}</Typography>
                {el.map((item, index) => (
                  <Draggable
                    key={item?.id}
                    draggableId={item?.id || ""}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style,
                          item?.priority
                        )}
                      >
                        <Typography>{`Название: ${item?.name}`}</Typography>
                        <Typography>{`Приоритет: ${item?.priority}`}</Typography>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </DragDropContext>
    </div>
  );
}

export default BoardComponent;
