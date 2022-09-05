import React from 'react';
import '../../App.css';
import SearchBar from '../searchBar/SearchBar';
import { useStateValue } from "../context/StateProvider";

const Piva = () => {

  const [{ beers},] = useStateValue();
  return (
    <div className='piva'>
      <div className='search-bar'>
          <SearchBar 
          placeholder="Pretraži piva"
          data={beers}
          />
      </div>
    </div>
      
        
  )
}

export default Piva