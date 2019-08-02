import React, { Component } from "react"
import CastListItem from "./CastList/"
import cast from "../../assets/cast/english/cast.json"

const Cast = () => (
  <div>
    <div className="rain-background">
      <img src={require("../../assets/images/rain-background-large.gif")} />
    </div>
    <div className="cast-title">
      <h1 className="cast-title-box"> Our Amazing Cast</h1>
    </div>
    {cast.cast.map(cast => {
      return <CastListItem key={cast.num} cast={cast} />
    })}
  </div>
)

export default Cast
