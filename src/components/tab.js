import React from 'react'
import { motion } from 'framer-motion'
import '../components/tab.css'

class Tab extends React.Component { 
  constructor(props) {
    super(props)
    this.handler = this.handler.bind(this)
    this.state = {
      display: false
    }
  }

  componentDidMount() {
    this.setState({display: false});
  }

  handler() {
    this.setState({display: !this.state.display});
  }

  render() {
    let tabOpen = {
      ease: "easeOut",
      duration: 0.75,
    } 
    return (
      <motion.div id={this.props.idx} onClick={this.props.disabled ? null : () => {this.handler(); this.props.handler();}}
      className={`tab + ${this.state.display ? "opened-tab" : "closed-tab"} + ${this.props.display ? "one-open" : "all-closed"}`}
      positionTransition={tabOpen}
      whileHover={{ scale: this.props.disabled ? 1.0 : 1.04}}> 
        <button>{this.props.label}</button>
        <div className="visibility-wrapper">
          <div className="tab-content">
            {this.props.children}
          </div>
        </div>
    </motion.div>
    )
  }
}
export default Tab;

