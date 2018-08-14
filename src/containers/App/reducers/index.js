import { combineReducers } from 'redux'
import userLoggedIn from './user'
import getPets from './pets'

export default combineReducers({
  userLoggedIn,
  getPets
})
