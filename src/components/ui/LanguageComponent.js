import React from "react"
import { TranslationContext } from "../context/TranslationContext"

const Translator = () => (
  <TranslationContext.Consumer>
    {({ en }) => {
      return (
        <img
          // onClick={handleSubmit}
          src={
            en === true
              ? require("../../assets/images/german.png")
              : require("../../assets/images/english.png")
          }
        />
      )
    }}
  </TranslationContext.Consumer>
)

export default Translator
