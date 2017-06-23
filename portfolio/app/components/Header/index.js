/**
*
* Header
*
*/

import React from 'react';
import Logo from 'components/Logo';
import Section from 'components/Section';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Section>
       <Logo />
      </Section>
    );
  }
}

Header.propTypes = {

};

export default Header;
