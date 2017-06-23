/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import JLLogoSmall from './jl-02.png';
import messages from './messages';

export default class NotFound extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div style={{ display: "flex", alignItems: "center", flexDirection: "column", marginTop: "5rem" }}>
        <img src={JLLogoSmall}/>
        <h1>Sorry, page not found</h1>
      </div>
    );
  }
}
