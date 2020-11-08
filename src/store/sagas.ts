import { takeEvery } from "redux-saga/effects";
import {
  fetchCreateTaskAction,
  fetchLoginAction,
  fetchSignupAction,
  fetchTasksAction,
  fetchUpdateTaskAction,
} from "./actions";
import { handleLogin } from "./sagas/loginSaga";
import { handleSignup } from "./sagas/signupSaga";
import { handleFetchTasks } from "./sagas/fetchTasksSaga";
import { handleFetchUpdateTask } from "./sagas/fetchUpdateTasksSaga";
import { handleFetchCreateTask } from "./sagas/fetchCreateTasksSaga";

export default function* rootSaga() {
  yield takeEvery(fetchLoginAction, handleLogin);
  yield takeEvery(fetchSignupAction, handleSignup);
  yield takeEvery(fetchTasksAction, handleFetchTasks);
  yield takeEvery(fetchUpdateTaskAction, handleFetchUpdateTask);
  yield takeEvery(fetchCreateTaskAction, handleFetchCreateTask);
}
