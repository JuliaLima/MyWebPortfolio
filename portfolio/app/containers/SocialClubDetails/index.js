/*
 *
 * SocialClubDetails
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import SocialClub from './SocialClubDetails.png';
import SocialClubColors from './SocialClubColors.png';
import gall1 from './SocialClubDetails.png';
import ProjectsDescription from 'components/ProjectsDescription';
import styled from 'styled-components';
import ProjectDetailsLayout from 'components/ProjectDetailsLayout';

export class SocialClubDetails extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {

    const softwareList = [
      "Adobe Illustrator",
      "Adobe Photoshop"
    ]

    const LabelList = [
      "Graphic Design",
      "Visual Designer",
      "Digital Banners"
    ]
    
    const Process = [
      "Research",
      "Understanding",
      "Design",
      "Prototypes",
      "Tests"
    ]

    const ImagesArray = [
      gall1
    ]

    return (
      <ProjectDetailsLayout title="SOCIAL CLUB" prevProject="TicxDetails" nextProject="/">
        <ProjectsDescription
          img={SocialClub}
          paragraph="The assignment was to create a menu and a postcard for a fictitious bar located in one of the most traditional and expensives neighborhoods of Cordoba City (Argentina). We had the requirements and a brief description of the experience that a person would feel in it."
          stepTitle={Process}
          ProcessParagraph="It would be called 'Social Club' and be acclimated with the aesthetics of Cuba in the 50's."
          images={ImagesArray}
          software={softwareList}
          colorpaletteimg={SocialClubColors}
          labels={LabelList}
        />
      </ProjectDetailsLayout>
    );
  }
}

SocialClubDetails.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(SocialClubDetails);
