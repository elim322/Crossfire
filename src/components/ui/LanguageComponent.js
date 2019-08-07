import React from "react"
import german from "../../assets/images/german.png"
import english from "../../assets/images/english.png"

const Translator = ({ en, handleSubmit }) => (
  <>
    {en === false ? (
      <img onClick={() => handleSubmit()} src={german} />
    ) : (
      <img onClick={() => handleSubmit()} src={english} />
    )}
  </>
)

export default Translator
