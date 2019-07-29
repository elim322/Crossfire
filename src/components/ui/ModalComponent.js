import React from "react"
import tim from "../../assets/images/tim.jpg"

const ModalComponent = ({ children }, imgSrc, toggleModal) => {
  return (
    <div className="modal">
      <div className="modalBody">
        <div className="modalImage">
          <img src={imgSrc === !undefined ? imgSrc : tim} />
        </div>
        <div className="modalContent">
          <h1>Title</h1>
          <h2>Subtitle</h2>
          {children}
        </div>
        <div
          className="closeButton"
          onClick={() => {
            toggleModal()
          }}
        >
          <span>close</span>
        </div>
      </div>
    </div>
  )
}
export default ModalComponent
