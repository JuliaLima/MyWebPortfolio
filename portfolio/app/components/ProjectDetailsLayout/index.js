/**
*
* ProjectDetailsLayout
*
*/

import React from 'react';
import styled from 'styled-components';
import JLLogoSmall from './jl-02.png';
import ImgAndDescription from 'components/ImgAndDescription';
import PBNbuttons from 'components/PBNbuttons';
import Description from 'components/Description';
import Section from 'components/Section';

const Header = styled.div`
  background-color: #00A79D;
  text-align: center;
  width: 100%;
  height: 50vh;
  padding-top: 1.5rem;
`;

const Copyright = styled.span`
    color: gray;
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 0.6rem;
    padding: 1rem 0rem;
    background-color: white;
`;

const Title = styled.div`
  font-size: 3rem;
  font-weight: bold;
  margin-top: 2rem;
`;

class ProjectDetailsLayout extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Header>
          <img src={JLLogoSmall} />
          <Title>{this.props.title}</Title>
        </Header>
        <Section style={{ marginTop:"0rem", backgroundColor: "white" }}>
          {this.props.children}
        </Section>
        <PBNbuttons prevProject= {this.props.prevProject} nextProject={this.props.nextProject} />
        <Copyright>&copy; 2017 - Julia Lima. All rights reserved.</Copyright>
      </div>
    );
  }
}

ProjectDetailsLayout.propTypes = {

};

export default ProjectDetailsLayout;
