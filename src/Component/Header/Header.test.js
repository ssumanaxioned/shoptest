import React from "react";
import {render as rtlRender, screen} from '@testing-library/react';
import store from '../../store';
import { Provider } from "react-redux";

import Header from "./Header";

const render = Component => rtlRender(
  <Provider store={store}>
    {Component}
  </Provider>
)

describe('header is working', ()=> {
  test('header is having title', ()=>{
    render(<Header />)

    const header = screen.getByText('Shop');
    expect(header).toBeInTheDocument();
  })

  test('cart initial is empty', ()=> {
    render(<Header />)

    const cart = screen.getByTestId('cart');
    expect(cart).toHaveTextContent(0);
  })
})