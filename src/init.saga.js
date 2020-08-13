import { put, call, delay } from 'redux-saga/effects'
import axios from 'axios'

export default function*({ history }) {
  try {
    yield put({ type: 'INIT_SAGA_START' })

    const { data } = yield call(axios.get, 'http://localhost:3002/api/stadistics')

    yield put({ type: 'SET_DATA_STADISTICS', payload: data })
    yield delay(2000)
    history.replace({ pathname: '/home' })
  } catch (error) {
    history.replace({ pathname: '/' })
    yield put({ type: 'INIT_SAGA_ERROR' })
  }
}
