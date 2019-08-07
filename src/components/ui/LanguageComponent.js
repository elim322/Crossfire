import React from "react"
import { TranslationContext } from "../context/TranslationContext"

const Translator = ({ en, handleSubmit }) => (
  <img
    onClick={() => handleSubmit()}
    src={
      en === true
        ? require("../../assets/images/german.png")
        : require("../../assets/images/english.png")
    }
  />
)

export default Translator
