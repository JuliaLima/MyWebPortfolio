/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import Header from 'components/Header';
import AboutMe from 'components/AboutMe';
import Portfolio from 'components/Portfolio';
import Cv from 'components/Cv';
import Footer from 'components/Footer';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Header />
        <AboutMe />
        <Portfolio />
        <Cv />
        <Footer />
      </div>
    );
  }
}
