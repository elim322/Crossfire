import React, { Component } from "react"
import YouTube from "react-youtube"
import Helmet from "react-helmet"

class Video extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  _onReady(event) {
    // access to player in all event handlers via event.target
    // event.target.mute();
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
            videoId="Z6FPJOgfCkc"
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

export default Video
