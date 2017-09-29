/*
 *
 * RallyDetails
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Rally from './RallyDetails.png';
import RallyColors from './Colors.png';
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

export class RallyDetails extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const softwareList = [
      "Adobe Illustrator"
    ]

    const LabelList = [
      "Graphic Design",
      "Brochure"
    ]

    const Process = [
      "Idea",
      "Financers",
      "Design",
      "Distribution"
    ]

    const ImagesArray = [
      gall1
    ]

    return (
      <ProjectDetailsLayout title="RALLY FIXTURE" prevProject="PamelaCayonDetails" nextProject="ReySolDetails">
        <ProjectsDescription
          img={Rally}
          paragraph="Every year the World Rally Car event is held in Argentina. It is an event that brings together many people, both locally and internationally, and which involves a great tourist movement in the areas where it takes place. I designed a leaflet to be distributed for free to the people present on the day of the shakedown. The project was financed by different local businesses and companies of the city of Villa Carlos Paz."
          stepTitle={Process}
          ProcessParagraph="This project was realized thanks to the businesses and companies that participated in exchange for publicity. Around 10,000 copies were printed and delivered by promoters on the day of shakedown."
          images={ImagesArray}
          software={softwareList}
          colorpaletteimg={RallyColors}
          labels={LabelList}
        />
      </ProjectDetailsLayout>
    );
  }
}

RallyDetails.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(RallyDetails);
