//withdLoading.js
import React from 'react';
import SpinnerLoader from './spinnerLoader';

function WithLoading(Component) {
  return function WihLoadingComponent({ hasFinished, ...props }) {
    if (hasFinished) return <Component {...props} />;
    return (<SpinnerLoader></SpinnerLoader>);
  };
}
export default WithLoading;