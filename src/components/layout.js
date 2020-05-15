import React from "react"
import { SocialIcon } from 'react-social-icons';
import "./layout.css"

let iconColor = "#b491c8";

let iconStyle = {
  backgroundImage: `none`,
  marginLeft: `0.75rem`,
}

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <h1>Lydia Sun.</h1>
        <div className="social-icons">
          <SocialIcon url="https://www.youtube.com/user/ghravel" style={iconStyle} bgColor={iconColor}/>
          <SocialIcon url="https://github.com/lydiasun1" style={iconStyle} bgColor={iconColor}/>
          <SocialIcon url="https://www.linkedin.com/in/lydia-sun" style={iconStyle} bgColor={iconColor}/>
          <SocialIcon url="mailto:lydia.sun.4@gmail.com" style={iconStyle} bgColor={iconColor}/>
        </div> 
      </header>
      <div className="content">
      {children}
      </div>
    </div>
  )
}