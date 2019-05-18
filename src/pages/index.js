import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Cast from "../components/cast"
import Contact from "../components/contact"
import Trailer from "../components/trailer"
import StoryLine from "../components/storyline"
import InProgress from "../components/inprogress"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Cast />
    <Contact />
    <Trailer />
    <StoryLine />
    <InProgress />
  </Layout>
)

export default IndexPage
