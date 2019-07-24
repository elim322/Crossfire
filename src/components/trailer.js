import React, { Component } from "react"
import Helmet from "React-Helmet"
import YouTube from "React-Youtube"

class Trailer extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  _onReady(event) {
    // access to player in all event handlers via event.target
    // event.target.mute()
    event.target.playVideo()
  }
  _onEnd(event) {
    event.target.playVideo()
  }

  render() {
    const videoOptions = {
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        controls: 0,
        rel: 0,
        showinfo: 0,
      },
    }

    return (
      <div>
        <Helmet>
          <title>Crossfire</title>
        </Helmet>

        <div className="video-background">
          <YouTube
            videoId="ERf45Wv0Yus"
            opts={videoOptions}
            className="video-iframe"
            onReady={this._onReady}
            onEnd={this._onEnd}
          />
          <div className="video-foreground" />
        </div>
      </div>
    )
  }
}

export default Trailer
