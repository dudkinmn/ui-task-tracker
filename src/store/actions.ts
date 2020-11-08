import { createAction } from "redux-actions";

export const isLoadingAction = createAction("IS_LOADING");
export const errorAction = createAction("ERROR");

export const fetchUpdateCardAction = createAction("FETCH_UPDATE_CARD");
export const fetchSignupAction = createAction("FETCH_SIGNUP");

export const fetchLoginAction = createAction("FETCH_LOGIN");
export const setUserDataAction = createAction("SET_USER_DATA");
export const logOffAction = createAction("LOG_OFF");

export const fetchUpdateTaskAction = createAction("FETCH_UPDATE_TASK");
export const fetchCreateTaskAction = createAction("FETCH_CREATE_TASK");
export const fetchTasksAction = createAction("FETCH_TASKS");
export const setTasksAction = createAction("SET_TASKS");
