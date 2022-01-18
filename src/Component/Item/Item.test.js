import {render as rtlRender, screen} from '@testing-library/react';
import Item from './Item.js';
import store from '../../store';
import { Provider } from 'react-redux';

const render = Component => rtlRender(
  <Provider store={store}>
    {Component}
  </Provider>
)

describe('item component', ()=> {
  test('item render properly', ()=> {
    const item1 = {id: 1, title: "Clothes", image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg', price: 240}
    const item2 = {id: 2, title: "Electronics", image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg', price: 200}
    render(<Item item={item1} />)

    expect(screen.getByText('Clothes')).toBeInTheDocument();

    screen.rerender(<Item item={item2} />)
    expect(screen.getByText('Electronics')).toBeInTheDocument();
  })
})