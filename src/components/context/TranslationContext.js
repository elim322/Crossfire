import React, { Component } from "react"

export const TranslationContext = React.createContext()

export default class TranslationProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      en: false,
    }
  }

  handleSubmit = () => {
    this.setState({ en: true })
  }

  render() {
    const { children } = this.props
    return (
      <TranslationContext.Provider value={{ handleSubmit: this.handleSubmit }}>
        {children}
      </TranslationContext.Provider>
    )
  }
}
