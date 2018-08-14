import { fromJS } from 'immutable';

import { GET_LATEST_PETS,
  GET_LATEST_PETS_SUCCESS,
  GET_LATEST_PETS_ERROR } from '../actions/constants'

// The initial state of the App
const initialState = fromJS({
  fetching: false,
  error: false,
  pets: null
});

function latestPetsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LATEST_PETS:
      return state
        .set('fetching', true)
        .set('error', false)
        .set('pets', null)
    case GET_LATEST_PETS_SUCCESS:
      return state
      .set('fetching', true)
      .set('error', false)
      .set('pets', action.pets)
    case GET_LATEST_PETS_ERROR:
    return state
    .set('fetching', true)
    .set('error', action.error)
    .set('pets', null)
    default:
      return state;
  }
}

export default latestPetsReducer;
