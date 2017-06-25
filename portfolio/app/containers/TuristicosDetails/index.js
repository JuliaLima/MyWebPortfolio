/*
 *
 * TuristicosDetails
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Turisticos from './TuristicosDetails.png';
import TuristicosColors from './TuristicosColors.png';
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

export class TuristicosDetails extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const softwareList = [
      "Adobe Illustrator",
      "HTML",
      "CSS",
      "JavaScript"
    ]

    const LabelList = [
      "UX/UI Design",
      "Web Design",
      "Responsive Design"
    ]

    return (
      <ProjectDetailsLayout title="TURISTICOS" prevProject="BabyOnlineDetails" nextProject="DigaDetails">
        <ImgAndDescription img={Turisticos} >
          <Description
            info="An e-commerce web application developed with a tourism expert and a computer engineer. Its purpose is to sell entretainments, activities, restaurants and trips to tourists at local level. Nowadays it is being used in two cities of Argentina."
            MyWork="Hola"
            software={softwareList}
            colorpaletteimg={TuristicosColors}
            labels={LabelList}
            strategy="hola"
            link="View Live Site"
            />
        </ImgAndDescription>
      </ProjectDetailsLayout>
    );
  }
}

TuristicosDetails.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(TuristicosDetails);