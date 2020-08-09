import React from 'react'
import './Content.scss'
import { Content } from '../../../interfaces/Content'
import ServiceComponent from '../../../components/molecules/Service/ServiceComponent'
import ExperienceComponent from '../../../components/molecules/Experience/ExperienceComponent'

interface Props {
  id: string
  content: Content
  contentStyle: string
}

const ContentComponent: React.FC<Props> = props => {
  return (
    <div className={props.contentStyle} id={props.id}>
      <div className="contentTitle">{props.content.title}</div>
      <div className="contentBorder" />
      {props.content.services.length !== 0 && (
        <div>
          {props.content.services.map(service => {
            return <ServiceComponent key={service.title} service={service} />
          })}
        </div>
      )}
      {props.content.experiences.length !== 0 && (
        <div>
          {props.content.experiences.map(experience => {
            return <ExperienceComponent key={experience.name} experience={experience} />
          })}
        </div>
      )}
    </div>
  )
}

export default ContentComponent
