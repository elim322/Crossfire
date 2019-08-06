import React from "react"
import Layout from "../components/layout"
import Cast from "../components/cast/cast"
import Contact from "../components/contact"
import Production from "../components/production/"
import Trailer from "../components/trailer"

const IndexPage = () => (
  <Layout>
    <section id="section1" className="trailer">
      <Trailer />
    </section>
    <section id="section2" className="cast">
      <Cast />
    </section>
    <section id="section3" className="production">
      <Production />
    </section>
    <section id="section4" className="contact">
      <Contact />
    </section>
  </Layout>
)

export default IndexPage
