import { all } from "redux-saga/effects"
import LatestPetsSagas from '../LatestPets/sagas'

export default function* rootSaga() {
  yield all([
    ...LatestPetsSagas,
  ])
}
