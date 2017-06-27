/*
 *
 * PamelaCayonDetails
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import PamelaCayon from './PamelaCayonDetails.png';
import PamelaCayonColors from './PamelaCayonColors.png';
import gall1 from './gall1.png';
import gall2 from './gall2.png';
import gall3 from './gall3.png';
import gall4 from './gall4.png';
import gall5 from './gall5.png';
import gall6 from './gall6.png';
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


export class PamelaCayonDetails extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const softwareList = [
      "Adobe Illustrator"
    ]

    const LabelList = [
      "UI Design",
      "UI Style Guide",
      "Design Principles",
      "Web App"
    ]

    const Process = [
      "Research",
      "Understanding",
      "Design",
      "Prototypes",
      "Tests"
    ]

    return (
      <ProjectDetailsLayout title="PAMELA CAYON" prevProject="ElMundoDetails" nextProject="RallyDetails">
         <ProjectsDescription
          img={PamelaCayon}
          paragraph="A user-centered teaching kit to be used in the treatment of children diagnosed with Autism Spectrum Disorder (ASD) featuring a stylistic normalization of a pre-existing system. It consists of didactic pieces and a supplementary support framing. Its purpose is to improve the communication stimulation process in children with autism."
          stepTitle={Process}
          ProcessParagraph="Being a project realized from a design perspective, it was necessary to understand ASD, including interviews with health professionals, reading psychology books and papers and web search. Didactic pieces were designed by applying iterative design and interdisciplinary meetings to achieve an effective product from all points of view. It also implied brand design, marketing proposal and pre- and post-printing thinking. Real tests were carried out in sessions under a speech therapist supervision through a detailed form designed to guide the professional when evaluating the kit in front of the child."
          gallery1={gall1}
          gallery2={gall2}
          gallery3={gall3}
          gallery4={gall4}
          gallery5={gall5}
          gallery6={gall6}
          software={softwareList}
          colorpaletteimg={PamelaCayonColors}
          labels={LabelList}
          linkButton="View Live Facebook"
          link="https://www.facebook.com/PamelaCayon/"
        />
      </ProjectDetailsLayout>
    );
  }
}

PamelaCayonDetails.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(PamelaCayonDetails);
