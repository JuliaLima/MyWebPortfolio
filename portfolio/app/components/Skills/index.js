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
`;


class Skills extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <h3>Software and Web Design Skills</h3>
        <List>
          Adobe Illustrator<br />
          <li className="bar effect"></li>
          Adobe Photoshop<br />
          <li className="bar effect"></li>
          Adobe InDesign<br />
          <li className="bar effect"></li>
          HTML<br />
          <li className="bar effect"></li>
        </List>
      </div>
    );
  }
}

Skills.propTypes = {

};

export default Skills;
