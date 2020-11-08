import { call, put } from "redux-saga/effects";
import { errorAction } from "../actions";

import history from "../../utils/history";
import { getSignup } from "api/api";

export function* handleSignup(...args: any) {
  try {
    const result = yield call(getSignup, args[0].payload);
    if (result.data.success) {
      history.push("/tasks");
    } else {
      yield put(errorAction(result.data.error));
    }
  } catch (error) {
    put(errorAction(error));
  }
}
