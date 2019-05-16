import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        padding: `1.45rem 1.0875rem`,
        display: `flex`,
        flexDirection: `row`,
        justifyContent: `space-between`,
      }}
    >
      <h1 style={{ margin: 0 }}>
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
      <h1 style={{ margin: 0 }}>
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
      <h1 style={{ margin: 0 }}>
        <Link
          to="storyline/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Story Line
        </Link>
      </h1>
      <h1 style={{ margin: 0 }}>
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
      <h1 style={{ margin: 0 }}>
        <Link
          to="inprogress/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          In Progress
        </Link>
      </h1>
      <h1 style={{ margin: 0 }}>
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
      <h1 style={{ margin: 0 }}>
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
