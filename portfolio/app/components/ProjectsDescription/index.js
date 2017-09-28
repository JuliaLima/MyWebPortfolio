/**
*
* ProjectsDescription
*
*/

import React from 'react';
import styled from 'styled-components';
import ProcessSteps from 'components/ProcessSteps';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Img = styled.img`
  width: 50%;
  padding: 2rem 0rem;
  text-align: center;
`;

const Paragraph = styled.div`
  text-align: left;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  color: black;
`;

const Process = styled.div`
  width: 50%;
  margin: 2rem;
  color: black;

  h2{
    margin-bottom: 5rem;
  }
`;

const Line = styled.div`
  height: 1px;
  border: 1px solid #307bbb;
  text-align: center;
  margin-bottom: -20px;
  margin-left: auto;
  margin-right: auto;
`;

const Gallery = styled.div`
  display: flex;
  flex: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
`;

  const LinkButton = styled.span`
    background-color: #EE2A7B;
    padding: 1rem 3rem;
    color: white;
  `;


  const Label = styled.div`
      text-decoration: underline;
      list-style-type: none;
      color: gray;
      margin-bottom: 2rem;

      ul {
        list-style: none;
        display: -webkit-box;
        padding: 0rem;
      }

      li {
        padding: 0rem 0.5rem;
      }

      li:first-child {
        padding-left: 0rem;
      }
    `;

    const ExtraInfo = styled.div`
      color: black;
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;

      div:first-child{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
      }

      div:last-child{
        text-align: center;
        margin: 2rem;
      }

      span{
        text-align: left;
      }
    `;

class ProjectsDescription extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
 
  constructor(props) {
    super(props);
    this.generateSoftwareLi = this.generateSoftwareLi.bind(this);
    this.generateSoftwareList = this.generateSoftwareList.bind(this);
    this.generateLabelLi = this.generateLabelLi.bind(this);
    this.generateLabelList = this.generateLabelList.bind(this);
    this.generateGallery = this.generateGallery.bind(this);
    this.ShowLinkButton = this.ShowLinkButton.bind(this);
  }

  generateSoftwareLi(software) {
    return (
      <li key={software}>{software}</li>
    );
  }
  
  generateSoftwareList() {
    return (
      <ul>
        {this.props.software.map(this.generateSoftwareLi)}
      </ul>
    );
  }

  generateLabelLi(label) {
    return (
      <li key={label}>{label}</li>
    );
  }

  generateLabelList() {
    return (
      <ul>
        {this.props.labels.map(this.generateLabelLi)}
      </ul>
    );
  }

  generateGallery() {
    const { images } = this.props;

    if(!images) {
      return null;
    }

    return (
      <Gallery>
        { images.map( image => (<img src={image} />) ) }
      </Gallery>
    );

  }

  ShowLinkButton() {
      if (!!this.props.linkButton) {
        console.log("not empty")
        return (
          <a href={this.props.link} target="_blank" style={{ textDecoration: "none"}}>
            <LinkButton>{this.props.linkButton}</LinkButton>
          </a>
        )
      } else {
        console.log("empty")
        return null
      }
    }

  render() {
    return (
      <Container>
        <Img src={this.props.img} />
        <Paragraph>
          <div>
            <h2>About the project</h2>
            <p>{this.props.paragraph}</p>
          </div>
        </Paragraph>
        <Process>
          <h2>Process</h2>
          <Line />
          <ProcessSteps 
            title={this.props.stepTitle}
            />
            <p>{this.props.ProcessParagraph}</p>
        </Process>
        { this.generateGallery() }
        <ExtraInfo>
          <div style={{ marginBottom:"2rem" }} >
            <span>
              <h2>Software / Web design</h2>
              {this.generateSoftwareList()}
            </span>
            <span style={{ textAlign:"right" }} >
              <h2>Color Pallete</h2>
              <img src={this.props.colorpaletteimg} />
            </span>
          </div>
          <div>{this.ShowLinkButton()}</div>
        </ExtraInfo>
        <Label>{this.generateLabelList()}</Label>
      </Container>
    );
  }
}

ProjectsDescription.propTypes = {

};

export default ProjectsDescription;
