import { combineReducers } from 'redux';
import authentication from './authentication';
import routes from './routes';
const reducers = {
    authentication,
    routes,
};

export default combineReducers(reducers);
