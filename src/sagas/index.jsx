import { takeEvery } from 'redux-saga/effects';

 import * as ActionTypes from '../actions/ActionTypes';
 import * as loginActions from './login';

export default function * rootSaga() {
  //login
  yield takeEvery(ActionTypes.DO_LOGIN, loginActions.login);
}
