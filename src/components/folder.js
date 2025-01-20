import React from "react"
import Tab from "./tab"
import Card from "./card"
import HoverComponent from "./hover-component"
import "./global.css"
import "./folder.css"

import { motion } from "framer-motion"
import { SocialIcon } from "react-social-icons"

import lydia from "./img/lydia.jpeg"
import apple from "./img/apple.png"
import airtime from "./img/airtime.png"
import meraki from "./img/meraki.png"
import twitch from "./img/twitch.png"
import bose from "./img/bose.png"
import roomba from "./img/roomba.jpg"
import garduino from "./img/garduino.jpg"
import fruit from "./img/fruit.png"
import tablet from "./img/tablet.png"
import film from "./img/film.png"
import anthro from "./img/anthro.png"
import earth from "./img/earth.png"
import book from "./img/book.png"
import dance from "./img/dance.png"

let iconColor = "#dfc0eb"

let iconStyle = {
  backgroundImage: `none`,
}

class Folder extends React.Component {
  constructor(props) {
    super(props)
    this.handler = this.handler.bind(this)
    this.state = {
      opened: false,
    }
  }

  componentDidMount() {
    this.setState({ opened: false })
  }

  handler(e) {
    // prevent link clicks from toggling tabs
    // console.log(e.target.tagName);
    if (e.target.tagName !== "path" && e.target.tagName !== "A") {
      this.setState({ opened: !this.state.opened })
    }
  }

