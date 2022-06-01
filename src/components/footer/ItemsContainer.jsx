import React from 'react';
import './ItemsContainer.css';
import Item from './Item';
import {LINKOVI, KONTAKT} from './Items';

const ItemsContainer = () => {
  return (
      <div className='itemsContainer'>
        <Item Links={ LINKOVI } title="LINKOVI"/>
        { <Item Links={ KONTAKT } title="KONTAKT"/> }
      </div>
      
    
  )
}

export default ItemsContainer