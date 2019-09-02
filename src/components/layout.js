/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from "./header"
import Drawer from "./ui/DrawerComponent"
import "../assets/scss/main.scss"
import TranslationProvider from "../components/context/TranslationContext"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <TranslationProvider>
          {/* <Header  /> */}
          <Drawer siteTitle={data.site.siteMetadata.title} className="drawer" />
          <div>
            <main className="main">{children}</main>
            <footer>
              © {new Date().getFullYear()}, Built by AJ Aguasin, Einer Lim, and
              Timothy Chan
            </footer>
          </div>
        </TranslationProvider>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
