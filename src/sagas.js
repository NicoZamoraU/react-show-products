import { takeEvery, takeLatest } from 'redux-saga/effects'

import search from './Views/Search/actions/search.action'
import initSaga from './init.saga'

export default function* rootSaga() {
  yield takeEvery('INIT_SAGA', initSaga)
  yield takeLatest('SEARCH_DATA', search.searchData)
}
