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
      "Brand Design",
      "Logo",
      "Fashion"
    ]

    const Process = [
      "Requirements",
      "Sketching",
      "Final Design"
    ]

    const ImagesArray = [
      gall1
    ]

    return (
      <ProjectDetailsLayout title="PAMELA CAYON" prevProject="WebsitesDetails" nextProject="RallyDetails">
         <ProjectsDescription
          img={PamelaCayon}
          paragraph="Pamela Cayon is a fashion designer who decided to launch her own brand of clothing. For this, she needed a logo to differentiate from wide competition."
          stepTitle={Process}
          ProcessParagraph="After a meeting in which Pamela raised the need for an identifying sign, a series of sketches were made based on these requirements and ideas that she expressed. Once she selected the option, the final design was delivered."
          images={ImagesArray}
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
