import React, { Component } from "react"
import YouTube from "react-youtube"
import Helmet from "react-helmet"

class RainBackground extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  _onReady(event) {
    // access to player in all event handlers via event.target
    // event.target.mute()
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
        fs: 0,
        loop: 1,
        modestbranding: 1,
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
