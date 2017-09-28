/*
 *
 * RavenDetails
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import RavenImg from './ravenDetails.png';
import gall1 from './gall1.png';
import ravenColors from './ravenColors.png';
import ProjectsDescription from 'components/ProjectsDescription';
import styled from 'styled-components';
import ProjectDetailsLayout from 'components/ProjectDetailsLayout';

export class RavenDetails extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {

    const softwareList = [
      "Adobe Experience Design",
      "Adobe Illustrator",
      "CSS",
      "HTML"
    ]

    const LabelList = [
      "Mobile App",
      "Web App",
      "UX Design",
      "UI Design",
      "Interaction Design"
    ]

    const Process = [
      "Rquirements",
      "Sketching",
      "Design",
      "Feedback",
      "Deliver"
    ]

    const ImagesArray = [
      gall1
    ]

    return (
      <ProjectDetailsLayout title="GRUPO PROYECTAR" prevProject="/" nextProject="BabyOnlineDetails">
        <ProjectsDescription
          img={RavenImg}
          paragraph="WORK IN PROGRESS. A mobile application to control the medical professionals who care for their patients at home. Through the combination of three factors (wifi network, GPS and QR code) it will be possible to know if the professional attended the agreed session. It also will allow the professional to organize their visit schedule as they have a large list of patients. The data obtained in the measurement of the factors can be visualized in a web application controlled by administrative personnel of the company 'Grupo Proyectar'."
          stepTitle={Process}
          ProcessParagraph="Once the company 'Grupo Proyectar' raised their problem, it began a deep search for a solution. The proposal was accepted with great enthusiasm. After a hard month of thinking the software design and UI's, the implementation was started. The first version is based on the load of basic data, while the Rav3n team (two developers and a designer) continue to advance with the rest of the project."
          images={ImagesArray}
          software={softwareList}
          colorpaletteimg={ravenColors}
          labels={LabelList}
        />
      </ProjectDetailsLayout>
    );
  }
}

RavenDetails.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(RavenDetails);
