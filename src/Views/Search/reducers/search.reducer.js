const initialState = {
  data: [],
  searchText: '',
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
    default:
      return state
  }
}
