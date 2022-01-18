import React from 'react';
import './item.css';

function Item(props) {
  const { title, image, price} = props.item;

  return (
    <div className='item_details'>
        <h2>{title}</h2>
        <img src={image} alt="item" />
        <div className='details'>
          <p>Price: ${price}</p>
          <button data-testid='button' onClick={props.handleClick}>Add to Cart</button>
        </div>
      </div>
  )
}

export default Item