import {call, put, takeEvery} from 'redux-saga/effects';
import {apiCall} from '../apiInterface';
import {API_ACTION} from '../actions/apiActions';
// import {LocaleStrings} from '../../utils/localization';
//import {loaderActionCreators} from '../../actions/loaderActions';
import {isSuccessAPI} from '../apiHandler';
import { Alert } from 'react-native';


function* manageResponseData(action, response) {
  try {
    const parsedResponse = yield response.json();
    // console.log("=======>manageResponseData", parsedResponse);
    if (isSuccessAPI(response) && parsedResponse) {
      Alert.alert(parsedResponse.message)
      const successResponse = {
        response: parsedResponse,
        status: response.status,
      };
      yield put({type: action.types[1], payload: successResponse});
    } else {
      Alert.alert(parsedResponse.message)
      const failureResponse = {
        response: parsedResponse,
        status: response.status,
      };
      yield put({type: action.types[2], payload: failureResponse});
    }
  } catch (error) {
    const unParsedResponse = {
      response: {message: `${'LocaleStrings.failed_response_parsing'}`},
      status: response.status,
    };
    yield put({type: action.types[2], payload: unParsedResponse});
  }
}

function* apiInterface(action) {
  try {
    // yield put(loaderActionCreators.showLoader());
    yield put({type: action.types[0]});
    const response = yield call(
      apiCall,
      action.url,
      action.method,
      action.body,
      action.headers,
    );
    yield call(manageResponseData, action, response);
    // yield put(loaderActionCreators.hideLoader());
  } catch (e) {
    const exceptionObject = {
      response: {message: `${'LocaleStrings.internalServerErrorMessage'}`},
      error: e,
      status: 500,
    };
    yield put({type: action.types[2], payload: exceptionObject});
    //yield put(loaderActionCreators.hideLoader());
  }
}

export default function* watchApi() {
  yield takeEvery(API_ACTION, apiInterface);
}
