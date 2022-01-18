import React from 'react';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import './Header.css';

function Header() {
  const {products} = useSelector(state => state.workReducer);

  return (
    <div className='header'>
      <div className="wrapper">
        <h1>Shop</h1>
        {/* <form>
          <input type="text" placeholder='Search products here' />
          <button><FaSearch className='icon search' /></button>
        </form> */}
        <div className="cart_ctn">
          <FaShoppingCart className='icon cart' />
          <span data-testid='cart' className='cartno'>{products.length}</span>
        </div>
      </div>
    </div>
  )
}

export default Header
