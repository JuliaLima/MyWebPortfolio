/*
 *
 * TuristicosDetails
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Turisticos from './TuristicosDetails.png';
import TuristicosColors from './TuristicosColors.png';
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
      "Responsive Design",
      "Brand Design"
    ]

    const Process = [
      "Research",
      "Understanding",
      "Design",
      "Prototypes",
      "Tests"
    ]

    return (
      <ProjectDetailsLayout title="TURÍSTICOS" prevProject="BabyOnlineDetails" nextProject="DigaDetails">
        <ProjectsDescription
          img={Turisticos}
          paragraph="An e-commerce web application which purpose is to sell entretainments, activities, restaurants and trips to tourists at local level. Nowadays it is being used in two cities of Argentina (Córdoba and Bariloche) and is continually improving the usability and experience of current users."
          stepTitle={Process}
          ProcessParagraph="Collaborate closely with the team by providing product definitions and user flows, UI scketching using HTML and CSS, conducting user research and evaluating user feedback."
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
