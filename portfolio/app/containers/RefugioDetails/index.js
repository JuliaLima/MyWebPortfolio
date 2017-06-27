/*
 *
 * RefugioDetails
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Refugio from './RefugioDetails.png';
import RefugioColors from './RefugioColors.png';
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

export class RefugioDetails extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const softwareList = [
      "Corel Draw",
      "Adobe InDesign"
    ]

    const LabelList = [
      "Graphic Design",
      "Branding",
      "Communication Strategy"
    ]

    const Process = [
      "Research",
      "Understanding",
      "Design",
      "Prototypes",
      "Tests"
    ]

    return (
      <ProjectDetailsLayout title="CURA BROCHERO" prevProject="EvergreenDetails" nextProject="ElMundoDetails">
        <ProjectsDescription
          img={Refugio}
          paragraph="Cura Brochero is a night refuge that lodges people in street situation in the city of Villa Carlos Paz (Argentina). Being a non-profit organization needs a lot of help from the community including the communication of its existence and action"
          stepTitle={Process}
          ProcessParagraph="Design a complete brand taking into account that the pieces and implementation must cost as low as possible. The pieces developed were: institutional stationery, business card, bookmarc, postcards, flyers and sign."
          software={softwareList}
          colorpaletteimg={RefugioColors}
          labels={LabelList}
        />
      </ProjectDetailsLayout>
    );
  }
}

RefugioDetails.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(RefugioDetails);
