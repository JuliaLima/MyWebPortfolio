/*
 *
 * LaPedreraDetails
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import LaPedrera from './LaPedreraDetails.png';
import LaPedreraColors from './LaPedreraColors.png';
import gall1 from './LaPedreraDetails.png';
import gall2 from './LaPedreraDetails.png';
import gall3 from './LaPedreraDetails.png';
import ProjectsDescription from 'components/ProjectsDescription';
import styled from 'styled-components';
import ProjectDetailsLayout from 'components/ProjectDetailsLayout';

export class LaPedreraDetails extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const softwareList = [
      "Adobe Illustrator"
    ]

    const LabelList = [
      "Digital Banner",
      "TICx"
    ]

    const Process = [
      "Research",
      "Understanding",
      "Design",
      "Prototypes",
      "Tests"
    ]

    return (
      <ProjectDetailsLayout title="LA PEDRERA BOUTIQUE" prevProject="ElMundoDetails" nextProject="PamelaCayonDetails">
        <ProjectsDescription
          img={LaPedrera}
          paragraph="The assignment was to create a menu and a postcard for a fictitious bar located in one of the most traditional and expensives neighborhoods of Cordoba City (Argentina). We had the requirements and a brief description of the experience that a person would feel in it."
          stepTitle={Process}
          ProcessParagraph="It would be called 'Social Club' and be acclimated with the aesthetics of Cuba in the 50's."
          gallery1={gall1}
          gallery2={gall2}
          gallery3={gall3}
          software={softwareList}
          colorpaletteimg={LaPedreraColors}
          labels={LabelList}
        />
      </ProjectDetailsLayout>
    );
  }
}

LaPedreraDetails.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(LaPedreraDetails);
