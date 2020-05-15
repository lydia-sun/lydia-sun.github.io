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
      duration: 0.5,
    } 
    return (
      <motion.div id={this.props.idx} onClick={() => {this.handler(); this.props.handler();}} className={`tab + ${this.state.display ? "opened-tab" : "closed-tab"} + ${this.props.display ? "one-open" : "all-closed"}`} positionTransition={tabOpen} whileHover={{ scale: 1.04}}> 
        <button disabled={this.props.display && !this.state.display} >{this.props.label}</button>
        <div className="tab-content">
          {this.props.children}
        </div>
    </motion.div>
    )
  }
}
export default Tab;

