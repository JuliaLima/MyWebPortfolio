/*
 *
 * BabyOnlineDetails
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import BabyOnline from './BabyOnlineDetail.png';
import BabyOnlineColors from './Colors.png';
import gall1 from './gall1.png';
import gall2 from './gall2.png';
import gall3 from './gall3.png';
import gall4 from './gall4.png';
import gall5 from './gall5.png';
import gall6 from './gall6.png';
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
      "Babies",
      "Digital Banners",
      "Packaging"
    ]
    
    const Process = [
      "Proposal",
      "Feedback",
      "Design"
    ]

    return (
      <ProjectDetailsLayout title="BABYONLINE" prevProject="/" nextProject="TuristicosDetails">
        <ProjectsDescription
          img={BabyOnline}
          paragraph="BabyOnline (a division of Waysoft Ltd.) is one of the leaders in the disposable nappies market in New Zealand. They also specialize in ´everything Baby´ like nappies, mummy bags, pacifiers, prams and toys. The company publishes digital banners on its website to communicate to its customers discounts, new arrivals and special promotions. They also need eventual designs such as boxes, labels and photographs."
          stepTitle={Process}
          ProcessParagraph="Design requirements are usually simple and similar. A proposal is submitted, feedback is obtained and improvements or changes are made. Once a satisfactory result is achieved, the final piece is produced or published on the web depending on its nature (physical or digital)."
          gallery1={gall1}
          gallery2={gall5}
          gallery3={gall3}
          gallery4={gall4}
          gallery5={gall6}
          gallery6={gall2}
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
