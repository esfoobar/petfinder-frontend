import { USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_ERROR } from './constants';

export function userLogin() {
  return {
    type: USER_LOGIN
  };
}

export function userLoginSuccess(pets) {
  return {
    type: USER_LOGIN_SUCCESS,
    userLogin
  };
}

export function userLoginError(error) {
  return {
    type: USER_LOGIN_ERROR,
    error
  };
}
