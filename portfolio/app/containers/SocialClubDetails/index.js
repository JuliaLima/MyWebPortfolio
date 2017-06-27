/*
 *
 * SocialClubDetails
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import SocialClub from './SocialClubDetails.png';
import SocialClubColors from './SocialClubColors.png';
import ImgAndDescription from 'components/ImgAndDescription';
import Description from 'components/Description';
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

export class SocialClubDetails extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const softwareList = [
      "CorelDraw"
    ]

    const LabelList = [
      "Graphic Design",
      "Menu",
      "Postcard"
    ]
    return (
      <ProjectDetailsLayout title="SOCIAL CLUB" prevProject="TicxDetails" nextProject="/">
        <ImgAndDescription img={SocialClub} >
          <Description
            info="University project. The assignment was to create a menu and a postcard for a fictitious bar located in one of the most traditional and expensives neighborhoods of Cordoba City (Argentina). We had the requirements and a brief description of the experience that a person would feel in it."
            MyWork="It would be called 'Social Club' and be acclimated with the aesthetics of Cuba in the 50's."
            software={softwareList}
            colorpaletteimg={SocialClubColors}
            labels={LabelList}
            strategy="INSPIRATION: The first step was to find some inspiration in images from Cuba in the 50's. Most of the images showed the streets of La Havana, with its cars and some people walking, the architecture and the colors that characterize the capital of Cuba. The elements that were most repeated, and considered most representative, were the cars and the dress in brown tones of the people. So we decided to choose these two as our basis for brand design and style of the bar.
            BRANDING AND IMPLEMENTATION: It was necessary to create an identifying sign for the bar and to define the style of the graphic pieces that we had to design. From the two selected elements, we decided to design a logo based on the plate of the cars. For the menu and the postcard we decided to use an overlap of textures taking into account the chromatic range that we observe in the clothes of the people. To give more dynamism and color, we add household appliances and license plates on the menu pages. For the postcard we use a vector of an auto of the time. Both were printed on a 120 gram paper with a matte laminate to give a traditional look and provide greater protection against possible spills of liquid or food taking into account its potential use in a bar."
            />
        </ImgAndDescription>
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
