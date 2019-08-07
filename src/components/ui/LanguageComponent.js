import React from "react"
import german from "../../assets/images/german.png"
import english from "../../assets/images/english.png"

const Translator = ({ contextProps }) => (
  <>
    {console.log(contextProps.en)}
    {contextProps.en === false ? (
      <img onClick={() => contextProps.handleSubmit()} src={german} />
    ) : (
      <img onClick={() => contextProps.handleSubmit()} src={english} />
    )}
  </>
)

export default Translator
