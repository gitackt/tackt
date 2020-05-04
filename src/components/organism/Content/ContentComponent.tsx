import React from "react"
import "./Content.scss"
import { Content } from "../../../interfaces/Content"
import ServiceComponent from "../../../components/molecules/Service/ServiceComponent"

interface Props {
  id: string
  content: Content
  colorClass: string
}

const ContentComponent: React.FC<Props> = (props) => {
  return (
    <div className="content" id={props.id}>
      <div className="contentTitle">{props.content.title}</div>
      <div className="contentBorder" />
      {props.content.services.length !== 0 && (
        <div>
          {props.content.services.map((service) => {
            return (
              <ServiceComponent
                key={service.title}
                service={service}
                cardClass={props.colorClass}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}

export default ContentComponent
