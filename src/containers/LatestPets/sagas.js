import { takeLatest, call, put } from "redux-saga/effects"
import request from '../../utils/request'

import { GET_LATEST_PETS,
  GET_LATEST_PETS_SUCCESS,
  GET_LATEST_PETS_ERROR } from './constants'

// worker saga: makes the api call when watcher saga sees the action
function* getLatestPetsSaga() {
  try {
    const requestURL = `/pets`
    const response = yield call(request, requestURL)
    const pets = response

    // dispatch a success action to the store with the new dog
    yield put({ type: GET_LATEST_PETS_SUCCESS, pets })

  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: GET_LATEST_PETS_ERROR, error })
  }
}

const LatestPetsSagas = [
  takeLatest(GET_LATEST_PETS, getLatestPetsSaga),
]

export default LatestPetsSagas
