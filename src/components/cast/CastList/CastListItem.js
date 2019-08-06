import React from "react"
import ModalComponent from "../../ui/ModalComponent"
import cast from "../../../assets/cast/english/cast"

const CastListItem = props => {
  return (
    <div
      onClick={() => {
        props.toggleModal()
      }}
      className="cast-members"
    >
      <div className="cast-list">
        <div className="member">
          <img
            className="cast-image"
            src={require(`../../../assets/images/cast/cast${cast.num}.jpeg`)}
          />
          <p className="cast-name">{cast.name}</p>
          <p className="cast-role">{cast.role}</p>
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
            <p>{cast.role}</p>
            <p>{cast.bio}</p>
          </div>
          <div className="closeButtonDiv"></div>
        </ModalComponent>
      )}
    </div>
  )
}

export default CastListItem
