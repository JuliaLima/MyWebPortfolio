/**
*
* Cv
*
*/

import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  background-color: #00A79D;
  padding: 2.5rem 0rem;
  width: 100%;
  margin: 0rem;
  display: flex;
  justify-content: center;
`;

const Button = styled.p`
    font-size: 1.2rem;
    color: white;
    padding: 1rem;
    font-weight: bold;
    margin: 0rem;
    border: 1px solid white;
    width: 20%;
    text-align: center;
    cursor: pointer;
`;

class Cv extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Div>
        <Button>Julia's CV</Button>
      </Div>
    );
  }
}

Cv.propTypes = {

};

export default Cv;
