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
        <ModalComponent toggleModal={props.toggleModal}>
          <div className="modalImage">
            <img
              src={require(`../../../assets/images/blog/post${props.post.num}.jpg`)}
            />
          </div>
          <div className="modalContent">
            {" "}
            <h1>{props.post.title}</h1>
            <p>{props.post.content}</p>
          </div>
          <div className="closeButtonDiv"></div>
          {/* <h1>{props.post.title}</h1>
          <p>{props.post.content}</p> */}
        </ModalComponent>
      )}
    </div>
  )
}

export default ProductionListItem
