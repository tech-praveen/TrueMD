export const HTTP_STATUS_CODE = {
  SUCCESS_OK: 200,
  REDIRECTION: 300,
  CLIENT_ERROR: 400,
  SESSION_EXPIRE_ERROR: 401,
  SERVER_ERROR: 500,
};

export const isSuccessAPI = (apiResponse) => {
  if (apiResponse) {
    if (apiResponse.status
      && apiResponse.status >= HTTP_STATUS_CODE.SUCCESS_OK
      && apiResponse.status <= HTTP_STATUS_CODE.REDIRECTION) {
      return true;
    }
  }
  return false;
};

export const isInternalServerError = (apiResponse) => {
  if (apiResponse) {
    if (apiResponse.status && apiResponse.status >= HTTP_STATUS_CODE.SERVER_ERROR) {
      return true;
    }
  }
  return false;
};

export const isSessionTimeoutError = (apiResponse) => {
  if (apiResponse) {
    if (apiResponse.status && apiResponse.status === HTTP_STATUS_CODE.SESSION_EXPIRE_ERROR) {
      return true;
    }
  }
  return false;
};

const isJSON = (apiResponse) => {
  const contentType = apiResponse.headers.get('content-type');
  const isValid = contentType && contentType.indexOf('application/json') !== -1;
  return isValid;
};

export const parsedAPIResponse = (apiResponse) => {
  if (apiResponse) {
    const parsedResponse = isJSON(apiResponse) ? apiResponse.json() : apiResponse;
    if (parsedResponse) {
      return parsedResponse;
    }
  }
  return null;
};
