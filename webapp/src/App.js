import React, { Component } from 'react';
import './App.scss';

import NavBar from './components/navBar/navBar'
import withSearchBox from './components/searchBox/searchBox'
const NavBarWithSearchBox = withSearchBox(NavBar, "Nunca dejes de buscar");


class App extends Component {
  render() {
    return (
      <div>
          <NavBarWithSearchBox></NavBarWithSearchBox>
      </div>
    );
  }
}

export default App;
