/*
 *
 * BabyOnlineDetails
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import BabyOnline from './ProjectDetail.png';
import BabyOnlineColors from './Colors.png';
import gall1 from './gall1.png';
import gall2 from './gall2.png';
import gall3 from './gall3.png';
import ProjectsDescription from 'components/ProjectsDescription';
import ProjectDetailsLayout from 'components/ProjectDetailsLayout';
import styled from 'styled-components';

export class BabyOnlineDetails extends React.Component { // eslint-disable-line react/prefer-stateless-function
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

    return (
      <ProjectDetailsLayout title="BABYONLINE" prevProject="/" nextProject="TuristicosDetails">
        <ProjectsDescription
          img={BabyOnline}
          paragraph="BabyOnline (a division of Waysoft Ltd.) is one of the leaders in the disposable nappies market in New Zealand. They also specialize in ´everything Baby´ like nappies, mummy bags, pacifiers, prams and toys."
          stepTitle={Process}
          ProcessParagraph="Promotions and discounts change every week, so BabyOnline need digital banners to communicate them to their customers through its website, email campaigns and mobile app."
          gallery1={gall1}
          gallery2={gall2}
          gallery3={gall3}
          software={softwareList}
          colorpaletteimg={BabyOnlineColors}
          labels={LabelList}
          linkButton="View Live Site"
          link="https://www.babyonline.co.nz/"
        />
      </ProjectDetailsLayout>
    );
  }
}

BabyOnlineDetails.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(BabyOnlineDetails);
