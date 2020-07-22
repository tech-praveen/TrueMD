/* eslint no-underscore-dangle: 0 */

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILURE,
  RESET_USER_LOGIN,
  RESET_LOGOUT,
} from '../actions/authentication';
import { Storage } from '../storage/storage';
import * as RootNavigation from '../utils/navigation';

const initialState = {
  isLoading: false,
  loginUserResponse: {},
  signUpUserResponse: {},
  forgotPasswordResponse: {},
  info: {}
};

const saveUserInfo = (data) => {
  if (data) {
    Storage.setItemWithKeyAndValue('APP_ACCESS_TOKEN', data.auth_token);
    RootNavigation.navigate('StackDrawer');
  }
  return {};
};


function authentication(state = initialState, action) {
  if (action.type === 'undefined') {
    return state;
  }

  // console.log('=======', action);
  switch (action.type) {
    case RESET_USER_LOGIN:
      return {
        ...state,
        isLoading: false,
        loginUserResponse: {},
      };

    case LOGIN_REQUEST:
    case SIGNUP_REQUEST:
    case FORGOT_PASSWORD_REQUEST:
      return {
        ...state,
        isLoading: true,
        loginUserResponse: {},
      };
    case LOGIN_FAILURE:
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        loginUserResponse: action.payload.response.data.user,
        info: saveUserInfo(action.payload.response.data.user),
      };
    case SIGNUP_FAILURE:
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        signUpUserResponse: action.payload.response.data.user,
        info: saveUserInfo(action.payload.response.data.user),
      };
    case FORGOT_PASSWORD_FAILURE:
    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        forgotPasswordResponse: action.data,
      };
    case RESET_LOGOUT:
      return {
        isLoading: false,
        loginUserResponse: {},
      };

    default:
      return state;
  }
}

export default authentication;
