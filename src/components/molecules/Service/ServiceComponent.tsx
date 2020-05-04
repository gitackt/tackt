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
      <div className="serviceTitle">{props.service.title}</div>
      <div className="serviceDiscription">{props.service.discription}</div>
      <a className="serviceUrl" href={props.service.url} target={"_blank"}>
        {props.service.url}
      </a>
    </div>
  )
}

export default ServiceComponent
