import React from "react"
import CastListItem from "./CastList/"
import cast from "../../assets/cast/english/cast.json"
import de_cast from "../../assets/cast/german/cast"

const Cast = () => (
  <div>
    <div className="rain-background">
      <img src={require("../../assets/images/rain-background-large.gif")} />
    </div>
    <div className="cast-title">
      <h1 className="cast-title-box"> Our Amazing Cast</h1>
    </div>
    <div className="cast-block">
      {cast.cast.map(cast => {
        return <CastListItem key={cast.num} cast={cast} />
      })}
      {de_cast.cast.map(cast => {
        return <CastListItem key={cast.num} cast={cast} />
      })}
    </div>
  </div>
)

export default Cast
