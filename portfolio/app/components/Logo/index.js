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

const Media = styled.span`
  display: flex;
  justify-content: flex-end;
  margin-right: 2rem;
`;

class Logo extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <span>
        <Media>
          <a href="https://www.linkedin.com/in/limajulia/" target="_blank" style={{ textDecoration: "none"}}><FontAwesome name='linkedin' fixedWidth='true' style={{ color:"white", marginRight:"1rem" }} /></a>
          <a href="https://github.com/JuliaLima" target="_blank" style={{ textDecoration: "none"}}><FontAwesome name='github' fixedWidth='true' style={{ color:"white" }}/></a>
        </Media>
        <LogoDiv>
        <LogoImg src={JLLogo} />
        <Menu />
        <FontAwesome name='angle-down' className="bounce animated" />
      </LogoDiv>
    </span>
    );
  }
}

Logo.propTypes = {

};

export default Logo;
