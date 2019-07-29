import React from "react"
import ModalComponent from "../../ui/ModalComponent"

const ProductionListItem = props => {
  return (
    <div
      onClick={() => {
        props.toggleModal()
      }}
    >
      <h1>{props.post.title}</h1>
      <p> subtitle </p>
      {props.isModalOpen && (
        <ModalComponent toggleModal={props.toggleModal} post={props.post}>
          {props.post.content}
        </ModalComponent>
      )}
    </div>
  )
}

export default ProductionListItem
