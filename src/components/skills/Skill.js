import React, { useEffect } from 'react'
import "./Skill.css"
import { Container,Card, } from 'react-bootstrap'
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io";
import { RiJavascriptFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { Circle, Line } from 'rc-progress';
class Skill extends React.Component {
    constructor(props) {
        super(props);
        this.state = { progress: 0 };
      }
    
    render(){const progressFillStyle = {
        transform: `rotate(${this.state.progress / 100 * 360 + 90}deg)`,
        clipPath: `circle(${this.state.progress}% at center)`}
  return (
    <div className='skill' id='skills'>
      <h1>My <span>Skills</span></h1>
      <div className='skillcon'>
      <Container>
        <h3>Technical Skills</h3>
        <Container  className='innercon'>
        <Card>
            <Card.Body>
            <TiHtml5 className='imh ' style={{color:"#c95d2e"}} />
            <p>HTML</p>
            <div className='kk html'>
            <span></span>
            </div>
            </Card.Body>
        </Card>
        <Card>
            <Card.Body>
            <IoLogoCss3 className='imh ' style={{color:"#00eeff"}} />
            <p>CSS</p>
            <div className='kk css'>
            <span></span>
            </div>
            </Card.Body>
        </Card>
        <Card>
            <Card.Body>
            <RiJavascriptFill className='imh 'style={{color:"#b0bc1e"}}/>
            <p>JS</p>
            <div className='kk js'>
            <span></span>
            </div>
            </Card.Body>
        </Card>
        <Card>
            <Card.Body>
            <SiMysql className='imh ' style={{color:"#c32ec9"}} />
            <p>MySQL</p>
            <div className='kk sql'>
            <span></span>
            </div>
            </Card.Body>
        </Card>
        <Card>
            <Card.Body>
            <FaReact  className='imh ' style={{color:"#69bcbc"}}/>
            <p>React</p>
            <div className='kk react'>
            <span></span>
            </div>
            </Card.Body>
        </Card>
        </Container>
      </Container>
      <Container>
        
        <h3>Professional Skills</h3>
        <div>
      <div class="radial-bars">
            <div class="radial-bar">
                <svg x="0px" y="0px" viewBox="0 0 200 200">
                    <circle class="progress-bar" cx="100" cy="100" r="80"></circle>
                    <circle class="path path-1" cx="100" cy="100" r="80"></circle>
                </svg>
                <div class="percentage">90%</div>
                <div class="text">creativity</div>
            </div>
            <div class="radial-bar">
                <svg x="0px" y="0px" viewBox="0 0 200 200">
                    <circle class="progress-bar" cx="100" cy="100" r="80"></circle>
                    <circle class="path path-2" cx="100" cy="100" r="80"></circle>
                </svg>
                <div class="percentage">65%</div>
                <div class="text">communication</div>
            </div>
            <div class="radial-bar">
                <svg x="0px" y="0px" viewBox="0 0 200 200">
                    <circle class="progress-bar" cx="100" cy="100" r="80"></circle>
                    <circle class="path path-3" cx="100" cy="100" r="80"></circle>
                </svg>
                <div class="percentage">70%</div>
                <div class="text">problem solving</div>
            </div>
            <div class="radial-bar">
                <svg x="0px" y="0px" viewBox="0 0 200 200">
                    <circle class="progress-bar" cx="100" cy="100" r="80"></circle>
                    <circle class="path path-4" cx="100" cy="100" r="80"></circle>
                </svg>
                <div class="percentage">85%</div>
                <div class="text">team work</div>
            </div>
        </div>
        </div>
      </Container>
      </div>
    </div>
  )
}
}

export default Skill
