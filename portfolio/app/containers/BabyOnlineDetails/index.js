/*
 *
 * BabyOnlineDetails
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import JLLogoSmall from './jl-02.png';
import BabyOnline from './ProjectDetail-01.png';
import BabyOnlineColors from './BabyOnlineColors.png';
import Section from 'components/Section';
import ImgAndDescription from 'components/ImgAndDescription';
import PBNbuttons from 'components/PBNbuttons';
import Description from 'components/Description';
import styled from 'styled-components';

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

export class BabyOnlineDetails extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {

    const softwareList = [
      "Adobe Illustrator",
      "Adobe Photoshop"
    ]

    const LabelList = [
      "Graphic Design",
      "Visual Designer",
      "Digital Banners"
    ]

    return (
      <div>
        <Header>
          <img src={JLLogoSmall} />
          <Title>BABYONLINE</Title>
        </Header>
        <Section style={{ marginTop:"0rem", backgroundColor: "white" }}>
          <ImgAndDescription img={BabyOnline} >
            <Description
              info="BabyOnline (a division of Waysoft Ltd.) is one of the leaders in the disposable nappies market in New Zealand. They also specialize in ´everything Baby´ like nappies, mummy bags, pacifiers, prams and toys."
              MyWork="Promotions and discounts change every week, so I design digital banners to communicate them to customers through their website, email campaigns and mobile app. I also design labels, boxes and greeting cards when needed."
              software={softwareList}
              colorpaletteimg={BabyOnlineColors}
              labels= {LabelList}
              strategy= "Create colorful and attractive banners."
              link= "View Live Site"
              />
          </ImgAndDescription>
        </Section>
        <PBNbuttons />
        <Copyright>&copy; 2017 - Julia Lima. All rights reserved.</Copyright>
    </div>
    );
  }
}

BabyOnlineDetails.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(BabyOnlineDetails);
