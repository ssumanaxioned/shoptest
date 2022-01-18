import axios from "axios"

export const addToCart =(id)=> {
  return {
    type: 'ADD_TO_CART',
    id
  }
}

export const removeFromCart =(id)=> {
  return {
    type: 'REMOVE_FROM_CART',
    id  
  }
}

export const fetchApiRequest =(id)=> {
  return {
    type: 'FETCH_API_REQUEST'
  }
}

export const fetchApiFailure =error=> {
  return {
    type: 'FETCH_API_FAILURE',
    payload: error
  }
}

export const fetchApiSuccess =data=> {
  return {
    type: 'FETCH_API_SUCCESS',
    payload: data
  }
}

export const fetchAPI =url=>{
  return (dispatch) => {
    dispatch(fetchApiRequest)
    axios.get(url)
    .then(response => {
      const weather = response.data
      dispatch(fetchApiSuccess(weather))
    })
    .catch(error => {
      const errorMsg = error.message
      dispatch(fetchApiFailure(errorMsg))
    })
  }
} 