import _ from 'lodash'

const initialState = {
  data: [],
}

export default function Stadistics(state = initialState, action) {
  switch (action.type) {
    case 'SET_DATA_STADISTICS': {
      return {
        ...state,
        data: action.payload,
      }
    }
    default:
      return state
  }
}
