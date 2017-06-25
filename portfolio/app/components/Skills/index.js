/**
*
* Skills
*
*/

import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
	list-style: none;
  margin: 0rem;
  padding: 0rem;
  width: 100%;

  h5{
    margin-top: 0rem;
    margin-bottom: 0.5rem;
  }

  li{
    margin-bottom: 0.5rem;
  }
`;


class Skills extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <h3>Software and Web Design Skills</h3>
        <List>
          <h5>Adobe Illustrator</h5>
          <li className="bar effect"></li>
          <h5>Adobe Photoshop</h5>
          <li className="bar effect"></li>
          <h5>Adobe InDesign</h5>
          <li className="bar effect"></li>
          <h5>HTML</h5>
          <li className="bar effect"></li>
        </List>
      </div>
    );
  }
}

Skills.propTypes = {

};

export default Skills;
