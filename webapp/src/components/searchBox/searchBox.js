import React from "react";
import "./searchBox.scss";
import searchIcon from "../../assets/ic_Search.png";


//The keyword variable is assigned to the value of the input
//meanwhile the setKeyword variable is assigned as a function to handle the change event of the input
const SearchBox = ({ keyword, setKeyword, placeholder, search }) => {

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
     search();
    }
  }

  return (
    <div 
      className='search-input-container'
      >
      <input
        className="search-input"
        value={keyword}
        placeholder={placeholder}
        onChange={(e) => setKeyword(e.target.value)}
        onKeyDown={handleKeyDown}
        aria-label="producto a buscar"
        //tabindex='1'
      />
      <button 
        className="search-icon-container" 
        onClick={search}
        aria-label="search"
        //tabindex='2'
        >
        <img className="search-icon" alt="Buscar" src={searchIcon} />
      </button>
    </div>
  );
};

export default SearchBox;
