import _ from 'lodash'

const initialState = {
  data: [],
  searchText: '',
  searching: false,
}

export default function Search(state = initialState, action) {
  switch (action.type) {
    case 'SEARCH_TEXT':
      return {
        ...state,
        searchText: action.payload,
      }
    case 'SET_DATA_SEARCH': {
      return {
        ...state,
        data: action.payload,
      }
    }
    case 'ADD_DATA_SEARCH':
      return {
        ...state,
        data: _.uniqBy(state.data.concat(action.payload), 'id'),
      }
    case 'SEARCH_DATA_START':
      return {
        ...state,
        searching: true,
      }
    case 'SEARCH_DATA_SUCCEEDED':
      return {
        ...state,
        searching: false,
      }
    default:
      return state
  }
}
