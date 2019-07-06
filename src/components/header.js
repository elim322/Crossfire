import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="navbar">
    <div className="navbar-elements">
      <h1 className="site-title">
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <h1 className="navbar-title" style={{ margin: 0 }}>
        <Link
          to="trailer/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Trailer
        </Link>
      </h1>
      <h1 className="navbar-title" style={{ margin: 0 }}>
        <Link
          to="cast/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Cast
        </Link>
      </h1>
      <h1 className="navbar-title" style={{ margin: 0 }}>
        <Link
          to="inprogress/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Production
        </Link>
      </h1>
      <h1 className="navbar-title" style={{ margin: 0 }}>
        <Link
          to="contact/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Contact
        </Link>
      </h1>
      <h1 className="navbar-title" style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Premier: 00 : 00 : 00
        </Link>
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


