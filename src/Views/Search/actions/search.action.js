import { call, put } from 'redux-saga/effects'

export default {
  * searchText({ payload }) {
    try {
      yield put({ type: '', payload: '' })
    } catch (error) {
      yield put({ type: 'ERRORS', payload: error })
    }
  },
}