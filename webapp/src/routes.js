import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ProductDetails from "./views/productDetails/productDetails";
import NotFoundPage from "./views/404page/404page";
import SearchResults from "./views/searchResults/searchResults";

const Routes = ({ itemsList }) => (
  <Switch>
    <Route
      exact
      path="/items" /*component={SearchResults}*/
      render={(props) => <SearchResults {...props} itemsList={itemsList} />}
    />
    <Route path="/items/:id" component={ProductDetails} />
    <Route component={NotFoundPage} />
  </Switch>
);

export default Routes;
