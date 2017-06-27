/**
*
* Pbnbuttons
*
*/

import React from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router';
import ProjectDetailsLayout from 'components/ProjectDetailsLayout';

const Buttons = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: white;
    padding-bottom: 1rem;

    div{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 1rem;
      cursor: pointer;
      margin-left: 1rem;
      margin-right: 1rem;
    }

    .Link {
      text-decoration: none;
     }
`;

const PrevNext = styled.div`
    background-color: #00A79D;
    border: 3px solid #00A79D;
    text-align: center;
`;

const Back = styled.div`
  border: 1px solid black;
  color: black;
`;


class Pbnbuttons extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Buttons> 
        <Link to={this.props.prevProject} className="Link" style={{ color:"white" }}>
            <PrevNext>
                <FontAwesome name='arrow-left' />
            </PrevNext>
        </Link>
        <Link to="/"  className="Link" style={{ color:"black" }}>
            <Back>
                <FontAwesome name='home' />
            </Back>
        </Link>   
        <Link to={this.props.nextProject} className="Link" style={{ color:"white" }}>
            <PrevNext>
                <FontAwesome name='arrow-right' />
            </PrevNext>
        </Link>
            
        </Buttons>
    );
  }
}

Pbnbuttons.propTypes = {

};

export default Pbnbuttons;
