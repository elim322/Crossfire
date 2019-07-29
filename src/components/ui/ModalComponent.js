import React from "react"
import tim from "../../assets/images/tim.jpg"
import closeIcon from "../../assets/images/crossIcon.svg"
const ModalComponent = props => {
  return (
    <div className="modal">
      <div className="modalBody">
        <div className="modalImage">
          {/* {console.log(img)} */}
          <img
            src={require(`../../assets/images/blog/post${props.post.num}.jpg`)}
          />
        </div>
        <div className="modalContent">
          <h1>{props.post.title}</h1>
          <p>{props.post.content}</p>
        </div>
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
