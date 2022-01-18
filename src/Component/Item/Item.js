import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../actions';
import './item.css';

function Item(props) {
  const dispatch = useDispatch();
  const {id, title, image, price} = props.item;

  return (
    <div className='item_details'>
        <h2>{title}</h2>
        <img src={image} alt="item" />
        <div className='details'>
          <p>Price: ${price}</p>
          <button onClick={()=> dispatch(addToCart(id))}>Add to Cart</button>
        </div>
      </div>
  )
}

export default Item