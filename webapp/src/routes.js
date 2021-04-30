import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

// import ProductDetails from './components/productDetails/productDetails';
import SearchBox from './components/searchBox/searchBox';
// import SearchResults from './components/searchResults/searchResults';
import NotFoundPage from './views/404page/404page';
import ProductDetails from './views/productDetails/productDetails';

const Routes = () => 

    <Switch>
      <Route exact path='/' component={SearchBox} />
      {/* <Route exact path='/items' component={SearchResults} /> */}
      <Route path='/items/:id' component={ProductDetails} />
      <Route component={NotFoundPage} />
    </Switch>


export default Routes;