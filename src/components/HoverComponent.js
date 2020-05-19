import React from "react"
import { MobileView, BrowserView } from "react-device-detect"
import "./HoverComponent.css"
import "./global.css"

export default function HoverComponent(props) {
  var bgContent
  if (props.image) {
    bgContent = <img src={props.image} alt={props.image} />
    // console.log(props.image);
  } else {
    bgContent = (
      <div className="bg-card">
        <h2>{props.skillName}</h2>
        <div className="hover-prompt">
          <MobileView>
            <p className="prompt-text">(tap for details)</p>
          </MobileView>
          <BrowserView>
            <p className="prompt-text">(hover for details)</p>
          </BrowserView>
        </div>
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
        <div className="overlay">
          <div className="overlay-text">{props.children}</div>
        </div>
      </div>
    )
  }
}
