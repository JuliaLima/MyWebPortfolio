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
      gall1
    ]

    return (
      <ProjectDetailsLayout title="WEBSITE DESIGN" prevProject="ElMundoDetails" nextProject="PamelaCayonDetails">
        <ProjectsDescription
          img={Websites}
          paragraph="Here I present a recopilation of websites I took as freelance projects. Adrian de las Sierras EVT, Hotel Center and BusinessInside were companies that trusted me the task."
          stepTitle={Process}
          ProcessParagraph="It is always essential to understand the company when it comes to positioning itself on the web. In all cases the first, and most important, step was to clearly understand the companies' brands and requirements to be able to give an effective solution. Then sketches were created to give notion of the final result based on the requirements. They were shown for feedback and then the hi-fi designs and/or the website implementation followed. A continuous feedback loop with the client was established during the whole implementation of the projects."
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
