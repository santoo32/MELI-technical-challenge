import React, { Component } from "react";
import { Link } from "react-router-dom";
import logoML from "../../assets/Logo_ML.png";
import SearchBox from "../searchBox/searchBox";
import "./navBar.scss";

class NavBar extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="search-box-container">
        <Link to="/">
          <img className="mercado-libre-logo" alt="Mercado libre" aria-label="Home page" src={logoML} />
        </Link>
        <SearchBox 
          keyword={this.props.keyword} 
          setKeyword={this.props.setKeyword} 
          search={this.props.search}
          placeholder={"Nunca dejes de buscar"} 
        />
      </div>
    );
  }
}

export default NavBar;
