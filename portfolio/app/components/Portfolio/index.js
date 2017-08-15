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
import LaPedrera from './laPedrera.png'


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
      <Section className="BGwhite" style={{ marginTop:"0rem" }}>
        <Title className="black">
          My projects
        </Title>
        <PortfolioContainer>
          <Project img={BabyOnlineImg} title="BABYONLINE" role="Graphic Designer" Button="/BabyOnlineDetails" />
          <Project img={TuristicosImg} title="TURISTICOS" role="UI/UX Designer" Button="/TuristicosDetails" />
          <Project img={DigaImg} title="DiGA" role="Graphic Designer" Button="/DigaDetails" />
          <Project img={EvergreenImg} title="EVERGREEN" role="UI Designer" Button="/EvergreenDetails" />
          <Project img={RefugioImg} title="CURA BROCHERO" role="Graphic Designer" Button="/RefugioDetails" />
          <Project img={ElMundoImg} title="EL MUNDO RESTAURANT" role="Digital Designer" Button="/ElMundoDetails" />
          <Project img={LaPedrera} title="LA PEDRERA BOUTIQUE" role="Web Designer" Button="/LaPedreraDetails" />
          <Project img={PamelaCayonImg} title="PAMELA CAYON" role="Graphic Designer" Button="/PamelaCayonDetails" />
          <Project img={RallyImg} title="RALLY FIXTURE" role="Graphic Designer" Button="/RallyDetails" />
          <Project img={AdrianImg} title="ADRIAN DE LAS SIERRAS" role="Web Designer" Button="/AdrianDetails" />
          <Project img={ReySolImg} title="REYSOL" role="Graphic Designer" Button="/ReySolDetails" />
          <Project img={CenterImg} title="HOTEL CENTER" role="Web Designer" Button="/CenterDetails" />
          <Project img={MagazineImg} title="MAGAZINE" role="Graphic Designer" Button="/MagazineDetails" />
          <Project img={SocialClubImg} title="SOCIAL CLUB" role="Graphic Designer" Button="/SocialClubDetails" />
        </PortfolioContainer>
      </Section>
    );
  }
}

Portfolio.propTypes = {

};

export default Portfolio;
