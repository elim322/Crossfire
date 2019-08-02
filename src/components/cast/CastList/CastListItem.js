import React from "react"
import ModalComponent from "../../ui/ModalComponent"

const CastListItem = props => {
  return (
    <div
      onClick={() => {
        props.toggleModal()
      }}
      className="blog-posts"
    >
      <div className="cast-list">
        <div className="member">
          <img
            className="cast-image"
            src={require(`../../../assets/images/cast/cast${props.cast.num}.jpeg`)}
          />
          <p className="cast-name">{props.cast.name}</p>
          <p className="cast-role">{props.cast.role}</p>
        </div>
      </div>
      {props.isModalOpen && (
        <ModalComponent toggleModal={props.toggleModal}>
          <div className="modalImage">
            <img
              src={require(`../../../assets/images/cast/cast${props.cast.num}.jpeg`)}
            />
          </div>
          <div className="modalContent">
            {" "}
            <h1>{props.cast.name}</h1>
            <p>{props.cast.role}</p>
            <p>{props.cast.bio}</p>
          </div>
          <div className="closeButtonDiv"></div>
        </ModalComponent>
      )}
    </div>
  )
}

export default CastListItem
