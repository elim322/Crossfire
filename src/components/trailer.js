import React, { Component } from "react"
import Helmet from "react-helmet"
import ReactPlayer from "react-player"

class Trailer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: null,
      pip: false,
      playing: true,
      controls: false,
      light: false,
      volume: 0.8,
      muted: false,
      played: 0,
      loaded: 0,
      duration: 0,
      playbackRate: 1.0,
      loop: true,
    }
  }

  toggleMuted = () => {
    this.setState({ muted: !this.state.muted })
  }

  render() {
    const { url, playing, controls, volume, muted } = this.state

    return (
      <div>
        <Helmet>
          <title>Crossfire</title>
        </Helmet>

        <div className="video-mute">
          <button
            controls
            onClick={this.toggleMuted}
            className="mute-button"
          ></button>
        </div>

        <div>
          <ReactPlayer
            className="trailer-background"
            url="https://www.youtube.com/watch?feature=youtu.be&v=ERf45Wv0Yus&app=desktop"
            playing
            loop
            muted={muted}
          />
        </div>
      </div>
    )
  }
}

export default Trailer
