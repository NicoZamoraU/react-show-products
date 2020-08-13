import { call, put, delay, select } from 'redux-saga/effects'
import { get } from 'lodash/fp'
import axios from 'axios'

export default {
  * searchData({ payload }) {
    try {
      yield put({ type: 'SEARCH_DATA_START' })
      yield delay(500)
      if (payload !== '') {
        const response = yield call(axios.post, 'http://localhost:3002/api/search/', {
          keyword: payload,
        })

        yield put({ type: 'ADD_DATA_SEARCH', payload: response.data })
      }

      yield delay(100)
      yield put({ type: 'SEARCH_TEXT', payload })
      yield put({ type: 'SEARCH_DATA_SUCCEEDED' })
    } catch (error) {
      yield put({ type: 'ERRORS', payload: error })
    }
  },
}
