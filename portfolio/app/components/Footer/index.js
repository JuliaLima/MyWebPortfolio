/**
*
* Footer
*
*/

import React from 'react';
import styled from 'styled-components';
import Section from 'components/Section';
import Title from 'components/Title';
import FontAwesome from 'react-fontawesome';

const Info = styled.div`
  padding: 0rem 2rem;
  text-align: center;

  i{
      padding-right: 1rem;
      margin-bottom: 2rem;
      color: #00A79D;
  }

  span{
    text-align: center;
    color: gray;
    font-size: 0.6rem;
    padding-bottom: 1rem;
  }
`;

class Footer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Section>
        <Title>
          Contact
        </Title>
        <Info>
          <p>Feel free to get in touch with me if you have any questions or projects coming up. I'd love to hear from you!</p>
          <FontAwesome name='envelope' style={{ paddingRight: '1rem', color: '#00A79D', fontSize: '1rem', marginBottom: "2rem" }} />julia.lima.dg@gmail.com<br />
          <span>&copy; 2017 - Julia Lima. All rights reserved.</span>
        </Info>
      </Section>
    );
  }
}

Footer.propTypes = {

};

export default Footer;
