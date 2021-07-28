import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";
//import { createStore, combineReducers, applyMiddleware } from 'redux';
//import registerServiceWorker from './registerServiceWorker';
//comment
// worker Saga: will be fired on "FETCH_SECRETS" actions
//comment
//comment
let apiKey = process.env.PROPUBLICA_API_KEY;

function* apiSaga() {
  yield takeLatest("FETCH_MEMBER", fetchMemberSaga);
  // yield takeLatest("ADD_STORY", addStorySaga);
  // yield takeLatest("UPDATE_STORY", updateStorySaga);
  // yield takeLatest("DELETE_STORY", deleteStorySaga);
  // yield takeLatest("FETCH_DETAILS", fetchDetailsSaga);
}

function* fetchMemberSaga() {
  console.log("In fetchMemberSaga...");
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": apiKey,
        Authorization: "apiKey",
      },
      withCredentials: true,
    };

    const response = yield axios.get("api/proPublicaApi", config);
    const title = response.results[0].members[0].title;
    console.log(title);
    yield put({ type: "SET_MEMBER", payload: title });
  } catch (error) {
    console.log("Member GET request failed", error);
  }
}

// function* addStorySaga(action) {
//   console.log("In addStorySaga...");
//   console.log("payload:", action.payload);
//   try {
//     const config = {
//       headers: { "Content-Type": "application/json" },
//       withCredentials: true,
//     };

//     const response = yield axios.post("api/story", action.payload, config);

//     yield put({ type: "FETCH_STORY" });
//   } catch (error) {
//     console.log("Story get request failed", error);
//   }
// }

// function* updateStorySaga(action) {
//   console.log("In updateStorySaga...");
//   console.log("payload:", action.payload);
//   try {
//     const config = {
//       headers: { "Content-Type": "application/json" },
//       withCredentials: true,
//     };

//     const response = yield axios.put("api/story", action.payload, config);

//     yield put({ type: "FETCH_STORY" });
//   } catch (error) {
//     console.log("Story update request failed", error);
//   }
// }

// function* deleteStorySaga(action) {
//   console.log("In deleteStorySaga...");
//   console.log("payload:", action.payload);
//   try {
//     const config = {
//       headers: { "Content-Type": "application/json" },
//       withCredentials: true,
//     };

//     const response = yield axios.delete(`api/story/${action.payload}`, config);

//     yield put({ type: "FETCH_STORY" });
//   } catch (error) {
//     console.log("Story get request failed", error);
//   }
// }

// function* fetchDetailsSaga(action) {
//   console.log("In fetchDetailsSaga...");
//   console.log("payload:", action.payload);

//   try {
//     const config = {
//       headers: { "Content-Type": "application/json" },
//       withCredentials: true,
//     };

//     const response = yield axios.get(`api/story/${action.payload}`, config);

//     yield put({ type: "SET_STORY", payload: response.data });
//   } catch (error) {
//     console.log("Story get request failed", error);
//   }
// }

export default apiSaga;
