import * as actions from './actions.js'

describe('actions', () => {
  test('should create an action to add to cart', ()=> {
    const id = 2

    const expectedActions = {
      type: 'ADD_TO_CART',
      id
    }

    expect(actions.addToCart(2)).toEqual(expectedActions)
  })


  test('should create an action to remove form cart', ()=> {
    const id = 2

    const expectedActions = {
      type: 'REMOVE_FROM_CART',
      id
    }

    expect(actions.removeFromCart(2)).toEqual(expectedActions)
  })
})