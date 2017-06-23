/**
*
* Logo
*
*/

import React from 'react';
import styled from 'styled-components';
import JLLogo from './jl-01.png';
import FontAwesome from 'react-fontawesome';
import Menu from 'components/Menu';

const LogoDiv = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LogoImg = styled.img`
  margin-bottom: 8rem;
`;

class Logo extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <LogoDiv>
        <LogoImg src={JLLogo} />
        <Menu />
        <FontAwesome name='angle-down' className="bounce animated" />
      </LogoDiv>
    );
  }
}

Logo.propTypes = {

};

export default Logo;
