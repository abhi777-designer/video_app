import { put, takeLatest } from "redux-saga/effects";
import { actions, saveVideoData } from "./actions";
import getData from "../../../services/videoApi";

function* getVideosData() {
  try {
    const videoData = yield getData().then((resp) => resp.data.videos);

    // console.log(videoData);

    yield put(saveVideoData(videoData));
  } catch (e) {
    console.log("getVideosData", e);
  }
}

export default function* defaultSaga() {
  yield takeLatest(actions.FETCH_VIDEO_DATA, getVideosData);
}
