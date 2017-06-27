/*
 *
 * EvergreenDetails
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Evergreen from './EvergreenDetail.png';
import gall1 from './gall1.png';
import gall2 from './gall2.png';
import gall3 from './gall3.png';
import gall4 from './gall4.png';
import gall5 from './gall5.png';
import gall6 from './gall6.png';
import EvergreenColors from './EvergreenColors.png';
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
      "Web App",
      "Libraries"
    ]

    const Process = [
      "Ramp Up",
      "Guidelines",
      "Design",
      "Application"
    ]

    return (
      <ProjectDetailsLayout title="EVERGREEN" prevProject="DigaDetails" nextProject="RefugioDetails">
        <ProjectsDescription
          img={Evergreen}
          paragraph="Freelance project for a US company called Evergreen under a program organized by GNOME, called Outreach Program for Woman (now renamed Outreachy). Evergreen needed to migrate a desktop to a web application."
          stepTitle={Process}
          ProcessParagraph="Collaborate with product management and engineering to define and implement innovative solutions for the product direction, visuals and experience. Establish and promote design guidelines, best practices and standards. Delivered a complete and detailed style guide with UI sketching using Adobe Illustrator."
          gallery1={gall1}
          gallery2={gall2}
          gallery3={gall3}
          gallery4={gall5}
          gallery5={gall6}
          gallery6={gall4}
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
