import React from "react"
import ModalComponent from "../../ui/ModalComponent"
import { ViewerContext } from "../../context/ViewerProvider"
import common_de from "../assets/cast/german/cast"
import common_en from "../assets/cast/english/cast"
import { translate, Trans } from "react-i18next"

const CastListItem = props => {
  const { t } = this.props
  return (
    <ViewerContext.Consumer>
      <div
        onClick={() => {
          props.toggleModal()
        }}
        className="cast-members"
      >
        <div className="cast-list">
          <div className="member">
            <img
              className="cast-image"
              src={require(`../../../assets/images/cast/cast${props.cast.num}.jpeg`)}
            />
            <p className="cast-name">{props.cast.name}</p>
            <p className="cast-role">{props.t("cast.role")}</p>
          </div>
        </div>
        {props.isModalOpen && (
          <ModalComponent toggleModal={props.toggleModal}>
            <div className="modalImage">
              <img
                src={require(`../../../assets/images/cast/cast${props.cast.num}.jpeg`)}
              />
            </div>
            <div className="modalContent">
              {" "}
              <h1>{props.cast.name}</h1>
              <trans i18nKey="cast.role">{props.t("cast.role")}</trans>
              <trans i18nKey="cast.bio">{props.t("cast.bio")}</trans>
            </div>
            <div className="closeButtonDiv"></div>
          </ModalComponent>
        )}
      </div>
    </ViewerContext.Consumer>
  )
}

export default translate("common")(CastListItem)
