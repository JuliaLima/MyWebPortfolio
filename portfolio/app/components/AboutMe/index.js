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
          <h2 style={{ color:"#00A79D" }}>28 year-old graphic designer born in Argentina, living in New Zealand. I'm really interested on the UI/UX design field and looking forward to push my career onto that path.</h2>
          <Text>
            <li>
              Since I can remember I always loved being <b>creative</b>. As a kid I used to spent hours drawing, painting, doing crafts and more. I used to invest long hours and put a lot of effort in hand-crafting gifts for my loved ones.<br /><br />
              A great influence for me was my family. I was born and raised in an environment surrounded by all kind of art.<br /><br />
              At the beginning of 2009 I started a career I never pictured myself in. From day zero I loved it. It was not olny art, it was applied art. At that point it helped me to understand who I was and, therefore, who I wanted to be: a <b>graphic designer</b>.<br />
            </li>
            <li>
              In 2016 I obtained a bachelor degree in Graphic Design from Universidad Provincial de Córdoba (Argentina). From 2012, I have successfully designed solutions for print media and the IT industry, including <b>websites, web apps UX/UI , logos, business cards, flyers, banners and brochures</b>. My work experience includes working in an <b>agency</b> and several <b>freelance</b> projects.<br /><br />
              I am <b>passionate, dedicated, hardworking and very responsible</b>. I put a lot of attention to <b>details</b>. My philosophy is to learn something new every day and that can only happen if I'm open to experience <b>new things</b>.
            </li>
          </Text>
        </ImgAndDescription>
      </Section>
    );
  }
}

export default AboutMe;
