import React, { useState } from "react"
import FlipCard from "react-png-flipcard"
import { isMobile, BrowserView } from "react-device-detect"
import "./card.css"

export default function Card(props) {
  let backClass = "back-class"
  let frontClass = "front-class"
  const [flip, setFlip] = useState(false)
  return (
    <FlipCard
      manual={isMobile}
      flip={flip}
      front={
        <div
          className="card-content"
          role="button"
          tabIndex={0}
          onClick={() => setFlip(true)}
          onKeyDown={() => setFlip(false)}
        >
          <h2>{props.title}</h2>
          <p>{props.desc}</p>
          <div className="card-prompt">
            <BrowserView>
              <p>(hover for details)</p>
            </BrowserView>{" "}
          </div>
          <img src={props.imgSrc} alt={props.title} className="card-image" />
        </div>
      }
      back={
        <div
          className="card-content"
          role="button"
          tabIndex={0}
          onKeyDown={() => setFlip(false)}
          onClick={() => setFlip(false)}
        >
          <h2> {props.title} </h2>
          {props.children}
        </div>
      }
      backClass={backClass}
      frontClass={frontClass}
      direction="horizontal"
      width={props.width}
      // height={400}
      margin={20}
    />
  )
}
