/* eslint no-underscore-dangle: 0 */

import {
   MY_ROUTE_REQUEST,
   MY_ROUTE_SUCCESS,
   MY_ROUTE_FAILURE,
} from '../actions/routes';

const initialState = {
  isLoading: false,
  myRoutesResponse: {},

};

function authentication(state = initialState, action) {
  if (action.type === 'undefined') {
    return state;
  }
  switch (action.type) {
    case  MY_ROUTE_REQUEST:
      return {
        ...state,
        isLoading: true,
        myRoutesResponse: {},
      };
    case  MY_ROUTE_FAILURE:
    case  MY_ROUTE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        myRoutesResponse: action.payload.response.data.user,
      };
    default:
      return state;
  }
}

export default authentication;
