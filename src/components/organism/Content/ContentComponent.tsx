import React from "react"
import "./Jumbotron.scss"
import { Content } from "../../../interfaces/Content"

interface Props {
  content: Content
}

const ContentComponent: React.FC<Props> = (props) => {
  return (
    <div className="content">
      <div className="profileTitle">{props.content.title}</div>
    </div>
  )
}

export default ContentComponent
