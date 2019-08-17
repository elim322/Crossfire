import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import Countdown from "react-countdown-now"
import { TranslationContext } from "../components/context/TranslationContext"
import Translator from "../components/ui/LanguageComponent"

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
            <Countdown className="nav-link" date={Date.now() + 86400000} />
          </p>
        </h1>
        <div className="buttons">
          <a
            target="_blank"
            href="https://www.instagram.com/official.crossfire.film/?hl=en"
          >
            <img
              src={require("../assets/images/instagram.png")}
              className="navIcon"
            />
          </a>

          <div className="translation-button">
            <TranslationContext.Consumer>
              {({ en, handleSubmit }) => {
                return (
                  <Translator
                    en={en}
                    handleSubmit={handleSubmit}
                    className="en-de"
                  />
                )
              }}
            </TranslationContext.Consumer>
          </div>
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
