import { handleActions } from "redux-actions";
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import {
  errorAction,
  isLoadingAction,
  setUserDataAction,
  logOffAction,
  fetchTasksAction,
  setTasksAction,
} from "./actions";
import type { TTask, TUserData } from "./store.types";

const tasks = handleActions<TTask[]>(
  {
    [setTasksAction.toString()]: (_state, action) => action.payload,
  },
  []
);

const userData = handleActions<TUserData>(
  {
    [setUserDataAction.toString()]: (_state, action) => action.payload,
    [logOffAction.toString()]: () => null,
  },
  null
);

//todo: доработать все условия
const isLoading = handleActions<boolean>(
  {
    [isLoadingAction.toString()]: () => true,
    [errorAction.toString()]: () => false,
    [setUserDataAction.toString()]: () => false,
    [setTasksAction.toString()]: () => false,
  },
  false
);

//todo: доработать все условия
const error = handleActions(
  {
    [errorAction.toString()]: (_state, action) => action.payload,
    [fetchTasksAction.toString()]: () => null,
  },
  null
);

export const reducers = combineReducers({
  userData,
  tasks,
  isLoading,
  error: error,
  form: formReducer,
});
