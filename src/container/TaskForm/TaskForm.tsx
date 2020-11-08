import React, { ReactElement, useCallback, useEffect, useMemo } from "react";
import { reduxForm } from "redux-form";
import { useDispatch, useSelector } from "react-redux";
import { Button, Typography } from "@material-ui/core";
import type {
  ITaskFormProps,
  TTaskFormData,
  TTaskFormOwnProps,
} from "./TaskForm.types";
import { taskFormValidator } from "../../utils/validators";
import InputField from "../../components/InputField/InputField";
import styles from "./TaskForm.module.css";
import type { TState, TTask } from "store/store.types";
import { isEmpty } from "lodash";
import { fetchCreateTaskAction, fetchUpdateTaskAction } from "store/actions";
import { useParams } from "react-router-dom";
import { priorityList, statusList } from "consts/const";

const TaskForm = ({ ...props }: ITaskFormProps): ReactElement => {
  const dispatch = useDispatch();
  const params: { taskId: string } = useParams();
  const userData = useSelector((state: TState) => state.userData);
  const tasks = useSelector((state: TState) => state.tasks);

  const isNewTask = useMemo(() => isEmpty(params.taskId), [params.taskId]);

  let currentTask: TTask = null;

  if (!isNewTask) {
    currentTask = tasks.find((task) => task?.id === params.taskId) || null;
  }

  const getOptions = (optionList: Record<string, string>) =>
    Object.values(optionList).map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ));

  const memoPriorityList = useMemo(() => getOptions(priorityList), []);
  const memoStatusList = useMemo(() => getOptions(statusList), []);

  useEffect(() => {
    props.initialize(isNewTask ? {} : { ...currentTask });
  }, [currentTask, isNewTask]);

  const handleSubmit = useCallback(
    (fields: any) => {
      isNewTask
        ? dispatch(fetchCreateTaskAction({ owner_id: userData?.id, ...fields }))
        : dispatch(fetchUpdateTaskAction(fields));
    },
    [dispatch, isNewTask, userData?.id]
  );

  return (
    <form
      onSubmit={props.handleSubmit(handleSubmit)}
      className={styles.taskForm}
    >
      <div className={styles.userData}>
        <Typography>
          {isNewTask ? "Создание задачи" : "Редактирование задачи"}
        </Typography>
        <div className={styles.wrapContainer}>
          <div className={styles.inputContainerLeft}>
            <InputField
              name="name"
              type="text"
              label="Название"
              required={true}
              fullWidth={true}
            />
            <InputField
              name="description"
              type="text"
              label="Описание задачи"
              multiline={true}
              fullWidth={true}
              rows={1}
              rowsMax={5}
            />
          </div>
          <div className={styles.inputContainerMiddle}>
            <InputField
              name="priority"
              type="text"
              label="Приоритет"
              required={true}
              fullWidth={true}
              select={true}
            >
              {memoPriorityList}
            </InputField>
            <InputField
              name="status"
              type="text"
              label="Статус"
              required={true}
              fullWidth={true}
              select={true}
            >
              {memoStatusList}
            </InputField>
          </div>

          <div className={styles.inputContainerRight}>
            <InputField name="date" type="text" label="Дата" validate={[]} />
            <InputField
              name="time_planned"
              type="text"
              label="Планируемое время"
            />
            <InputField
              name="time_elapsed"
              type="text"
              label="Затраченное время"
            />
          </div>
        </div>

        <Button
          disabled={!(props.dirty && props.anyTouched)}
          type="submit"
          variant="contained"
        >
          Сохранить
        </Button>
      </div>
    </form>
  );
};

const connectedToReduxForm = reduxForm<TTaskFormData, TTaskFormOwnProps>({
  form: "taskForm",
  validate: taskFormValidator,
});

export default connectedToReduxForm(TaskForm);
