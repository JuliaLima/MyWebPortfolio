/**
*
* Portfolio
*
*/

import React from 'react';
import Section from 'components/Section';
import Title from 'components/Title';
import Project from 'components/Project';
import styled from 'styled-components';
import BabyOnlineImg from './babyOnline.png'
import DigaImg from './diga.png'
import TuristicosImg from './turisticos.png'
import ElMundoImg from './elMundo.png'
import EvergreenImg from './evergreen.png'
import RefugioImg from './refugio.png'
import AdrianImg from './webAdrian.png'
import ReySolImg from './reysol.png'
import CenterImg from './hotelCenter.png'
import MagazineImg from './magazine.png'
import SocialClubImg from './socialClub.png'
import PamelaCayonImg from './pamelaCayon.png'
import RallyImg from './rally.png'


const PortfolioContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 2rem;
  background-color: white;
`;

class Portfolio extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Section className="BGwhite">
        <Title className="black">
          My projects
        </Title>
        <PortfolioContainer>
          <Project img={BabyOnlineImg} title="BABYONLINE" role="Graphic Designer" Button="#" />
          <Project img={TuristicosImg} title="TURISTICOS" role="UI/UX Designer" Button="#" />
          <Project img={DigaImg} title="DiGA" role="Graphic Designer" Button="#" />
          <Project img={ElMundoImg} title="EL MUNDO RESTAURANT" role="Digital Designer" Button="#" />
          <Project img={EvergreenImg} title="EVERGREEN" role="UI Designer" Button="#" />
          <Project img={PamelaCayonImg} title="PAMELA CAYON" role="Graphic Designer" Button="#" />
          <Project img={RallyImg} title="RALLY FIXTURE" role="Graphic Designer" Button="#" />
          <Project img={AdrianImg} title="ADRIAN DE LAS SIERRAS" role="Web Designer" Button="#" />
          <Project img={ReySolImg} title="REYSOL" role="Graphic Designer" Button="#" />
          <Project img={CenterImg} title="HOTEL CENTER" role="Web Designer" Button="#" />
          <Project img={MagazineImg} title="MAGAZINE" role="Graphic Designer" Button="#" />
          <Project img={RefugioImg} title="CURA BROCHERO" role="Graphic Designer" Button="#" />
          <Project img={SocialClubImg} title="SOCIAL CLUB" role="Graphic Designer" Button="#" />
        </PortfolioContainer>
      </Section>
    );
  }
}

Portfolio.propTypes = {

};

export default Portfolio;
