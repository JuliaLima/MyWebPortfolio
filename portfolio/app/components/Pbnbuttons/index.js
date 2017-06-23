/**
*
* Pbnbuttons
*
*/

import React from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

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
            <PrevNext>
                <FontAwesome name='arrow-left' />
            </PrevNext>
            <Back>
                <FontAwesome name='briefcase'  style={{ paddingRight: "1rem" }}/>
                Back to Portfolio
            </Back>
            <PrevNext>
                <FontAwesome name='arrow-right' />
            </PrevNext>
        </Buttons>
    );
  }
}

Pbnbuttons.propTypes = {

};

export default Pbnbuttons;
