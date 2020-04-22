import { all, fork } from 'redux-saga/effects';

import addSaga from './todoSaga';

export default function * () {
  yield all([
    fork(addSaga),
  ])
}