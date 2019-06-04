import React from "react"
import styles from "./styles"
import { withStyles } from "@material-ui/core/styles"
import Video from "../Video/video"

const Trailer = ({ classes }) => {
  return (
    <>
      <div className={classes.videoContainer}>
        <Video />
      </div>
    </>
  )
}

export default withStyles(styles)(Trailer)
