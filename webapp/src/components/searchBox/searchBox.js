import React from "react";
import "./searchBox.scss";
import searchIcon from "../../assets/ic_Search.png";


//The keyword variable is assigned to the value of the input
//meanwhile the setKeyword variable is assigned as a function to handle the change event of the input
const SearchBox = ({ keyword, setKeyword, placeholder, search }) => {

  return (
    <div 
      className='search-input-container'
      >
      <input
        className="search-input"
        value={keyword}
        placeholder={placeholder}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button 
        className="search-icon-container" 
        onClick={search}
        >
        <img className="search-icon" alt="Buscar" src={searchIcon} />
      </button>
    </div>
  );
};

export default SearchBox;
