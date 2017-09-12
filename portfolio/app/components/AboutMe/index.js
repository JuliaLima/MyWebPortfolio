/**
*
* AboutMe
*
*/

import React from 'react';
import Section from 'components/Section';
import Title from 'components/Title';
import Me from './me.png';
import ImgAndDescription from 'components/ImgAndDescription';
import styled from 'styled-components';

const Text = styled.ul`
  list-style: none;
  padding-left: 0rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0rem;

  li{
    width: 45%;
    font-size: 0.9rem;
  }
`;

class AboutMe extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Section>
        <Title>
          About me
        </Title>
        <ImgAndDescription img={Me}>
          <h1>Hi! I'm Julia.</h1>
          <h2 style={{ color:"#00A79D" }}>27 year-old graphic designer born in Argentina, living in New Zealand. I'm really interested on the UI/UX design field and looking forward to push my career onto that path.</h2>
          <Text>
            <li>
              I do not remember how it all started, but I always liked being <b>creative</b>. As a kid I used to spend hours drawing, painting, doing crafts and dedicating a lot of time and effort to letters or cards I gave to my loved ones.<br /><br />
              I suddenly realized that little by little I stopped doing artistic things so, over time, I forgot that I really like it.<br /><br />
              At the beginning of 2009 I found myself studying a career that had never occurred to me in the previous years but from day zero made me understand who I was and, therefore, who I wanted to be: a <b>graphic designer</b>.<br />
            </li>
            <li>
              In 2016 I obtained a bachelor degree in Graphic Design from Universidad Provincial de Córdoba (Argentina). From 2012, I have successfully designed solutions for print media and the IT industry, including <b>websites, web apps UX/UI , logos, business cards, flyers, banners and brochures</b>. My work experience includes working in an <b>agency</b> and several <b>freelance</b> projects.<br /><br />
              I am <b>passionate, dedicated, hardworking and very responsible</b>. I put a lot of attention in <b>details</b>. My life philosophy is to learn something new every day and that can only happen if I'm open to experience <b>new things</b>.
            </li>
          </Text>
        </ImgAndDescription>
      </Section>
    );
  }
}

export default AboutMe;
