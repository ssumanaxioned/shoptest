import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../actions.js'
import apiReducer from '../../Reducers/apiReducer.js';
import moxios from 'moxios';
import {getAllByTestId, render as rtlRender, screen, waitFor} from '@testing-library/react';
// import store from '../../store.js';
import { Provider } from "react-redux";

import ItemCtn from './ItemCtn.js';

// const render = Component => rtlRender(
//   <Provider store={store}>
//     {Component}
//   </Provider>
// )

const mockStore = configureMockStore([thunk]);
const initialstate = {
  isLoading: true,
  data: {},
  error: ''
}

const data = [{id: 1, title: "Clothes", image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg', price: 240}, {id: 2, title: "Electronics", image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg', price: 200}]

// const mockSuccess = data => ({status: 200, response: {data}})
// const mockError = error => ({status: 500, response: error})

describe('test fetchAPI', ()=> {
  // beforeEach(()=> store.clearActions());
  let store;

  beforeEach(() => {
    moxios.install();
    store = mockStore(initialstate);
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test('dispatches fetchApiSuccess with server data', done=> {

    moxios.waitFor(()=> {
      let request = moxios.requests.mostRecent();
      request.respondWith({status: 200, response: data})
    });

    const expectedActions = [
      {type: 'FETCH_API_REQUEST'},
      {
        type: 'FETCH_API_SUCCESS',
        payload: data
      }
    ]

    return store.dispatch(actions.fetchAPI()).then(()=> {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
    
  });
});


// describe('itemctn component', ()=> {
//   test('should item component display', async()=>{
//     render(<ItemCtn />) 
//     await waitFor(()=> {
//       expect(screen.getAllByTestId('list')).toBeInTheDocument();
//     })
//   })
// })