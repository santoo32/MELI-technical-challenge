import React, { useEffect, useState } from "react";
import "./searchResults.scss";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import { getItems } from "../../services/itemService";
import { Link } from "react-router-dom";

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
          <Link to={`/items/${data.id}`}>
            <div className="product-container" key={data.id}>
              <img className="product-image" src={data.picture}></img>
              <div className="product-container-attributes">
                <h1 className="product-container-attribute">
                  {data.price.amount}
                </h1>
                <h1 className="product-container-attribute">{data.title}</h1>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default SearchResults;
