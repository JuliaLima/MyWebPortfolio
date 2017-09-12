/*
 *
 * CenterDetails
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Center from './CenterDetails.png';
import CenterColors from './CenterColors.png';
import gall1 from './CenterDetails.png';
import styled from 'styled-components';
import ProjectDetailsLayout from 'components/ProjectDetailsLayout';
import ProjectsDescription from 'components/ProjectsDescription';

export class CenterDetails extends React.Component { // eslint-disable-line react/prefer-stateless-function
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
      gall1
    ]

    return (
      <ProjectDetailsLayout title="HOTEL CENTER" prevProject="ReySolDetails" nextProject="MagazineDetails">
        <ProjectsDescription
          img={Center}
          paragraph="Website (Design + Development) for a hotel in the city of Villa Carlos Paz (Argentina). Work done jointly with two developers."
          stepTitle={Process}
          ProcessParagraph="Notice the need to own a website to reach more people"
          images={ImagesArray}
          software={softwareList}
          colorpaletteimg={CenterColors}
          labels={LabelList}
          linkButton="View Live Site"
          link="http://www.hotel-center.com.ar/"
        />
      </ProjectDetailsLayout>
    );
  }
}

CenterDetails.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(CenterDetails);
