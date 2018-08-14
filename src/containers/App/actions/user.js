import { USER_LOGGED_IN } from '../constants';

export function userLoggerIn() {
  return {
    type: USER_LOGGED_IN,
    email,
    password
  };
}
