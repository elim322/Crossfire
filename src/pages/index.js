import React from "react"
import { MuiThemeProvider } from "@material-ui/core/styles"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Cast from "../components/Cast/cast"
import Contact from "../components/Contact/contact"
import Trailer from "../components/Trailer/trailer"
import StoryLine from "../components/StoryLine/storyline"
import InProgress from "../components/InProgress/inprogress"

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
