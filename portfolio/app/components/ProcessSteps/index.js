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
    width: 135px;
`;

const ExtremeStepContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
`;

const ExtremeStepCover = styled.span`
    flex: 1;
`;

const FirstStepLeftCover = styled(ExtremeStepCover)`
    background: white;
`;

const LastStepRightCover = styled(ExtremeStepCover)`
    background: white;
`;

class ProcessSteps extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.generateProcessTitle = this.generateProcessTitle.bind(this);
    this.generateProcessLine = this.generateProcessLine.bind(this);
    this.isFirst = this.isFirst.bind(this);
    this.isLast = this.isLast.bind(this);
  }

  isFirst(i) {
    const { title } = this.props;

    if (!title) {
      return false;
    }

    return i === 0;
  }

  isLast(i) {
    const { title } = this.props;

    if (!title) {
      return false;
    }

    return i === (title.length - 1);
  }

  generateProcessTitle(title, index) {
    if (this.isFirst(index)) {
      return (
        <Step>
          <ExtremeStepContainer>
            <FirstStepLeftCover />
            <span className="Circle" style={{margin: "0.5rem 0"}}></span>
            <ExtremeStepCover />
          </ExtremeStepContainer>
          <h4 key={title}>{title}</h4>
        </Step>
      );
    }

    if (this.isLast(index)) {
      return (
        <Step>
          <ExtremeStepContainer>
            <ExtremeStepCover />
            <span className="Circle" style={{margin: "0.5rem 0"}}></span>
            <LastStepRightCover />
          </ExtremeStepContainer>
          <h4 key={title}>{title}</h4>
        </Step>
      );
    }

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
