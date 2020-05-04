import React from "react"
import "./Content.scss"
import { Content } from "../../../interfaces/Content"

interface Props {
  id: string
  content: Content
}

const ContentComponent: React.FC<Props> = (props) => {
  return (
    <div className="content" id={props.id}>
      <div className="contentTitle">{props.content.title}</div>
      <div className="contentBorder" />
    </div>
  )
}

export default ContentComponent
