/*
 *
 * WebsitesDetails
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Websites from './WebsitesDetails.png';
import WebsitesColors from './Colors.png';
import gall1 from './gall1.png';
import gall2 from './gall2.png';
import gall3 from './gall3.png';
import gall4 from './gall4.png';
import gall5 from './gall5.png';
import gall6 from './gall6.png';
import ProjectsDescription from 'components/ProjectsDescription';
import styled from 'styled-components';
import ProjectDetailsLayout from 'components/ProjectDetailsLayout';

export class WebsitesDetails extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const softwareList = [
      "Adobe Illustrator",
      "Drupal",
      "Wordpress",
      "CSS",
      "HTML"
    ]

    const LabelList = [
      "Website",
      "Web Design"
    ]

    const Process = [
      "Rquirements",
      "Sketching",
      "Design",
      "Delivery"
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
      <ProjectDetailsLayout title="WEBSITE DESIGN" prevProject="ElMundoDetails" nextProject="PamelaCayonDetails">
        <ProjectsDescription
          img={Websites}
          paragraph="In the last years it has become necessary for businesses to be present on the internet due to the wide range of people that can be reached. Adrian de las Sierras EVT, Hotel Center and BusinessInside were companies that decided to be in the www's world."
          stepTitle={Process}
          ProcessParagraph="It is always essential to understand the company when it comes to positioning itself on the web. The first step, and the most important, is to know the requirements to be able to give an effective solution. Then sketches will be created to give nocion of the final result based on the requirements. They will be shown for feedback before beginning the design itself. The design is nothing more than the implementation and development of the proposal raised in the previous stage. When the whole process is finished, the company is once again consulted. In case everything is okay, the website will be published, otherwise, work will continue until it meets the requirements and then will be published."
          images={ImagesArray}
          software={softwareList}
          colorpaletteimg={WebsitesColors}
          labels={LabelList}
        />
      </ProjectDetailsLayout>
    );
  }
}

WebsitesDetails.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(WebsitesDetails);
