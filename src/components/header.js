import PropTypes from "prop-types"
import React, { Component } from "react"
import { Link } from "gatsby"
import Countdown from "react-countdown-now"
import { Translator } from "../components/ui/LanguageComponent"

const Header = ({ siteTitle }) => {
  return (
    <header className="navbar">
      <div className="navbar-elements">
        <div className="scroll-targets">
          <h1 className="site-title">
            <a className="nav-link">{siteTitle}</a>
          </h1>
          <h1 className="navbar-title">
            <Link to="/#section1" className="nav-link">
              Trailer
            </Link>
          </h1>
          <h1 className="navbar-title">
            <Link to="/#section2" className="nav-link">
              Cast
            </Link>
          </h1>
          <h1 className="navbar-title">
            <Link to="/#section3" className="nav-link">
              Production
            </Link>
          </h1>
          <h1 className="navbar-title">
            <Link to="/#section4" className="nav-link">
              Contact
            </Link>
          </h1>
        </div>
        <h1 className="navbar-title">
          <p>
            Premiere:{" "}
            <Countdown className="nav-link" date={Date.now() + 777600000} />
          </p>
        </h1>
        <div>
          <img
            src={require("../assets/images/instagram.png")}
            className="navIcon"
          />
          <Translator />
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
