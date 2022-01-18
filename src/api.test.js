import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './actions.js'
import moxios from 'moxios';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const initialstate = {
  isLoading: true,
  data: [],
  error: ''
}

const list = [{id: 1, title: "Clothes", image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg', price: 240}]

describe('test fetchAPI', ()=> {

  let store;

  beforeEach(() => {
    moxios.install();
    store = mockStore(initialstate);
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('dispatches fetchApiSuccess with server data', ()=> {

    moxios.wait(function() {
      let request = moxios.requests.mostRecent();
      request.respondWith({status: 200, response: list });
    });

    const expectedActions = [
      {
        type: 'LOAD_POSTS',
        payload: list
      },
      {
        type: 'FETCH_API_SUCCESS',
      }
    ];

    return store.dispatch(actions.fetchAPI()).then(()=> {
      expect(store.getActions()).toEqual(expectedActions);
    });
    
  });
});