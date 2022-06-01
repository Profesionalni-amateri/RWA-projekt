import React from 'react';
import './SearchBar.css';
// import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({placeholder, data}) => {
  return (
      <div className = "search">
          <div className="searchInputs">
            <input type="text" placeholder={placeholder} id="searchBox"/>
            <div className="searchIcon">
                {/* <SearchIcon /> */}
            </div>
          </div>
          
          <div className="dataResult"></div>
      </div>
  )
}

export default SearchBar