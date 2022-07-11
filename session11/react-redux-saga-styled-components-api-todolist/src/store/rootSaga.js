import { all } from "redux-saga/effects";
import { watchFetchUser } from "./githubtasks/task";

export default function* rootSaga() {
    yield all([
        watchFetchUser(), 
    ])
}