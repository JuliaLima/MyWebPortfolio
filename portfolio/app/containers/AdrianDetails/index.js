/*
 *
 * AdrianDetails
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Adrian from './AdrianDetails.png';
import AdrianColors from './AdrianColors.png';
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

export class AdrianDetails extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const softwareList = [
      "Drupal"
    ]

    const LabelList = [
      "Web Design",
      "Tourism Agency"
    ]
    return (
      <ProjectDetailsLayout title="ADRIÁN DE LAS SIERRAS EVT" prevProject="RallyDetails" nextProject="ReySolDetails">
        <ImgAndDescription img={Adrian} >
          <Description
            info="Adrián de las Sierras EVT is a travel and tourism agency that sells touristic packages at a wholesale and a retail level in Villa Carlos Paz (Argentina)."
            MyWork="Provide a system that allows information to be permanently updated in an easy way."
            software={softwareList}
            colorpaletteimg={AdrianColors}
            labels={LabelList}
            strategy="UNDERSTAN THE NEED: "
            linkButton="View Live Site"
            link="http://adrian.tur.ar/"
            />
        </ImgAndDescription>
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
