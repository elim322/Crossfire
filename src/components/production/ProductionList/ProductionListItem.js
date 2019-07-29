import React from "react"
import ModalComponent from "../../ui/ModalComponent"

const ProductionListItem = props => {
  return (
    <div
      onClick={() => {
        props.toggleModal()
      }}
    >
      <h1> title </h1>
      <p> subtitle </p>
      {props.isModalOpen && <ModalComponent toggleModal={props.toggleModal} />}
    </div>
  )
}

export default ProductionListItem
