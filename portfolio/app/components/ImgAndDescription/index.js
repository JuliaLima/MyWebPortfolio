/**
*
* ImgAndDescription
*
*/

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Div = styled.div`
  width: 30%;
  text-align: left;
`;

const Img = styled.img`
  width: 80%;
  margin: 0rem;
`;

const Description = styled.p`
    margin: 0rem;
    width: 70%;
    padding: 0rem 2rem;
    text-align: left;
`;

class ImgAndDescription extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Container>
        <Div>
          <Img src={this.props.img} />
        </Div>
        <Description>
          {this.props.children}
        </Description>
      </Container>
    );
  }
}

ImgAndDescription.propTypes = {

};

export default ImgAndDescription;
