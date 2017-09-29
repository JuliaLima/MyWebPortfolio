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
          paragraph="WORK IN PROGRESS. A mobile application to control home-care services efficiency by monitoring activities of the in charge medical professionals. The central part of the project is given by the combination of three monitoring factors (wifi network, GPS and QR code) that will make possible to determine if a professional attended the agreed sessions with the patient. It will also allow the professional to organize their visit schedule as they have a large list of patients. All this data will be visualized in a web application controlled by administrative personnel of the company 'Grupo Proyectar'. The project was taken by me plus two software engineers, we decided to call ourselves the Rav3n team and we are already thinking in deliver this service for solving more remote monitoring issues in the market."
          stepTitle={Process}
          ProcessParagraph="Once the company 'Grupo Proyectar' raised their problem, we began a deep search for a solution. The proposal was accepted with great enthusiasm. After a hard month of thinking the software design and UI's, the implementation has started. The first version is targeting base data loading and asignments."
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
