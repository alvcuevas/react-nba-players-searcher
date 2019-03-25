import { all, takeLatest } from "redux-saga/effects";
import { GET_PLAYER } from "../actions/types";
import { retrievePlayer } from "./player";

export default function* rootSaga() {
    yield all([
        takeLatest(GET_PLAYER, retrievePlayer)
    ]);
}