/**
*
* Menu
*
*/

import React from 'react';
import styled from 'styled-components';
import Scrollchor from 'react-scrollchor';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;

  .nav-link {
    margin-right: 2rem;
    cursor: pointer;
    font-size: 0.8rem;
    text-align: center;
    text-decoration: none;
    color: gray;
  }
  .nav-link:last-child {
    margin-right: 0rem;
  }
  .nav-link:hover {
    color: white;
  }
`;

class Menu extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Container>
        <Scrollchor to="aboutMe" className="nav-link">About Me</Scrollchor>
        <Scrollchor to="myProjects" className="nav-link">My projects</Scrollchor>
        <Scrollchor to="contact" className="nav-link">Contact</Scrollchor>
      </Container>
    );
  }
}

Menu.propTypes = {

};

export default Menu;
