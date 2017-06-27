/*
 *
 * MagazineDetails
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Magazine from './MagazineDetails.png';
import MagazineColors from './MagazineColors.png';
import gall1 from './gall1.png';
import gall2 from './gall2.png';
import gall3 from './gall3.png';
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

export class MagazineDetails extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const softwareList = [
      "Adobe Illustrator"
    ]

    const LabelList = [
      "Editorial Design",
      "Magazine"
    ]

    const Process = [
      "Research",
      "Understanding",
      "Design",
      "Prototypes",
      "Tests"
    ]

    return (
      <ProjectDetailsLayout title="MAGAZINE" prevProject="CenterDetails" nextProject="TicxDetails">
        <ProjectsDescription
          img={Magazine}
          paragraph="The objective of this work was to make visually attractive a university investigation made by students of the computer engineering career of Facultad de Ciencias Exactas, Físicas y Naturales - UNC (Argentina)."
          stepTitle={Process}
          ProcessParagraph="DESIGN: Establishment of a grid and definition of spaces for texts and images. The graphic elements and chromatic palette used refer to the IT world, lines and squares and range of blues."
          gallery1={gall1}
          gallery2={gall2}
          gallery3={gall3}
          software={softwareList}
          colorpaletteimg={MagazineColors}
          labels={LabelList}
        />
      </ProjectDetailsLayout>
    );
  }
}

MagazineDetails.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(MagazineDetails);
