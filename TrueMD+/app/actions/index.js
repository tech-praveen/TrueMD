import { bindActionCreators } from 'redux';
import {
  userLoginRequest,
  userSignUpRequest,
  userforgotPasswordRequest,
  resetlogout,
} from './authentication';
import {
  myRoutesRequest,
} from './routes';

import { store } from '../store';

const actions = {
  userLoginRequest,
  userSignUpRequest,
  userforgotPasswordRequest,
  resetlogout,
  myRoutesRequest,
};

export default bindActionCreators(actions, store.dispatch);
