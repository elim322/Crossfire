import React from "react"
import common_de from "../../assets/cast/german/cast"
import common_en from "../../assets/cast/english/cast"
import i18next from "i18next"
export const ViewerContext = React.createContext()

export const ViewerProvider = ({ children }) => {
  i18next.init({
    interpolation: { escapeValue: false }, // React already does escaping
    lng: "english", // language to use
    resources: {
      en: {
        common: common_en, // 'common' is our custom namespace
      },
      de: {
        common: common_de, // de = german translation
      },
    },
  })
  return (
    <ViewerContext.Provider value={{ common, t, i18n }}>
      {children}
    </ViewerContext.Provider>
  )
}
