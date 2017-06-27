/**
*
* Description
*
*/

import React from 'react';
import styled from 'styled-components';

  const LinkButton = styled.span`
    background-color: #EE2A7B;
    padding: 0.5rem 1rem;
    color: white;
  `;

  const Label = styled.div`
    text-decoration: underline;
    list-style-type: none;
    color: gray;

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

class Description extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.generateSoftwareLi = this.generateSoftwareLi.bind(this);
    this.generateSoftwareList = this.generateSoftwareList.bind(this);
    this.generateLabelLi = this.generateLabelLi.bind(this);
    this.generateLabelList = this.generateLabelList.bind(this);
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

  ShowLinkButton() {
    console.log("akjaskj", this.props.linkButton)
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
      <div className="black">
        <div>{this.props.info}</div><br />
        <div style={{ fontWeight:"bold", fontStyle:"italic", textAlign:"center", width:"80%", marginLeft:"auto", marginRight:"auto" }}>{this.props.MyWork}</div><br />
        <div><b>Process:</b><br />{this.props.strategy}</div><br />
        <div><b>Software / Web Design:</b><br />{this.generateSoftwareList()}</div><br />
        <div><b>Color Palette:</b><br /><img src={this.props.colorpaletteimg} /></div><br />
        {this.ShowLinkButton()}<br /><br />
        <Label>{this.generateLabelList()}</Label><br />
      </div>
    );
  }
}

Description.propTypes = {

};

export default Description;
