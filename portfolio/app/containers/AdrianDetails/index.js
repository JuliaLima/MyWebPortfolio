/*
 *
 * AdrianDetails
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Adrian from './AdrianDetails.png';
import AdrianColors from './AdrianColors.png';
import gall1 from './AdrianDetails.png';
import ProjectsDescription from 'components/ProjectsDescription';
import ProjectDetailsLayout from 'components/ProjectDetailsLayout';
import styled from 'styled-components';

export class AdrianDetails extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    
    const softwareList = [
      "Adobe Illustrator",
      "Adobe Photoshop"
    ]

    const LabelList = [
      "Graphic Design",
      "Visual Designer",
      "Digital Banners"
    ]
    
    const Process = [
      "Research",
      "Understanding",
      "Design",
      "Prototypes",
      "Tests"
    ]

    const ImagesArray = [
      gall1,
      gall1,
      gall1
    ]

    return (
      <ProjectDetailsLayout title="ADRIÁN DE LAS SIERRAS EVT" prevProject="RallyDetails" nextProject="ReySolDetails">
        <ProjectsDescription
          img={Adrian}
          paragraph="Adrián de las Sierras EVT is a travel and tourism agency that sells touristic packages at a wholesale and a retail level in Villa Carlos Paz (Argentina)."
          stepTitle={Process}
          ProcessParagraph="Provide a system that allows information to be permanently updated in an easy way."
          images={ImagesArray}
          software={softwareList}
          colorpaletteimg={AdrianColors}
          labels={LabelList}
          linkButton="View Live Site"
          link="http://adrian.tur.ar/"
        />
      </ProjectDetailsLayout>
    );
  }
}

AdrianDetails.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(AdrianDetails);
