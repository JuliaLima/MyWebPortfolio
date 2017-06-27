/*
 *
 * CenterDetails
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Center from './CenterDetails.png';
import CenterColors from './CenterColors.png';
import ImgAndDescription from 'components/ImgAndDescription';
import Description from 'components/Description';
import styled from 'styled-components';
import ProjectDetailsLayout from 'components/ProjectDetailsLayout';

const Header = styled.div`
  background-color: #00A79D;
  text-align: center;
  width: 100%;
  height: 50vh;
  padding-top: 1.5rem;
`;

const Copyright = styled.span`
    color: gray;
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 0.6rem;
    padding: 1rem 0rem;
    background-color: white;
`;

const Title = styled.div`
  font-size: 4rem;
  font-weight: bold;
  margin-top: 2rem;
`;

export class CenterDetails extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const softwareList = [
      "Adobe Illustrator",
      "Css",
      "Html"
    ]

    const LabelList = [
      "Web Design",
      "Hotel"
    ]
    return (
      <ProjectDetailsLayout title="HOTEL CENTER" prevProject="ReySolDetails" nextProject="MagazineDetails">
        <ImgAndDescription img={Center} >
          <Description
            info="Website (Design + Development) for a hotel in the city of Villa Carlos Paz (Argentina). Work done jointly with two developers."
            MyWork="Notice the need to own a website to reach more people"
            software={softwareList}
            colorpaletteimg={CenterColors}
            labels={LabelList}
            strategy="SKETCHING: After talking to the owner of the hotel, it was noted that they do not have a style for the graphics/advertising pieces of their business. Therefore, a design based on a personal card was proposed and it was accepted.
            IMPLEMENTATION: Once the texts and photos were obtained, both developers proceeded to the implementation of the design proposed. It also implies hosting services."
            linkButton="View Live Site"
            link="http://www.hotel-center.com.ar/"
            />
        </ImgAndDescription>
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
