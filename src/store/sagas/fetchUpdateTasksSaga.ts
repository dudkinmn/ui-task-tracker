import { call, put } from "redux-saga/effects";
import { errorAction } from "../actions";
import { fetchUpdateTask } from "api/api";

export function* handleFetchUpdateTask(...args: any) {
  try {
    const result = yield call(fetchUpdateTask, args[0].payload);
    if (result.data) {
      //history.push("/tasks");
    } else {
      yield put(errorAction(result.data.error));
    }
  } catch (error) {
    put(errorAction(error));
  }
}
