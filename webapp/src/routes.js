import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import SearchView from './views/searchView/searchView'
import ProductDetails from './views/productDetails/productDetails';
import NotFoundPage from './views/404page/404page';

const Routes = () => 

    <Switch>
      <Route exact path='/' component={SearchView} />
      <Route path='/items/:id' component={ProductDetails} />
      <Route component={NotFoundPage} />
    </Switch>


export default Routes;