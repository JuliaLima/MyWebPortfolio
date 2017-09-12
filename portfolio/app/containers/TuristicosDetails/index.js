/*
 *
 * TuristicosDetails
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Turisticos from './TuristicosDetails.png';
import TuristicosColors from './TuristicosColors.png';
import gall1 from './gall1.png';
import gall2 from './gall2.png';
import gall3 from './gall3.png';
import gall4 from './gall4.png';
import ProjectsDescription from 'components/ProjectsDescription';
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
      "CSS"
    ]

    const LabelList = [
      "UX/UI Design",
      "UX Research",
      "Interaction Design",
      "Responsive Design"
    ]

    const Process = [
      "Definitions",
      "Sketching",
      "Implementation",
      "Presentation",
      "Feedback"
    ]

    const ImagesArray = [
      gall1,
      gall2,
      gall3,
      gall4
    ]

    return (
      <ProjectDetailsLayout title="TURÍSTICOS" prevProject="BabyOnlineDetails" nextProject="DigaDetails">
        <ProjectsDescription
          img={Turisticos}
          paragraph="Freelance project. An e-commerce web application which purpose is to sell entretainments, activities, restaurants and trips to tourists at local level. Nowadays it is being used in two cities of Argentina (Córdoba and Bariloche) and is continually improving the usability and experience of current users. The team consists of a developer, a tourism expert and a graphic designer."
          stepTitle={Process}
          ProcessParagraph="It was started by defining the need and making a tentative proposal of the solution knowing that it would be able to change taking into account that an iterative design was followed permanently. The next step was to think and develop UI's through wireframes and interaction schemes. Once the team agreed, sketching and coding started. It was decided to finish the implementation in a point where the features were sufficiently useful and functional, so the product was released in its version 1 (August 2016). Once the application was delivered and started to be used, it was taken into account user's feedback and certain aspects were improved based on the constructive criticisms obtained. Currently the product is being used normally and in a few months a second version with more and new features will be launched."
          images={ImagesArray}
          software={softwareList}
          colorpaletteimg={TuristicosColors}
          labels={LabelList}
          linkButton="View Live Site"
          link="http://vcp.turisticos.com.ar/login"
        />
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
