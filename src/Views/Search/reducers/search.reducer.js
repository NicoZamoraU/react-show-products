const initialState = {
  data: [],
  searchText: '',
}

export default function Search(state = initialState, action) {
  switch (action) {
    case 'SEARCH_TEXT':
      return {
        ...state,
        searchText: action.payload,
      }
    default:
      return state
  }
}
