import React from "react"
import Video from "./video"

const Trailer = ({ classes }) => {
  return (
    <>
      <div>
        <Video />
        <button type="button">Mute</button>
      </div>
    </>
  )
}

export default Trailer
