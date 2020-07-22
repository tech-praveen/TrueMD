import {
  myRoutesUrl,
} from '../api/urls';

import { postApiAction, getApiAction } from '../api/actions/apiActions';

export const MY_ROUTE_REQUEST = 'MY_ROUTE_REQUEST';
export const MY_ROUTE_SUCCESS = 'MY_ROUTE_SUCCESS';
export const MY_ROUTE_FAILURE = 'MY_ROUTE_FAILURE';


// export const myRoutesRequest = (body) => {
//   return postApiAction({
//     types: [MY_ROUTE_REQUEST, MY_ROUTE_SUCCESS, MY_ROUTE_FAILURE],
//     url: myRoutesUrl,
//     body: JSON.stringify(body),
//   });
// };

export const myRoutesRequest = (accessToken) => {
  const header = `bearer ${accessToken}`;
  return getApiAction({
    types: [MY_ROUTE_REQUEST, MY_ROUTE_SUCCESS, MY_ROUTE_FAILURE],
    url: myRoutesUrl,
    header,
  });
};