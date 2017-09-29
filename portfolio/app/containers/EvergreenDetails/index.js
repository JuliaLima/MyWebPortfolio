/*
 *
 * EvergreenDetails
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Evergreen from './EvergreenDetail.png';
import gall1 from './gall1.png';
import EvergreenColors from './evergreenColors.png';
import ProjectsDescription from 'components/ProjectsDescription';
import styled from 'styled-components';
import ProjectDetailsLayout from 'components/ProjectDetailsLayout';

export class EvergreenDetails extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const softwareList = [
      "Adobe Illustrator"
    ]

    const LabelList = [
      "UI Design",
      "UI Style Guide",
      "Design Principles",
      "Libraries"
    ]

    const Process = [
      "Ramp Up",
      "Guidelines",
      "Design",
      "Application"
    ]

    const ImagesArray = [
      gall1
    ]

    return (
      <ProjectDetailsLayout title="EVERGREEN" prevProject="DigaDetails" nextProject="RefugioDetails">
        <ProjectsDescription
          img={Evergreen}
          paragraph="Freelance remote project for Evergreen (US located company) under a program organized by GNOME, called Outreach Program for Woman (now renamed Outreachy). Evergreen needed to migrate a desktop to a web application and chose me to design a new UI style guide and sketch the user interactions."
          stepTitle={Process}
          ProcessParagraph="Collaborate with product management and engineering to define and implement innovative solutions for the product direction, visuals and experience. Establish and promote design guidelines, best practices and standards. Delivered a complete and detailed style guide with UI sketching using Adobe Illustrator."
          images={ImagesArray}
          software={softwareList}
          colorpaletteimg={EvergreenColors}
          labels={LabelList}
          linkButton="View PDF"
          link="http://julialima.com.ar/style-guide.pdf"
        />
      </ProjectDetailsLayout>
    );
  }
}

EvergreenDetails.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(EvergreenDetails);
