import { all } from "redux-saga/effects";
import { watcherSignupApi } from "../saga/authsaga";


export default function* rootSaga() {
  yield all([
      watcherSignupApi(),
    ]);
}