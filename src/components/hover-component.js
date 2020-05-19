import React from "react"
import { MobileView, BrowserView, isMobile } from "react-device-detect"
import { motion } from "framer-motion"
import "./hover-component.css"
import "./global.css"

export default function HoverComponent(props) {
  var bgContent
  let lightPink = "#dfc0eb"
  let purple = "#b491c8"

  let mobileStyle = {
    backgroundColor: props.image ? `#b491c8` : `#b491c8`,
    borderRadius: props.image ? `50%` : `1.5rem`,
    opacity: props.image ? `0.9` : `0.75`,
  }

  let defaultStyle = {
    backgroundColor: props.image ? lightPink : purple,
    borderRadius: props.image ? `50%` : `1.5rem`,
    opacity: `0`,
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
          </div>{" "}
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
        <motion.div
          className="overlay"
          whileHover={ isMobile ? {} : {
            opacity: 1.0,
            transition: { duration: 0.25 },
          }}
          style={isMobile ? mobileStyle : defaultStyle}
        >
          <div className="overlay-text">
            <MobileView>
              <h2>{props.skillName}</h2>
            </MobileView>
            {props.children}
          </div>
        </motion.div>
      </div>
    )
  }
}
