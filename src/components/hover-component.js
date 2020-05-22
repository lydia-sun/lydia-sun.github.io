import React from "react"
import { MobileView, BrowserView } from "react-device-detect"
import { motion } from "framer-motion"
import "./hover-component.css"
import "./global.css"

export default function HoverComponent(props) {
  var bgContent

  let mobileStyle = {
    backgroundColor: props.image ? `#b491c8` : `#b491c8`,
    borderRadius: props.image ? `50%` : `1.5rem`,
    opacity: props.image ? `0.9` : `0.75`,
  }

  if (props.image) {
    bgContent = <img src={props.image} alt={props.image} />
    // console.log(props.image);
  } else {
    bgContent = (
      <div className="bg-card">
        <BrowserView>
          <h2>{props.skillName}</h2>
          <div className="hover-prompt">
            <p className="prompt-text">(hover for details)</p>
          </div>
        </BrowserView>
      </div>
    )
  }
  if (props.placeholder) {
    return (
      <div
        className={`hover-container ${
          props.image ? "img-hover" : "text-hover"
        }`}
        style={{ backgroundColor: `oldlace` }}
      ></div>
    )
  } else {
    return (
      <div
        className={`hover-container ${
          props.image ? "img-hover" : "text-hover"
        }`}
      >
        {bgContent}
        <BrowserView>
          <motion.div
            className="overlay"
            whileHover={{
              opacity: 1.0,
              transition: { duration: 0.25 },
            }}
          >
            <div className="overlay-text">{props.children}</div>
          </motion.div>
        </BrowserView>
        <MobileView> 
          <div className="overlay" style={mobileStyle}>
            <div className="overlay-text">
              <h2>{props.skillName}</h2>
              {props.children}
            </div>
          </div>
        </MobileView>
      </div>
    )
  }
}
