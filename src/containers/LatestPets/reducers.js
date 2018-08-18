import { fromJS } from 'immutable';

import { GET_LATEST_PETS,
  GET_LATEST_PETS_SUCCESS,
  GET_LATEST_PETS_ERROR } from './constants'

// The initial state of the App
const initialState = fromJS({
  fetching: false,
  error: false,
  pets: []
});

function latestPetsReducer(state = initialState, action) {
    switch (action.type) {
    case GET_LATEST_PETS:
        console.log('GET_LATEST_PETS')
        return state
        .set('fetching', true)
        .set('error', false)
        .set('pets', [])
    case GET_LATEST_PETS_SUCCESS:
        console.log('GET_LATEST_PETS_SUCCESS')
        return state
        .set('fetching', false)
        .set('error', false)
        .set('pets', action.pets)
    case GET_LATEST_PETS_ERROR:
        console.log('GET_LATEST_PETS_ERROR')
        return state
        .set('fetching', true)
        .set('error', action.error)
        .set('pets', [])
    default:
      return state;
  }
}

export default latestPetsReducer;
