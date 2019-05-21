import React from "react"
import { MuiThemeProvider } from "@material-ui/core/styles"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Cast from "../components/cast"
import Contact from "../components/contact"
import Trailer from "../components/trailer"
import StoryLine from "../components/storyline"
import InProgress from "../components/inprogress"

const IndexPage = () => (
  <MuiThemeProvider>
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
      <Trailer />
      <Cast />
      <Contact />
      <StoryLine />
      <InProgress />
    </Layout>
  </MuiThemeProvider>
)

export default IndexPage
