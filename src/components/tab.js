import React from "react"
import { motion } from "framer-motion"
import { isMobile } from "react-device-detect"
import "../components/tab.css"

class Tab extends React.Component {
  constructor(props) {
    super(props)
    this.handler = this.handler.bind(this)
    this.state = {
      display: false,
    }
  }

  componentDidMount() {
    this.setState({ display: false })
  }

  handler(e) {
    // console.log(e.target.tagName)
    if (e.target.tagName !== "path") {
      this.setState({ display: !this.state.display })
    }
  }

  render() {
    let tabOpen = {
      ease: "easeOut",
      duration: 0.25,
    }
    if (this.props.disabled) { // a disabled tab is not clickable and has no content
      return (
        <motion.div
          id={this.props.idx}
          className={`tab closed-tab disabled ${
            this.props.display ? "one-open" : "all-closed"
          }`}
          positionTransition={tabOpen}
        >
          <div className="visibility-wrapper">
            <div className="tab-content"></div>
          </div>
        </motion.div>
      )
    }
    return (
      <motion.div
        id={this.props.idx}
        onClick={
          isMobile && this.props.display
            ? null
            : e => {
                this.handler(e)
                this.props.handler(e)
              }
        }
        className={`tab ${this.state.display ? "opened-tab" : "closed-tab"} ${
          this.props.display ? "one-open" : "all-closed"
        }`}
        positionTransition={tabOpen}
        whileHover={{ scale: isMobile ? 1.0 : 1.04 }}
      >
        <button
          className="tab-button"
          onClick={
            !isMobile || (isMobile && !this.props.display)
              ? null
              : e => {
                  this.handler(e)
                  this.props.handler(e)
                }
          }
        >
          {this.props.label}
        </button>
        <div className="visibility-wrapper">
          <div className="tab-content">{this.props.children}</div>
        </div>
      </motion.div>
    )
  }
}
export default Tab
