import React from "react"
import { SocialIcon } from "react-social-icons"
import { Link } from "gatsby"
import "./layout.css"

let iconColor = "#b491c8"

let iconStyle = {
  backgroundImage: `none`,
  margin: `0 0.25rem`,
  padding: `0`,
  width: `2rem`,
  height: `2rem`,
}

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h1>Lydia Sun.</h1>
        </Link>
        <div className="social-icons">
          <SocialIcon
            url="https://www.youtube.com/user/ghravel"
            style={iconStyle}
            bgColor={iconColor}
          />
          <SocialIcon
            className="icon"
            url="https://github.com/lydiasun1"
            style={iconStyle}
            bgColor={iconColor}
          />
          <SocialIcon
            className="icon"
            url="https://www.linkedin.com/in/lydia-sun"
            style={iconStyle}
            bgColor={iconColor}
          />
          <SocialIcon
            className="icon"
            url="mailto:lydia.sun.4@gmail.com"
            style={iconStyle}
            bgColor={iconColor}
          />
        </div>
      </header>
      <div className="content">{children}</div>
    </div>
  )
}
