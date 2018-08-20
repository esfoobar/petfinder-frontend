import { combineReducers } from 'redux'
import latestPetsReducer from '../LatestPets/reducers'

export const appReducer = combineReducers({
    latestPetsReducer
})
