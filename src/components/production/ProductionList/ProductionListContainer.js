import React, { Component } from "react"
import ProductionListItem from "./ProductionListItem"

export default class ProductionListContainer extends Component {
  constructor() {
    super()
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
      <ProductionListItem
        toggleModal={this.toggleModal}
        isModalOpen={this.state.isModalOpen}
      />
    )
  }
}
