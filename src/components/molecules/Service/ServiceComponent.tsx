import React from 'react'
import './Service.scss'
import { Service } from '../../../interfaces/Service'

interface Props {
  service: Service
}

const ServiceComponent: React.FC<Props> = props => {
  return (
    <div className="serviceContainer">
      <div className="columns columnContainer">
        <div className="column is-one-third imageServiceContainer">
          <img className="serviceImage" src={props.service.imageUrl} alt={props.service.imageUrl} />
        </div>
        <div className="column">
          <div className="serviceTitle">{props.service.title}</div>
          <div className="serviceDiscription">{props.service.discription}</div>
          <div className="serviceUrlContainer">
            {props.service.url !== '#' && (
              <a
                className="serviceUrl"
                href={props.service.url}
                target={'_blank'}
                rel="noopener noreferrer"
              >
                {props.service.url.slice(0, 30)}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceComponent
