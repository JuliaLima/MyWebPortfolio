/**
*
* AboutMe
*
*/

import React from 'react';
import Section from 'components/Section';
import Title from 'components/Title';
import Me from './me1.jpg';
import ImgAndDescription from 'components/ImgAndDescription';
import Skills from 'components/Skills';
// import styled from 'styled-components';


class AboutMe extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Section>
        <Title>
          About me
        </Title>
        <ImgAndDescription img={Me}>
          <Skills />
        </ImgAndDescription>
      </Section>
    );
  }
}

export default AboutMe;
