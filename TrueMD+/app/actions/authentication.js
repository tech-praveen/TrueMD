import {
  loginUserUrl,
  registerUserUrl,
  forgotPasswordUrl,
} from '../api/urls';

import { postApiAction, getApiAction } from '../api/actions/apiActions';

export const RESET_USER_LOGIN = 'RESET_USER_LOGIN';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST';
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
export const FORGOT_PASSWORD_FAILURE = 'FORGOT_PASSWORD_FAILURE';

export const RESET_LOGOUT = 'RESET_LOGOUT';


export const userLoginRequest = (body) => {
  return postApiAction({
    types: [LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE],
    url: loginUserUrl,
    body: JSON.stringify(body),
  });
};

export const userSignUpRequest = (body) => {
  return postApiAction({
    types: [SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE],
    url: registerUserUrl,
    body: JSON.stringify(body),
  });
};

export const userforgotPasswordRequest = (body) => {
  return postApiAction({
    types: [FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAILURE],
    url: forgotPasswordUrl,
    body: JSON.stringify(body),
  });
};

export const resetlogout = () => ({
  type: RESET_LOGOUT,
});
