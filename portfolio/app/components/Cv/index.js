/**
*
* Cv
*
*/

import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  background-color: #00A79D;
  padding: 2.5rem 2rem;
  width: 100%;
  margin: 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.span`
    font-size: 1.2rem;
    color: white;
    padding: 1.2rem;
    font-weight: bold;
    margin: 2rem;
    border: 1px solid white !important;
    width: 20%;
    text-align: center;
    cursor: pointer;
`;

class Cv extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Div>
        <span style={{ height:"1px", border:"1px dotted white", width:"25%", marginRight:"1rem" }}></span>
        <a href="http://julialima.com.ar/files/juliaLimaCV.pdf" target="_blank" style={{ textDecoration: "none", color:"white"}}><Button>CHECKOUT MY CV</Button></a>
        <span style={{ height:"1px", border:"1px dotted white", width:"25%", marginLeft:"1rem" }}></span>
      </Div>
    );
  }
}

Cv.propTypes = {

};

export default Cv;
