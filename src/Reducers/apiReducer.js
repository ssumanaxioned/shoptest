const initialState = {
  isLoading: true,
  data: [],
  error: ''
}

const apiReducer =(state = initialState, action)=> {
  switch(action.type) {
    case 'FETCH_API_REQUEST':
      return {
        ...state, isLoading: true
      }
    case 'FETCH_API_SUCCESS': 
    return {
      ...state, data: action.payload , isLoading: false
    }

    case 'FETCH_API_FAILURE':
      return {
        ...state, error: action.payload, isLoading: false
      }
    default: return state
  }
}

export default apiReducer