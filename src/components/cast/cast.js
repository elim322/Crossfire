import React from "react"
import CastListItem from "./CastList/"
import cast from "../../assets/cast/english/cast.json"
import de_cast from "../../assets/cast/german/cast.json"
import { TranslationContext } from "../context/TranslationContext"
import Translator from "../ui/LanguageComponent"

const Cast = () => (
  <div>
    <TranslationContext.Consumer>
      {({ en, handleSubmit }) => {
        return <Translator en={en} handleSubmit={handleSubmit} />
      }}
    </TranslationContext.Consumer>
    <div className="rain-background">
      <img src={require("../../assets/images/rain-background-large.gif")} />
    </div>
    <div className="cast-title">
      <h1 className="cast-title-box"> Our Amazing Cast</h1>
    </div>
    <div className="cast-block">
      <TranslationContext.Consumer>
        {({ en }) => {
          return en === true
            ? cast.cast.map(cast => {
                return <CastListItem key={cast.num} cast={cast} />
              })
            : de_cast.cast.map(cast => {
                return <CastListItem key={cast.num} cast={cast} />
              })
        }}
      </TranslationContext.Consumer>
    </div>
  </div>
)

export default Cast
