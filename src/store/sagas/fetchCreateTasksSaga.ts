import { fetchCreateTask } from "api/api";
import { call, put } from "redux-saga/effects";
import { errorAction } from "../actions";

export function* handleFetchCreateTask(...args: any) {
  try {
    const result = yield call(fetchCreateTask, args[0].payload);
    if (result) {
      //При наличии сервера при корректном ответе здесь можно реализовать сообщение пользователю
      //history.push("/tasks");
    } else {
      yield put(errorAction(result.data.error));
    }
  } catch (error) {
    put(errorAction(error));
  }
}
