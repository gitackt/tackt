import React from 'react'
import './Service.scss'
import { Service } from '../../../interfaces/Service'

interface Props {
  service: Service
}

const ServiceComponent: React.FC<Props> = props => {
  return (
    <div className="serviceContainer">
      <div className="imageServiceContainer">
        <img className="serviceImage" src={props.service.imageUrl} alt={props.service.imageUrl} />
      </div>
      <div>
        <div className="serviceTitle">{props.service.title}</div>
        <div className="serviceDiscription">{props.service.discription}</div>
        <div className="serviceUrlContainer">
          {props.service.url !== '#' && (
            <a href={props.service.url} target={'_blank'} rel="noopener noreferrer">
              <div className="experienceUrl">サービスを見る</div>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ServiceComponent
