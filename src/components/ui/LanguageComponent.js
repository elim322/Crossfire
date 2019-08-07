import React from "react"

const Translator = ({ contextProps }) => (
  <img
    onClick={() => contextProps.handleSubmit()}
    src={
      typeof contextProps.en === "boolean" && contextProps.en === true
        ? require("../../assets/images/german.png")
        : require("../../assets/images/english.png")
    }
  />
)

export default Translator
