import { USER_LOGGED_IN } from '../actions/constants'

export default userLoggedIn(state = [], action) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      return state
    default:
      return state
  }
}
