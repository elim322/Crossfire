import React, { Component } from "react"

class Cast extends Component {
  constructor(props) {
    super()
    this.state = {}
  }

  render() {
    return (
      <div>
        <div className="rain-background">
          <img src={require("../assets/images/rain-background-large.gif")} />
        </div>
        <div className="cast-title">
          <h1 className="cast-title-box"> Our Amazing Cast</h1>
        </div>
      </div>
    )
  }
}

export default Cast
