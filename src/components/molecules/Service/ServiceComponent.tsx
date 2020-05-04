import React from "react"
import "./Service.scss"
import { Service } from "../../../interfaces/Service"

interface Props {
  service: Service
  cardClass: string
}

const ServiceComponent: React.FC<Props> = (props) => {
  const cardClass = "serviceContainer " + props.cardClass

  return (
    <div className={cardClass}>
      <div className="columns">
        <div className="column is-two-thirds">
          <div className="serviceTitle">{props.service.title}</div>
          <div className="serviceDiscription">{props.service.discription}</div>
        </div>
        <div className="column">
          <a
            className="serviceUrl"
            href={props.service.url}
            target={"_blank"}
            rel="noopener noreferrer"
          >
            {props.service.url}
          </a>
        </div>
      </div>
    </div>
  )
}

export default ServiceComponent
