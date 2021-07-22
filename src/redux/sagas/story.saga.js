import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";
//import { createStore, combineReducers, applyMiddleware } from 'redux';
//import registerServiceWorker from './registerServiceWorker';
//comment
// worker Saga: will be fired on "FETCH_SECRETS" actions
//comment
//comment
function* artSaga() {
  yield takeLatest("FETCH_STORY", fetchStorySaga);
  yield takeLatest("ADD_STORY", addStorySaga);
  yield takeLatest("UPDATE_STORY", updateStorySaga);
  yield takeLatest("DELETE_STORY", deleteStorySaga);
  yield takeLatest("FETCH_DETAILS", fetchDetailsSaga);
}

function* fetchStorySaga() {
  console.log("In fetchStorySaga...");
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const response = yield axios.get("api/story", config);

    yield put({ type: "SET_STORY", payload: response.data });
  } catch (error) {
    console.log("Story get request failed", error);
  }
}

function* addStorySaga(action) {
  console.log("In addStorySaga...");
  console.log("payload:", action.payload);
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const response = yield axios.post("api/story", action.payload, config);

    yield put({ type: "FETCH_STORY" });
  } catch (error) {
    console.log("Story get request failed", error);
  }
}

function* updateStorySaga(action) {
  console.log("In updateStorySaga...");
  console.log("payload:", action.payload);
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const response = yield axios.put("api/art", action.payload, config);

    yield put({ type: "FETCH_STORY" });
  } catch (error) {
    console.log("Story update request failed", error);
  }
}

function* deleteStorySaga(action) {
  console.log("In deleteStorySaga...");
  console.log("payload:", action.payload);
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const response = yield axios.delete(`api/story/${action.payload}`, config);

    yield put({ type: "FETCH_STORY" });
  } catch (error) {
    console.log("Story get request failed", error);
  }
}

function* fetchDetailsSaga(action) {
  console.log("In fetchDetailsSaga...");
  console.log("payload:", action.payload);

  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const response = yield axios.get(`api/story/${action.payload}`, config);

    yield put({ type: "SET_STORY", payload: response.data });
  } catch (error) {
    console.log("Story get request failed", error);
  }
}

export default storySaga;
