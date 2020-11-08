import { fetchTasks } from "api/api";
import { call, put } from "redux-saga/effects";
import { errorAction, isLoadingAction, setTasksAction } from "../actions";

export function* handleFetchTasks(...args: any) {
  try {
    const result = yield call(fetchTasks, args[0].payload);
    yield put(isLoadingAction());
    if (result.data) {
      yield put(setTasksAction(result.data));
    } else {
      yield put(errorAction(result.data.error));
    }
  } catch (error) {
    put(errorAction(error));
  }
}
