import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

// import ProductDetails from './components/productDetails/productDetails';
// import SearchBox from './components/searchBox/searchBox';
// import SearchResults from './components/searchResults/searchResults';
// import 404Page from './components/404Page/404Page';
import Comp1 from './components/comp1';
import Comp2 from './components/comp2';

const Routes = () => 
  <Router>
    <Switch>
      <Route exact path='/' component={Comp1} />
      <Route exact path='/items' component={Comp2} />
      {/* <Route path='/items/:id' component={ProductDetails} />
      <Route component={NotFoundPage} /> */}
    </Switch>
  </Router>

export default Routes;