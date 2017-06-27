/**
*
* Skills
*
*/

import React from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import Section from 'components/Section';
import Js from './js.png';
import Cdr from './cdr.png';
import Ai from './ai.png';
import Xd from './xd.png';
import Css from './css.png';
import Html from './html.png';
import Sk from './sk.png';
import Id from './id.png';
import Ps from './ps.png';
import PercentageCircle from "react-percentage-circle";

const Jsimg = styled.img`
	text-align: center;
`;

const Cdrimg = styled.img`
	text-align: center;
`;

const Aiimg = styled.img`
	text-align: center;
`;

const Xdimg = styled.img`
	text-align: center;
`;

const Cssimg = styled.img`
	text-align: center;
`;

const Htmlimg = styled.img`
	text-align: center;
`;

const Skimg = styled.img`
	text-align: center;
`;

const Idimg = styled.img`
	text-align: center;
`;

const Psimg = styled.img`
	text-align: center;
`;

const Container = styled.div`
	display: flex;
    flex-direction: row;
    justify-content: center;
    height: 10rem;

    p {
        font-size: 0.6rem;
        text-align: center;
        margin-top: 5.5rem;
        font-style: italic;
    }
`;


class Skills extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Section className="skills" style={{ marginTop:"0rem" }}>
         <h1>Software & Web Design Skills</h1><br />
         <p style={{ marginTop:"-2rem", marginBottom:"2rem"}}><b>Learning: </b>Sketch and Javascript</p>
         <Container>
             <div className="c100 p90 small" style={{ margin:"0rem 2rem" }}>
                <span>
                    <Cdrimg src={Cdr} />
                </span>
                <div className="slice">
                    <div className="bar"></div>
                    <div className="fill"></div>
                    <p>CorelDraw<br />90%</p>
                </div>
            </div>
            <div className="c100 p95 small" style={{ margin:"0rem 2rem" }}>
                <span>
                    <Aiimg src={Ai} />
                </span>
                <div className="slice">
                    <div className="bar"></div>
                    <div className="fill"></div>
                    <p>Adobe Illustrator<br />95%</p>
                </div>
            </div>
            <div className="c100 p55 small" style={{ margin:"0rem 2rem" }}>
                <span>
                    <Psimg src={Ps} />
                </span>
                <div className="slice">
                    <div className="bar"></div>
                    <div className="fill"></div>
                    <p>Adobe Photoshop<br />55%</p>
                </div>
            </div>
            <div className="c100 p35 small" style={{ margin:"0rem 2rem" }}>
                <span>
                    <Idimg src={Id} />
                </span>
                <div className="slice">
                    <div className="bar"></div>
                    <div className="fill"></div>
                </div>
                <p>Adobe InDesign<br />35%</p>
            </div>
            <div className="c100 p90 small" style={{ margin:"0rem 2rem" }}>
                <span>
                    <Xdimg src={Xd} />
                </span>
                <div className="slice">
                    <div className="bar"></div>
                    <div className="fill"></div>
                    <p>Adobe Experience Design 90%</p>
                </div>
            </div>
            <div className="c100 p85 small" style={{ margin:"0rem 2rem" }}>
                <span>
                    <Cssimg src={Css} />
                </span>
                <div className="slice">
                    <div className="bar"></div>
                    <div className="fill"></div>
                    <p>CSS<br />85%</p>
                </div>
            </div>
            <div className="c100 p90 small" style={{ margin:"0rem 2rem" }}>
                <span>
                    <Htmlimg src={Html} />
                </span>
                <div className="slice">
                    <div className="bar"></div>
                    <div className="fill"></div>
                    <p>HTML<br />90%</p>
                </div>
            </div>
        </Container>
      </Section>
    );
  }
}

Skills.propTypes = {

};

export default Skills;
