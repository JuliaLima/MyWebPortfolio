/*
 *
 * BabyOnlineDetails
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import BabyOnline from './ProjectDetail-01.png';
import BabyOnlineColors from './Colors.png';
import ImgAndDescription from 'components/ImgAndDescription';
import Description from 'components/Description';
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

    return (
      <ProjectDetailsLayout title="BABYONLINE" prevProject="/" nextProject="TuristicosDetails">
        <ImgAndDescription img={BabyOnline} >
          <Description
            info="BabyOnline (a division of Waysoft Ltd.) is one of the leaders in the disposable nappies market in New Zealand. They also specialize in ´everything Baby´ like nappies, mummy bags, pacifiers, prams and toys."
            MyWork="Promotions and discounts change every week, so I design digital banners to communicate them to customers through their website, email campaigns and mobile app. I also design labels, boxes and greeting cards when needed."
            software={softwareList}
            colorpaletteimg={BabyOnlineColors}
            labels={LabelList}
            strategy="Create colorful and attractive banners."
            link="View Live Site"
            />
        </ImgAndDescription>
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
