import React, { useState, useEffect } from "react";
import SearchResults from "../searchResults/searchResults";
import NavBar from "../../components/navBar/navBar";
import './searchView.scss'
import { useHistory } from "react-router";


const SearchView = ({itemsListUpdater}) => {
  const [input, setInput] = useState("");
  const history = useHistory();

  const updateInput = async (input) => {
    setInput(input);
  };

  const search = () => {
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
        search={search}>
      </NavBar>
    </>
  );
};

export default SearchView;
