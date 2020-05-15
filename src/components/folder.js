import React from "react"
import Tab from "./tab"
import Card from "./card"
import "./folder.css"
import { motion } from 'framer-motion'
import lydia from './img/lydia.jpeg'
import meraki from './img/meraki.png'
import twitch from './img/twitch.png'
import bose from './img/bose.png'
import garduino from './img/garduino.jpg'
import fruit from './img/fruit.png'

class Folder extends React.Component {
    constructor(props) {
        super(props)
        this.handler = this.handler.bind(this)
        this.state = {
          opened: false
        }
    }
    
    componentDidMount() {
        this.setState({opened: false});
      }
    
      handler(name) {
        console.log(name);
        this.setState({opened: !this.state.opened});
      }

    render() {
     return (
        <motion.div className={`folder + ${this.state.opened ? "opened-folder" : "closed-folder"}`} positionTransition>          
            <Tab idx="about" label="About" handler={this.handler} display={this.state.opened}>
              <img src={lydia} alt="lydia"></img>
              <p>Welcome to my page! I am a class of 2020 graduate from the Massachusetts Institute of Technology (MIT). 
                I am searching for a full-time software engineering role in the Bay Area, CA.
                I'm primarily interested in Internet of Things and full-stack engineering.
              </p>
            </Tab>
            <Tab idx="work" label="Work Experience" handler={this.handler} display={this.state.opened}>
              <div className="internship"> 
                <h2>Hardware Engineering Intern</h2>
                <p>San Francisco, CA | May - Aug 2019</p>              
                <img src={meraki} alt="meraki"></img>                 
                <ul>
                  <li>Researched, designed, and developed proof of concept for an IoT office audio sensor</li>
                  <li>Interfaced with vendors and manufacturers to select and program hardware components</li>
                  <li>Programmed microcontroller firmware in C to communicate with hardware peripherals and utilize Digital Signal Processing (DSP) library functions</li>
                </ul>
              </div>
              <div className="internship"> 
                <h2>Software Engineering Extern</h2>              
                <img src={twitch} alt="twitch"></img>                 
                <ul>
                  <li>Laid groundwork for basic offline support experiments in mobile web</li>
                  <li>Augmented existing packages with offline detection and hysteresis</li>
                  <li>Constructed an offline page with React, including necessary tests and page tracking</li>
                </ul>
              </div>
              <div className="internship"> 
                <h2>Firmware Engineering Intern</h2>              
                <img src={bose} alt="bose"></img>                 
                <ul>
                  <li>Managed test automation for true wireless feature of Bose headphones and earphones</li>
                  <li>Automated more than 60 tests with Python scripts and Appium, saving hundreds of hours in manual testing and creating possibility for testing all combinations of headphones and earphones</li>
                  <li>Maintained integrity of automated tests through validation with quality assessment and liaising with test framework team</li>
                </ul>
              </div>
            </Tab>
            <Tab idx="academic" label="Projects" className="projects" handler={this.handler} display={this.state.opened}>
                <Card title="Roomba, Go" desc="A gesture recognition system for the Roomba." imgSrc={fruit}>
                  <p>Created for MIT's mobile and sensor computing class (6.808)</p>
                  <p></p>
                </Card>
                <Card title="Microcontroller Drawing Tablet" desc="A contactless tablet powered by a programmable." imgSrc={fruit}>
                  <p>Created for MIT's microcomputer project laboratory class (6.115)</p>
                  <p>Recreated popular video game Fruit Ninja on an FPGA (field programmable gate array) in Verilog</p>
                </Card>
                <Card title="FPGA Fruit Ninja" desc="A hardware recreation of the popular video game." imgSrc={fruit}>
                  <p>Created for MIT's introductory digital systems laboratory class (6.111)</p>
                  <p>Recreated popular video game Fruit Ninja on an FPGA (field programmable gate array) in Verilog</p>
                </Card>
                <Card title="Garduino" desc="An IoT watering system." imgSrc={garduino}>
                  <p>Created for MIT's interconnected embedded systems class (6.08)</p>
                  <p>Recreated popular video game Fruit Ninja on an FPGA (field programmable gate array) in Verilog</p>
                </Card>
            </Tab>
            <Tab idx="skills" label="Skills" handler={this.handler} display={this.state.opened}/>
            <Tab idx="interests" label="Interests" handler={this.handler} display={this.state.opened}/>
            <Tab idx="frontTab" label="" handler={this.handler} display={this.state.opened} disabled={true}/>
        </motion.div>
     )
   }
  }

  export default Folder;