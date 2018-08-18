import { GET_LATEST_PETS,
  GET_LATEST_PETS_SUCCESS,
  GET_LATEST_PETS_ERROR } from './constants'

// The initial state of the App
const initialState = {
  fetching: false,
  error: false,
  pets: [],
  getPet: []
};

function latestPetsReducer(state = initialState, action) {
    switch (action.type) {
    case GET_LATEST_PETS:
        console.log('GET_LATEST_PETS')
        return { ...state, fetching: true, error: false }
    case GET_LATEST_PETS_SUCCESS:
        console.log('GET_LATEST_PETS_SUCCESS')
        return { ...state, fetching: true, error: false, pets: action.pets }
    case GET_LATEST_PETS_ERROR:
        console.log('GET_LATEST_PETS_ERROR')
        return { ...state, fetching: false, error: action.error }
    default:
      return state;
  }
}

export default latestPetsReducer;
