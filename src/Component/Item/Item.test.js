import {fireEvent, render as rtlRender, screen} from '@testing-library/react';
import Item from './Item.js';
import store from '../../store';
import { Provider } from 'react-redux';

const render = Component => rtlRender(
  <Provider store={store}>
    {Component}
  </Provider>
)

const clickFn = jest.fn();

describe('item component', ()=> {
  test('item render properly', ()=> {
    const item1 = {id: 1, title: "Clothes", image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg', price: 240}
    const item2 = {id: 2, title: "Electronics", image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg', price: 200}
    const {rerender} = render(<Item item={item1} handleClick={clickFn} />)

    expect(screen.getByText('Clothes')).toBeInTheDocument();

    rerender(<Item item={item2} handleClick={clickFn} />)
    expect(screen.getByText('Electronics')).toBeInTheDocument();
  })

  test('button click', ()=> {
    const item1 = {id: 1, title: "Clothes", image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg', price: 240}
    render(<Item item={item1} handleClick={clickFn} />)

    const button = screen.getByTestId('button')
    fireEvent.click(button);

    expect(clickFn).toHaveBeenCalled();
  })
})