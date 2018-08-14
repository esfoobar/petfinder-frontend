import { takeLatest, call, put } from "redux-saga/effects"
import request from '../../utils/request'

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  yield takeLatest("GET_LATEST_PETS", workerSaga)
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
  try {
    const requestURL = `https://jsonplaceholder.typicode.com/posts`
    const response = yield call(request, requestURL)
    const pets = response.data.message

    // dispatch a success action to the store with the new dog
    yield put({ type: "GET_LATEST_PETS_SUCCESS", pets })

  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "GET_LATEST_PETS_ERROR", error })
  }
}
