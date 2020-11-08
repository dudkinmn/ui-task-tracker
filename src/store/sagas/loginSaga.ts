import { call, put } from "redux-saga/effects";
import { errorAction, isLoadingAction, setUserDataAction } from "../actions";
import history from "../../utils/history";
import { getLogin } from "api/api";

export function* handleLogin(...args: any) {
  try {
    const result = yield call(getLogin, args[0].payload);
    yield put(isLoadingAction());
    if (result.data[0]) {
      yield put(setUserDataAction(result.data[0]));
      yield history.push("/auth");
    } else {
      yield put(errorAction(result.data.error));
    }
  } catch (error) {
    put(errorAction(error));
  }
}
