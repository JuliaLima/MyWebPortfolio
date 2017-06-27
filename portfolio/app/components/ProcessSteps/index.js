/**
*
* ProcessSteps
*
*/

import React from 'react';
import styled from 'styled-components';

const StepContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;


const Step = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0rem 1rem;
`;


class ProcessSteps extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.generateProcessTitle = this.generateProcessTitle.bind(this);
    this.generateProcessLine = this.generateProcessLine.bind(this);
  }


  generateProcessTitle(title) {
    return (
      <Step>
        <span className="Circle"></span>
        <h4 key={title}>{title}</h4>
      </Step>
    );
  }

  generateProcessLine() {
    return (
       this.props.title.map(this.generateProcessTitle)
    );
  }

  render() {
    return (
      <StepContainer>
        {this.generateProcessLine()}
      </StepContainer>
    );
  }
}

ProcessSteps.propTypes = {

};

export default ProcessSteps;
