import { put, call } from 'redux-saga/effects'
import axios from 'axios'

export default function*({ history }) {
  try {
    yield put({ type: 'INIT_SAGA_START' })

    const { data } = yield call(axios.get, 'http://localhost:3002/api/search/all')

    yield put({ type: 'SET_DATA_SEARCH', payload: data })
  } catch (error) {
    yield put({ type: 'INIT_SAGA_ERROR' })
  }
}
