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
  justify-content: space-around;
  align-items: flex-start;
`;

const Div = styled.div`
  width: 50%;
  text-align: center;
`;

const Img = styled.img`
  width: 100%;
  padding: 2rem;
`;

const Description = styled.p`
    margin: 0rem;
    padding: 2rem;
    text-align: left;
    padding-top: 2rem;
`;

class ImgAndDescription extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Container>
        <Div>
          <Img src={this.props.img} />
        </Div>
        <Div>
          <Description>
            {this.props.children}
          </Description>
        </Div>
      </Container>
    );
  }
}

ImgAndDescription.propTypes = {

};

export default ImgAndDescription;
