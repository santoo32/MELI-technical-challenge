import React, { Component } from "react";
import "./App.scss";
import Routes from "./routes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/navBar/navBar";
import withSearchBox from "./components/searchBox/searchBox";
import SearchView from "./views/searchView/searchView";
const NavBarWithSearchBox = withSearchBox(NavBar, "Nunca dejes de buscar");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsList: [],
    };
  }

  itemsListUpdater = (items) => {
    this.setState({ itemsList: items });
  };

  render() {
    return (
      <main>
        <Router>
          <SearchView
            itemsListUpdater={this.itemsListUpdater}
          ></SearchView>
          <Routes
            itemsList={this.state.itemsList}
          ></Routes>
        </Router>
      </main>
    );
  }
}

export default App;
