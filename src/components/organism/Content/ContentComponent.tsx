import React from "react"
import "./Content.scss"
import { Content } from "../../../interfaces/Content"

interface Props {
  content: Content
}

const ContentComponent: React.FC<Props> = (props) => {
  return (
    <div className="content">
      <div className="contentTitle">{props.content.title}</div>
      <div className="contentBorder" />
    </div>
  )
}

export default ContentComponent
