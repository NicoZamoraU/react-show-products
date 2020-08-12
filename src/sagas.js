import { takeEvery } from 'redux-saga/effects'

import search from './Views/Search/actions/search.action'
import initSaga from './init.saga'

export default function* rootSaga() {
  yield takeEvery('SEARCH_TEXT', search.searchText)
  yield takeEvery('INIT_SAGA', initSaga)
}
