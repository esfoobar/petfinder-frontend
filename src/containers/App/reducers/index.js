import { combineReducers } from 'redux'
import userLoginReducer from './user'
import latestPetsReducer from './pets'

export const rootReducer = combineReducers({
    userLoginReducer,
    latestPetsReducer
})
