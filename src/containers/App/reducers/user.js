import { fromJS } from 'immutable';

import { USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_ERROR } from '../actions/constants'

// The initial state of the App
const initialState = fromJS({
  fetching: false,
  error: false,
  user: null
});

function userLoginReducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return state
        .set('fetching', true)
        .set('error', false)
        .set('user', null)
    case USER_LOGIN_SUCCESS:
      return state
      .set('fetching', true)
      .set('error', false)
      .set('user', action.user)
    case USER_LOGIN_ERROR:
    return state
    .set('fetching', true)
    .set('error', action.error)
    .set('user', null)
    default:
      return state;
  }
}

export default userLoginReducer;
