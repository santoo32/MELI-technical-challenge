import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import NavBar from './components/navBar/navBar'
import withSearchBox from './components/searchBox/searchBox'
const NavBarWithSearchBox = withSearchBox(NavBar);


class App extends Component {
  render() {
    return (
      <div className="App">
          <NavBarWithSearchBox></NavBarWithSearchBox>
      </div>
    );
  }
}

export default App;
