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

export const fetchApiRequest =()=> {
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

export const fetchApiSuccess =()=> {
  return {
    type: 'FETCH_API_SUCCESS',
  }
}

export const loadPosts = (data) => {
  return {
    type: "LOAD_POSTS",
    payload: data
  };
};

export const fetchAPI =()=>{
  return async(dispatch) => {

   return axios
    .get('https://fakestoreapi.com/products')
    .then(response => {
      dispatch(loadPosts(response.data))
      dispatch(fetchApiSuccess())
    })
    .catch(error => {
      const errorMsg = error.message
      dispatch(fetchApiFailure(errorMsg))
    })
  }
} 