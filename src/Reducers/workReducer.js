const initialState = {
  products: []
}

const workReducer = (state = initialState, action) => {
  switch (action.type) {  
    case 'ADD_TO_CART':
      return {
        ...state, products: state.products.concat(action.id)
      }
    case 'REMOVE_FROM_CART':
      return {
        ...state, products: state.products.filter(product => product !== action.id)
      }
    default: return state;
  }
}

export default workReducer;