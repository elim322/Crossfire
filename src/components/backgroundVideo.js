import React, { Component } from "react"
import YouTube from "react-youtube"

class RainBackground extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  _onReady(event) {
    // access to player in all event handlers via event.target
    // event.target.mute()
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
        <div className="video-background">
          <YouTube
            videoId="YZAcLlKsc5I"
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

export default RainBackground
