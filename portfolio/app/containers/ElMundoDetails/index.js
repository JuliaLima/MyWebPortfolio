/*
 *
 * ElMundoDetails
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import ElMundo from './ElMundoDetails.png';
import ElMundoColors from './ElMundoColors.png';
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

export class ElMundoDetails extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const softwareList = [
      "Adobe Illustrator"
    ]

    const LabelList = [
      "Comunity Management",
      "Graphic Design",
      "Banners",
      "Flyers"
    ]

    const Process = [
      "Need",
      "Definition",
      "Proposal",
      "Launching"
    ]

    const ImagesArray = [
      gall1,
      gall2,
      gall3,
      gall4,
      gall5,
      gall6
    ]

    return (
      <ProjectDetailsLayout title="EL MUNDO RESTAURANT" prevProject="RefugioDetails" nextProject="WebsitesDetails">
         <ProjectsDescription
          img={ElMundo}
          paragraph="El Mundo is a traditional restaurant in the city of Villa Carlos Paz (Argentina) with many years of experience and great quality. The need was to make an important campaign to promote it during low tourist seasons."
          stepTitle={Process}
          ProcessParagraph="Once raised the need to promote the restaurant highlighting its trajectory, quality and promotions, a detailed strategy was designed including publications in social networks (Facebook, Instagram and Twitter), flyers and radio advertising. The central idea of the campaign was to generate a link with customers maintaining an attitude of warmth and confidence while strengthening the already created with frequent diners."
          images={ImagesArray}
          software={softwareList}
          colorpaletteimg={ElMundoColors}
          labels={LabelList}
        />
      </ProjectDetailsLayout>
    );
  }
}

ElMundoDetails.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(ElMundoDetails);
