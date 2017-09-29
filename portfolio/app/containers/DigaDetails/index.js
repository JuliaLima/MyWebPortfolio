/*
 *
 * DigaDetails
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Diga from './Diga.png';
import gall1 from './gall1.png';
import TuristicosColors from './Colors.png';
import ProjectsDescription from 'components/ProjectsDescription';
import styled from 'styled-components';
import ProjectDetailsLayout from 'components/ProjectDetailsLayout';

export class DigaDetails extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const softwareList = [
      "Adobe Illustrator",
      "Adobe InDesign"
    ]

    const LabelList = [
      "Graphic Design",
      "User-centered Design",
      "Autism Spectrum Disorder",
      "Communication"
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
      <ProjectDetailsLayout title="DiGA (Diseño Gráfico para el Autismo)" prevProject="TuristicosDetails" nextProject="EvergreenDetails">
        <ProjectsDescription
          img={Diga}
          paragraph="A user-centered teaching kit to be used in the treatment of children diagnosed with Autism Spectrum Disorder (ASD) featuring a stylistic normalization of a pre-existing system. It consists of didactic pieces and a supplementary support framing. Its purpose is to improve the communication stimulation process in children with autism."
          stepTitle={Process}
          ProcessParagraph="It was necessary to understand ASD, including interviews with health professionals, reading psychology books and papers and web search. Didactic pieces were designed by applying iterative design and interdisciplinary meetings to achieve an effective product from all points of view. It also implied brand design, marketing proposal and pre- and post-printing thinking. Real tests were carried out in sessions under a speech therapist supervision through a detailed form designed to guide the professional when evaluating the kit in front of the child."
          images={ImagesArray}
          software={softwareList}
          colorpaletteimg={TuristicosColors}
          labels={LabelList}
          linkButton="View PDF"
          link="https://drive.google.com/drive/u/0/folders/0B5CCgrQZ517CTGI1MnExcVM1bEE"
        />
      </ProjectDetailsLayout>
    );
  }
}

DigaDetails.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(DigaDetails);

