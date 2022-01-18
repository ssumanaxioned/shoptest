import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchAPI } from '../../actions';
import Item from '../Item/Item';
import './itemctn.css';

function ItemCtn() {
  const dispatch = useDispatch();
  const {data, isLoading} = useSelector(state => state.apiReducer);

  useEffect(()=> {
    dispatch(fetchAPI('https://fakestoreapi.com/products'));
  }, []);

  return (
      <div className="itemctn">
      {
        isLoading ? null : (
          data.map(item=> (
            <Item data-testid='list' key={item.id} item={item} />
          ))
        )
      }
      </div>
  )
}

export default ItemCtn
