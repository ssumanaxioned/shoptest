import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, fetchAPI } from '../../actions';
import Item from '../Item/Item';
import './itemctn.css';

function ItemCtn() {
  const dispatch = useDispatch();
  const {data, isLoading} = useSelector(state => state.apiReducer);

  useEffect(()=> {
    dispatch(fetchAPI());
  }, []);

  return (
      <div className="itemctn">
      {
        isLoading ? null : (
          data.map(item=> (
            <Item data-testid='list' key={item.id} item={item} handleClick={()=>dispatch(addToCart(item.id))} />
          ))
        )
      }
      </div>
  )
}

export default ItemCtn
