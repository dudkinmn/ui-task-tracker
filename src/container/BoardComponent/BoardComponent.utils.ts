import type { TTask } from "store/store.types";
import { statusList, priorityList } from "consts/const";

export const reorder = (list: TTask[], startIndex, endIndex) => {
  const result: TTask[] = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

/**
 * Перемещает задачу из одного списка в другой
 */
export const move = (
  source,
  destination,
  droppableSource,
  droppableDestination
) => {
  const sourceClone = [...source];
  const destClone = [...destination];
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

/**Отступы межу элементами */
export const grid = 8;

export const getItemStyle = (isDragging, draggableStyle, priority) => {
  let color: string = "";

  switch (priority) {
    case priorityList.high:
      color = "salmon";
      break;
    case priorityList.medium:
      color = "lightyellow";
      break;
    case priorityList.low:
      color = "lightgreen";
      break;
  }

  return {
    userSelect: "none",
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,

    // Смена подсветки при перемещении
    background: isDragging ? "lightgrey" : color,
    borderRadius: "2px",

    // Остальные стили для элемента
    ...draggableStyle,
  };
};
export const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? "lightblue" : "white",
  padding: grid,
  width: 250,
});

/**Получить массив задач, отсортированный по статусам */
export const getSortTasks = (taskArray: TTask[]) => {
  const sortTasks: Array<Array<TTask>> = [[], [], []];

  taskArray.forEach((task) => {
    switch (task?.status) {
      case statusList.plan:
        sortTasks[0].push(task);
        break;
      case statusList.inWork:
        sortTasks[1].push(task);
        break;
      case statusList.ready:
        sortTasks[2].push(task);
        break;
    }
  });

  return sortTasks;
};
