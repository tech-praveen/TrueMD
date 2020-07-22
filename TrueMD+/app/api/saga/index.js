import { fork } from 'redux-saga/effects';
import { sagaMiddleware } from '../../store';
import watchApi from './apiSaga';

function* root() {
  yield fork(watchApi);
}
const run = () => sagaMiddleware.run(root);
export default run;
