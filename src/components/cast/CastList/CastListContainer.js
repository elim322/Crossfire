import React, { Component } from "react"
import CastListItem from "./CastListItem"

export default class CastListContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalOpen: false,
    }
  }
  toggleModal = () => {
    document.body.classList.contains("modalOpen")
      ? document.body.classList.remove("modalOpen")
      : document.body.classList.add("modalopen")

    this.setState(state => {
      return { isModalOpen: !state.isModalOpen }
    })
  }

  render() {
    return (
      <CastListItem
        toggleModal={this.toggleModal}
        isModalOpen={this.state.isModalOpen}
        cast={this.props.cast}
      />
    )
  }
}
