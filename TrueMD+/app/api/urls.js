import { getBaseUrl } from '../config/appConfig';

export const loginUserUrl = `${getBaseUrl()}/api/v1/users/sign_in`;
export const registerUserUrl = `${getBaseUrl()}/api/v1/users`;
export const forgotPasswordUrl = `${getBaseUrl()}/api/v1/passwords/forgot`;
export const myRoutesUrl = `${getBaseUrl()}/api/v1/delivery_app`;

// /api/v1/delivery_app?auth_token=54c9bc0b9bf252e37b823afdf8ada9c4