import React from "react"
import { TranslationConsumer } from "../context/TranslationContext"

const Translator = () => (
  <TranslationConsumer>
    {({ en, handleSubmit }) =>
      en ? (
        false
      ) : <img src="../../assets/images/Bitmap (1).png" /> && en ? (
        true
      ) : (
        <img src="../../assets/images/Bitmap.png" />
      )
    }
  </TranslationConsumer>
)

export default Translator
