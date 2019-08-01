import React from "react"
import closeIcon from "../../assets/images/crossIcon.svg"
const ModalComponent = props => {
  return (
    <div className="modal">
      <div className="modalBody">
        {props.children}
        <div className="closeButtonDiv">
          <img
            src={closeIcon}
            className="closeButtonIcon"
            onClick={() => {
              props.toggleModal()
            }}
          />
        </div>
      </div>
    </div>
  )
}
export default ModalComponent
