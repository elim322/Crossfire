import React, { Component } from "react"
import YouTube from "react-youtube"

class Cast extends Component {
  constructor(props) {
    super()
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
        <div className="cast-title">
          <h1> Our Amazing Cast</h1>
        </div>
        <div className="cast-list">
          <div className="member">
            <img
              className="cast-image"
              src={require("../assets/images/tim.jpg")}
            />
            <p className="cast-name">tim</p>
            <p className="cast-role">UX designer</p>
          </div>
          <div className="member">
            <img
              className="cast-image"
              src={require("../assets/images/tim.jpg")}
            />
            <p className="cast-name">tim</p>
            <p className="cast-role">UX designer</p>
          </div>
          <div className="member">
            <img
              className="cast-image"
              src={require("../assets/images/tim.jpg")}
            />
            <p className="cast-name">tim</p>
            <p className="cast-role">UX designer</p>
          </div>
          <div className="member">
            <img
              className="cast-image"
              src={require("../assets/images/tim.jpg")}
            />
            <p className="cast-name">tim</p>
            <p className="cast-role">UX designer</p>
          </div>
          <div className="member">
            <img
              className="cast-image"
              src={require("../assets/images/tim.jpg")}
            />
            <p className="cast-name">tim</p>
            <p className="cast-role">UX designer</p>
          </div>
          <div className="member">
            <img
              className="cast-image"
              src={require("../assets/images/tim.jpg")}
            />
            <p className="cast-name">tim</p>
            <p className="cast-role">UX designer</p>
          </div>
          <div className="member">
            <img
              className="cast-image"
              src={require("../assets/images/tim.jpg")}
            />
            <p className="cast-name">tim</p>
            <p className="cast-role">UX designer</p>
          </div>
          <div className="member">
            <img
              className="cast-image"
              src={require("../assets/images/tim.jpg")}
            />
            <p className="cast-name">tim</p>
            <p className="cast-role">UX designer</p>
          </div>
          <div className="member">
            <img
              className="cast-image"
              src={require("../assets/images/tim.jpg")}
            />
            <p className="cast-name">tim</p>
            <p className="cast-role">UX designer</p>
          </div>
          <div className="member">
            <img
              className="cast-image"
              src={require("../assets/images/tim.jpg")}
            />
            <p className="cast-name">tim</p>
            <p className="cast-role">UX designer</p>
          </div>
          <div className="member">
            <img
              className="cast-image"
              src={require("../assets/images/tim.jpg")}
            />
            <p className="cast-name">tim</p>
            <p className="cast-role">UX designer</p>
          </div>
          <div className="member">
            <img
              className="cast-image"
              src={require("../assets/images/tim.jpg")}
            />
            <p className="cast-name">tim</p>
            <p className="cast-role">UX designer</p>
          </div>
          <div className="member">
            <img
              className="cast-image"
              src={require("../assets/images/tim.jpg")}
            />
            <p className="cast-name">tim</p>
            <p className="cast-role">UX designer</p>
          </div>
          <div className="member">
            <img
              className="cast-image"
              src={require("../assets/images/tim.jpg")}
            />
            <p className="cast-name">tim</p>
            <p className="cast-role">UX designer</p>
          </div>
          <div className="member">
            <img
              className="cast-image"
              src={require("../assets/images/tim.jpg")}
            />
            <p className="cast-name">tim</p>
            <p className="cast-role">UX designer</p>
          </div>
          <div className="member">
            <img
              className="cast-image"
              src={require("../assets/images/tim.jpg")}
            />
            <p className="cast-name">tim</p>
            <p className="cast-role">UX designer</p>
          </div>
          <div className="member">
            <img
              className="cast-image"
              src={require("../assets/images/tim.jpg")}
            />
            <p className="cast-name">tim</p>
            <p className="cast-role">UX designer</p>
          </div>
          <div className="member">
            <img
              className="cast-image"
              src={require("../assets/images/tim.jpg")}
            />
            <p className="cast-name">tim</p>
            <p className="cast-role">UX designer</p>
          </div>
          <div className="member">
            <img
              className="cast-image"
              src={require("../assets/images/tim.jpg")}
            />
            <p className="cast-name">tim</p>
            <p className="cast-role">UX designer</p>
          </div>
          <div className="member">
            <img
              className="cast-image"
              src={require("../assets/images/tim.jpg")}
            />
            <p className="cast-name">tim</p>
            <p className="cast-role">UX designer</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Cast
