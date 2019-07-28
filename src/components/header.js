import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="navbar">
    <div className="navbar-elements">
      <div className="scroll-targets">
        <h1 className="site-title">
          <a className="nav-link">{siteTitle}</a>
        </h1>
        <h1 className="navbar-title">
          <a className="nav-link">Trailer</a>
        </h1>
        <h1 className="navbar-title">
          <a className="nav-link">Cast</a>
        </h1>
        <h1 className="navbar-title">
          <a className="nav-link">Production</a>
        </h1>
        <h1 className="navbar-title">
          <a className="nav-link">Contact</a>
        </h1>
      </div>
      <h1 className="navbar-title">
        <p className="nav-link">Premier: 00 : 00 : 00</p>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
