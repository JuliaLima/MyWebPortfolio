/*
 *
 * ElMundoDetails
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import ElMundo from './ElMundoDetails.png';
import ElMundoColors from './ElMundoColors.png';
import gall1 from './gall1.png';
import ProjectsDescription from 'components/ProjectsDescription';
import styled from 'styled-components';
import ProjectDetailsLayout from 'components/ProjectDetailsLayout';

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
  font-size: 4rem;
  font-weight: bold;
  margin-top: 2rem;
`;

export class ElMundoDetails extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const softwareList = [
      "Adobe Illustrator"
    ]

    const LabelList = [
      "Comunity Management",
      "Graphic Design",
      "Banners",
      "Flyers"
    ]

    const Process = [
      "Need",
      "Definition",
      "Proposal",
      "Launching"
    ]

    const ImagesArray = [
      gall1
    ]

    return (
      <ProjectDetailsLayout title="EL MUNDO RESTAURANT" prevProject="RefugioDetails" nextProject="WebsitesDetails">
         <ProjectsDescription
          img={ElMundo}
          paragraph="El Mundo is a traditional restaurant in the city of Villa Carlos Paz (Argentina) with many years of experience and great quality. I was hired to establish and carry out a marketing strategy mainly focused on social media to promote the restaurant to the local public during low tourist seasons."
          stepTitle={Process}
          ProcessParagraph="The idea was to promote the restaurant highlighting its trajectory, quality and promotions. A detailed strategy was designed mainly focused on social networks (Facebook, Instagram and Twitter) but also including flyers and radio advertising. The central idea of the campaign was to generate a link with local customers maintaining an attitude of warmth and confidence."
          images={ImagesArray}
          software={softwareList}
          colorpaletteimg={ElMundoColors}
          labels={LabelList}
        />
      </ProjectDetailsLayout>
    );
  }
}

ElMundoDetails.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(ElMundoDetails);
