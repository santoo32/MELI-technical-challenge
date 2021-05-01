import React, { Component } from "react";
import { Link } from "react-router-dom";
import logoML from "../../assets/Logo_ML.png";
import "./navBar.scss";

class NavBar extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="search-box-container">
        <Link to="/">
        <img className="mercado-libre-logo" alt="Mercado Libre" src={logoML} />
        </Link>
        {this.props.child}
      </div>
    );
  }
}

export default NavBar;
