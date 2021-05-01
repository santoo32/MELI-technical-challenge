import React from "react";
import './searchResults.scss'
//The main role of this component is just to render all of the items
// that are passed into it via props.
const SearchResults = ({ itemsList = [] }) => {
  
  return (
    <>
      {itemsList.map((data) => {
          return (
            <div className="search-results-container" key={data.id}>
              <img 
              className="search-results-image"
              src={data.picture}></img>
              <h1 className="search-results-title">{data.price.amount}</h1>
              <h1 className="search-results-desc">{data.title}</h1>
            </div>
          );
      })}
    </>
  );
};

export default SearchResults;
