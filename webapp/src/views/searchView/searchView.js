import React, { useState, useEffect } from "react";
import SearchResults from "../searchResults/searchResults";
import NavBar from "../../components/navBar/navBar";
import './searchView.scss'
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router";


const SearchView = ({itemsListUpdater}) => {
  const { search } = useLocation();
  const [input, setInput] = useState(queryString.parse(search).search ? queryString.parse(search).search: "");
  const history = useHistory();

  const updateInput = async (input) => {
    setInput(input);
  };

  const searchItems = () => {
      history.push({
        pathname: '/items',
        search: `?search=${input}`
      })
  }

  return (
    <>
      <NavBar
        keyword={input} 
        setKeyword={updateInput}
        search={searchItems}>
      </NavBar>
    </>
  );
};

export default SearchView;
