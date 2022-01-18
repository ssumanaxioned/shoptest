const initialState = {
  isLoading: true,
  data: [],
  error: ''
}

const apiReducer =(state = initialState, action)=> {
  switch(action.type) {
    // case 'FETCH_API_REQUEST':
    //   return {
    //     ...state, isLoading: true
    //   }
    case 'LOAD_POSTS': return {
      ...state, data: action.payload 
    }
    case 'FETCH_API_SUCCESS': 
    return {
      ...state, isLoading: false
    }

    case 'FETCH_API_FAILURE':
      return {
        ...state, error: action.payload, isLoading: false
      }
    default: return state
  }
}

export default apiReducer