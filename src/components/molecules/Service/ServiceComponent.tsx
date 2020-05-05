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
        <div className="column serviceImageContainer">
          <img
            className="serviceImage"
            src={props.service.imageUrl}
            alt={props.service.imageUrl}
          />
        </div>
        <div className="column is-three-quarters">
          <div className="serviceTitle">{props.service.title}</div>
          <div className="serviceDiscription">{props.service.discription}</div>
          <div className="serviceUrlContainer">
            {props.service.url !== "#" && (
              <a
                className="serviceUrl"
                href={props.service.url}
                target={"_blank"}
                rel="noopener noreferrer"
              >
                {props.service.url}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceComponent
