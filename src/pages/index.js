import React from "react"
import Layout from "../components/layout"
import Cast from "../components/cast/cast"
import Contact from "../components/contact"
import Production from "../components/production/"
import Trailer from "../components/trailer"
import { I18nextProvider } from "react-i18next"
import i18next from "i18next"
import { ViewerProvider } from "./context/ViewerProvider"

const IndexPage = () => (
  <ViewerProvider>
    <I18nextProvider i18n={i18next}>
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
    </I18nextProvider>
  </ViewerProvider>
)

export default IndexPage
