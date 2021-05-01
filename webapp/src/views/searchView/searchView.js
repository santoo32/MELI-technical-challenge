import React, { useState, useEffect } from "react";
import SearchResults from "../searchResults/searchResults";
import { getItems } from "../../services/itemService";
import NavBar from "../../components/navBar/navBar";
import './searchView.scss'

const SearchView = (props) => {
  const [input, setInput] = useState("");
  const [itemsList, setItemsList] = useState([]);

  const updateInput = async (input) => {
    setInput(input);
  };

  const search = () => {
    getItems(input).then(({data}) => {
        setItemsList(data.item);
      });
  }

  return (
    <>
      <NavBar
        keyword={input} 
        setKeyword={updateInput}
        search={search}>
      </NavBar>
      <SearchResults itemsList={itemsList} />
    </>
  );
};

export default SearchView;
