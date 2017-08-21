/**
*
* Project
*
*/

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';

const Container = styled.div`
  position: relative;
  width: 33%;
`;

const Img = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;

  &:hover {
    background-color: black;
    opacity: 1;
  }
`;

const Text = styled.div`
    color: white;
    font-size: 20px;
    position: absolute;
    z-index: 1000;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;

  span{
    font-size: 0.8rem;
  }

  p{
    margin: 0rem;
  }

  .viewProjectButton {
    cursor: pointer;
    background-color: #00A79D;
    padding: 0.5rem 1rem;
    margin-top: 1rem;
  }

  .Link{
    text-decoration: none;
    color: white;
  }
`;

class Project extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Container>
        <Img src={this.props.img} />
        <Overlay>
          <Text>
            <p><b>{this.props.title}</b></p>
            <span><p><i>{this.props.role}</i></p></span><br />
            <Link to={this.props.Button} className="Link"><span className="viewProjectButton">More details</span></Link>
          </Text>
        </Overlay>
      </Container>
    );
  }
}

Project.propTypes = {

};

export default Project;
