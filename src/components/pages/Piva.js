import React from 'react';
import '../../App.css';
import SearchBar from '../searchBar/SearchBar';

const Piva = () => {
  return (
    <section className='piva'>
      <div className='search'>
          <SearchBar placeholder="Pretraži piva"/>
          <h1 className='piva-text'>Piva</h1>
      </div>
    </section>
      
        
  )
}

export default Piva