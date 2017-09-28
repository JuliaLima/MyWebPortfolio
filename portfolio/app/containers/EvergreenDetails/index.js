/*
 *
 * EvergreenDetails
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Evergreen from './EvergreenDetail.png';
import gall1 from './gall1.svg';
import gall2 from './gall2.svg';
import gall3 from './gall3.svg';
import gall4 from './gall4.svg';
import gall5 from './gall5.svg';
import gall6 from './gall6.svg';
import EvergreenColors from './Colors.png';
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
      gall1,
      gall2,
      gall3,
      gall4,
      gall5,
      gall6
    ]

    return (
      <ProjectDetailsLayout title="EVERGREEN" prevProject="DigaDetails" nextProject="RefugioDetails">
        <ProjectsDescription
          img={Evergreen}
          paragraph="Freelance project for a US company called Evergreen under a program organized by GNOME, called Outreach Program for Woman (now renamed Outreachy). Evergreen needed to migrate a desktop to a web application."
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