  render() {
    return (
      <motion.div
        className={`folder ${
          this.state.opened ? "opened-folder" : "closed-folder"
        }`}
        positionTransition
      >
        <Tab
          idx="about"
          label="About"
          handler={this.handler}
          display={this.state.opened}
        >
          <img src={lydia} alt="lydia"></img>
          <p>
            Welcome to my page! I am a software engineer with a degree in Electrical Engineering
             and Computer Science. I am based in Seattle and am currently working as a Software
            Engineer at Apple. In my free time I enjoy reading, running, and language learning.
          </p>
          <SocialIcon
            url="https://github.com/lydia-sun/lydia-sun.github.io"
            style={iconStyle}
            bgColor={iconColor}
          ></SocialIcon>
          <p className="small-text">
            This site is a personal, just for fun project. Visit the site repo
            here!
          </p>
        </Tab>
        <Tab
          idx="work"
          label="Work Experience"
          handler={this.handler}
          display={this.state.opened}
        >
          <div className="internship">
            <h2>Software Engineer</h2>
            <p>Seattle, WA | Jul 2023 - present</p>
            <img src = {apple} alt="apple"></img>
            <ul>
              <li>
                Build frameworks in Swift, SwiftUI, and Obj-C for internal use by other teams.
              </li>
              <li>
                Collaborate with framework, client, and server teams to bring features to completion.
              </li>
              <li>
                Designed and created a test application for running end to end flows, with the 
                benefit of simplifying automation.
              </li>
            </ul>
          </div>
          <div className="internship">
            <h2>Media Software Engineer</h2>
            <p>Palo Alto, CA | Jul 2020 - present</p>
            <img src = {airtime} alt="airtime" style={{borderRadius:`0%`}}></img>
            <ul>
              <li>
                Built and maintained services, including an authentication token distribution 
                service, to support the media stack.
              </li>
              <li>
                Designed and implemented APIs for communication with internal media servers and components.
              </li>
              <li>
                Investigated new technologies for use in audio and video streaming, 
                such as meeting recording and transcription.
              </li>
            </ul>
          </div>
          <div className="internship">
            <h2>Hardware Engineering Intern</h2>
            <p>San Francisco, CA | May - Aug 2019</p>
            <img src={meraki} alt="meraki"></img>
            <ul>
              <li>
                Researched, designed, and developed proof of concept for an IoT
                office audio sensor
              </li>
              <li>
                Interfaced with vendors and manufacturers to select and program
                hardware components
              </li>
              <li>
                Programmed microcontroller firmware in C to communicate with
                hardware peripherals and utilize Digital Signal Processing (DSP)
                library functions
              </li>
            </ul>
          </div>
          <div className="internship">
            <h2>Software Engineering Extern</h2>
            <p>San Francisco, CA | Jan 2019</p>
            <img src={twitch} alt="twitch"></img>
            <ul>
              <li>
                Laid groundwork for basic offline support experiments in mobile
                web
              </li>
              <li>
                Augmented existing packages with offline detection and
                hysteresis
              </li>
              <li>
                Constructed an offline page with React, including necessary
                tests and page tracking
              </li>
            </ul>
          </div>
          <div className="internship">
            <h2>Firmware Engineering Intern</h2>
            <p>Framingham, MA | May - Aug 2018</p>
            <img src={bose} alt="bose"></img>
            <ul>
              <li>
                Managed test automation for true wireless feature of Bose
                headphones and earphones
              </li>
              <li>
                Automated more than 60 tests with Python scripts and Appium,
                saving hundreds of hours in manual testing and creating
                possibility for testing all combinations of headphones and
                earphones
              </li>
              <li>
                Maintained integrity of automated tests through validation with
                quality assessment and liaising with test framework team
              </li>
            </ul>
          </div>
        </Tab>
        <Tab
          idx="projects"
          label="Projects"
          className="projects"
          handler={this.handler}
          display={this.state.opened}
        >
          <Card
            title="Roomba Go"
            desc="A smart vacuum gesture control system."
            imgSrc={roomba}
            width={400}
          >
            <p className="mit-class">
              Created for MIT's mobile and sensor computing class (6.808)
            </p>
            <p>Relevant technologies: infrared, WiFi, Arduino</p>
            <p>
              Hardware components: ESP32 microcontrollers, infrared
              receiver/transmitter modules, gyroscope
            </p>
            <p>Programming skills: C++</p>
          </Card>
          <Card
            title="PSoC Drawing Tablet"
            desc="A contactless drawing tablet."
            imgSrc={tablet}
            width={400}
          >
            <p className="mit-class">
              Created for MIT's microcomputer project laboratory class (6.115)
            </p>
            <p>
              Hardware components: Cypress PSoC, integrated circuits, infrared
              LEDs
            </p>
            <p>Programming skills: C++</p>
          </Card>
          <Card
            title="FPGA Fruit Ninja"
            desc="A hardware recreation of the popular video game."
            imgSrc={fruit}
            width={400}
          >
            <p className="mit-class">
              Created for MIT's introductory digital systems laboratory class
              (6.111)
            </p>
            <p>
              Hardware Components: Xilinx FPGA, Arduino Teensy, accelerometer,
              Bluetooth modules
            </p>
            <p>Programming skills: Arduino, C++, Verilog</p>
            <SocialIcon
              url="https://github.com/lydia-sun/6.111-final"
              style={iconStyle}
              bgColor={iconColor}
            ></SocialIcon>
          </Card>
          <Card
            title="Garduino"
            desc="An IoT watering system."
            imgSrc={garduino}
            width={400}
          >
            <p className="mit-class">
              Created for MIT's interconnected embedded systems class (6.08)
            </p>
            <p>Relevant technologies: Arduino, Bluetooth</p>
            <p>
              Hardware Components: ESP32 microcontrollers, ping transducers,
              humidity sensors, solenoid valves
            </p>
            <p>Programming skills: C++, Python, SQL</p>
          </Card>
        </Tab>
        <Tab
          idx="skills"
          label="Skills"
          handler={this.handler}
          display={this.state.opened}
        >
          <HoverComponent skillName="programming">
            <ul>
              <li>Python</li>
              <li>Swift/SwiftUI</li>
              <li>C/C++</li>
              <li>Objective C</li>
              <li>JavaScript</li>
            </ul>
          </HoverComponent>
          <HoverComponent skillName="technologies">
            <ul>
              <li>Arduino</li>
              <li>React</li>
              <li>Integrated circuits</li>
            </ul>
          </HoverComponent>
          <HoverComponent skillName="spoken languages">
            <ul>
              <li>English (fluent)</li>
              <li>Mandarin Chinese (proficient)</li>
              <li>French (proficient)</li>
              <li>Spanish (basic)</li>
            </ul>
          </HoverComponent>
          <HoverComponent placeholder />
        </Tab>
        <Tab
          idx="interests"
          label="Interests"
          handler={this.handler}
          display={this.state.opened}
        >
          <HoverComponent image={anthro}>
            <p>Anthropology</p>
          </HoverComponent>
          <HoverComponent image={film}>
            <p>Filmmaking</p>
          </HoverComponent>
          <HoverComponent image={earth}>
            <p>Sustainability</p>
          </HoverComponent>
          <HoverComponent image={book}>
            <p>Reading</p>
          </HoverComponent>
          <HoverComponent image={dance}>
            <p>Dance</p>
          </HoverComponent>
        </Tab>
        <Tab
          idx="frontTab"
          label=""
          handler={this.handler}
          display={this.state.opened}
          disabled={true}
        />
      </motion.div>
    )
  }
}

export default Folder
