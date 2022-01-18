import apiReducer from './apiReducer';
import workReducer from './workReducer';

const data = [{id: 1, title: "Clothes", image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg', price: 240}, {id: 2, title: "Electronics", image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg', price: 200}]


describe('work reducers', ()=> {
  test('should return the initial state', ()=> {
    expect(workReducer(undefined, {})).toEqual({
        products: []
      })
  })

  // test('should handle ADD_TO_CART', ()=> {
  //   const id = 2
  //   const expected = {
  //     products: [1]
  //   }

  //   expect(workReducer([], {
  //     type: 'ADD_TO_CART',
  //     id
  //   })).toEqual(expected)
  // })
})


describe('api reducer',()=> {
  test('should return the initial state', ()=> {
    expect(apiReducer(undefined, {})).toEqual({
      isLoading: true,
      data: [],
      error: ''
      })
  })

  test('should handle FETCH_API_REQUEST', ()=> {
    const expected = {
      isLoading: true
    }

    expect(apiReducer([], {
      type: 'FETCH_API_REQUEST',
    })).toEqual(expected)
  })


  test('should handle FETCH_API_SUCCESS', ()=> {
    const expected = {
      isLoading: false,
      data
    }

    expect(apiReducer([], {
      type: 'FETCH_API_SUCCESS',
      payload: data
    })).toEqual(expected)
  })


  test('should handle FETCH_API_FAILURE', ()=> {
    const error = 'Network error'
    const expected = {
      isLoading: false,
      error
    }

    expect(apiReducer([], {
      type: 'FETCH_API_FAILURE',
      payload: error
    })).toEqual(expected)
  })
})