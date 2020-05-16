import React from "react"
import FlipCard from "react-png-flipcard"
import "./card.css"

export default function Card(props) {
  let backClass = "back-class"
  let frontClass = "front-class"
  return (
    <FlipCard
      front={
        <div className="card-content">
          <h2>{props.title}</h2>
          <p>{props.desc}</p>
          <img src={props.imgSrc} alt={props.title} className="card-image" />
        </div>
      }
      back={
        <div className="card-content">
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
