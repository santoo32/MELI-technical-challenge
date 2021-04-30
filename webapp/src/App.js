import React, { Component } from 'react';
import './App.css';
import Routes from './routes';

import NavBar from './components/navBar/navBar'
import withSearchBox from './components/searchBox/searchBox'
const NavBarWithSearchBox = withSearchBox(NavBar, "Nunca dejes de buscar");


class App extends Component {
  render() {
    return (
      <div>
          <NavBarWithSearchBox></NavBarWithSearchBox>
          <Routes />
      </div>
    );
  }
}

export default App;
