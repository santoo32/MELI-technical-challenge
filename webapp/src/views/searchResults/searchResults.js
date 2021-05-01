import React, { useEffect, useState } from "react";
import "./searchResults.scss";
import queryString from 'query-string'
import { useLocation } from 'react-router-dom'
import { getItems } from "../../services/itemService";


//The main role of this component is just to render all of the items
// that are passed into it via props.
const SearchResults = ({ itemsList = [] }) => {
  const [results, setResults] = useState([]);
  const { search } = useLocation();
  const values = queryString.parse(search);

  useEffect(() => {
    getItems(values.search).then(({ data }) => {
      setResults(data.item);
    });
  }, [values.search]);

  return (
    <>
      {results.map((data) => {
        return (
          <div className="search-results-container" key={data.id}>
            <img className="search-results-image" src={data.picture}></img>
            <h1 className="search-results-title">{data.price.amount}</h1>
            <h1 className="search-results-desc">{data.title}</h1>
          </div>
        );
      })}
    </>
  );
};

export default SearchResults;
