import { takeEvery } from 'redux-saga/effects'

import search from './Views/Search/actions/search.action' 

export default function* rootSaga() {
  yield takeEvery('SEARCH_TEXT', search.searchText)
}
