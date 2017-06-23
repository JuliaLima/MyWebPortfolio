/**
*
* Menu
*
*/

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: gray;
  margin-bottom: 2rem;

  span {
    margin-right: 2rem;
    cursor: pointer;
    font-size: 0.8rem;
    text-align: center;
  }

  span:last-child {
    margin-right: 0rem;
  }

  span:hover {
    color: white;
  }
`;

class Menu extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Container>
        <span>About Me</span>
        <span>My projects</span>
        <span>Contact</span>
      </Container>
    );
  }
}

Menu.propTypes = {

};

export default Menu;
