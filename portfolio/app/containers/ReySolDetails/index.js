/*
 *
 * ReySolDetails
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import ReySol from './ReySolDetails.png';
import ReySolColors from './ReySolColors.png';
import gall1 from './gall1.png';
import gall2 from './gall2.png';
import gall3 from './gall3.png';
import gall4 from './gall4.png';
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

export class ReySolDetails extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const softwareList = [
      "CorelDraw",
      "Adobe Illustrator"
    ]

    const LabelList = [
      "Graphic Design",
      "Cabins"
    ]

    const Process = [
      "Research",
      "Understanding",
      "Design",
      "Prototypes",
      "Tests"
    ]

    return (
      <ProjectDetailsLayout title="REYSOL CABAÑAS" prevProject="AdrianDetails" nextProject="CenterDetails">
        <ProjectsDescription
          img={ReySol}
          paragraph="Design of an identifying sign and application of it in a series of graphic pieces for cabins in temporary rent located in Villa Carlos Paz city (Argentina)."
          stepTitle={Process}
          ProcessParagraph="BRANDING: The literal translation of the name is 'KingSun', so the logo will be composed and have a direct reference to the name of the business.
            CASUAL DESIGNS: The owners asked in different and specific opportunities for help with some graphic pieces. Digital banners were designed for Christmas time, guides to inform and locate the tourists that were lodged in the cabins and even a magnet as a souvenir with contact details of the place."
          gallery1={gall1}
          gallery2={gall2}
          gallery3={gall3}
          gallery4={gall4}
          gallery5={gall4}
          gallery6={gall4}
          software={softwareList}
          colorpaletteimg={ReySolColors}
          labels={LabelList}
        />
      </ProjectDetailsLayout>
    );
  }
}

ReySolDetails.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(ReySolDetails);