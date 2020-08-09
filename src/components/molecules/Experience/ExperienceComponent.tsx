import React from 'react'
import './Experience.scss'
import { Experience } from '../../../interfaces/Experience'

interface Props {
  experience: Experience
}

const ExperienceComponent: React.FC<Props> = props => {
  return (
    <div className="experienceContainer">
      <div>
        <div className="experienceName">{props.experience.name}</div>
        <div className="experiencePosition">
          {props.experience.pisition}
          <br />
          {props.experience.term}
        </div>
      </div>
      {props.experience.works.map(work => {
        return (
          <div key={work.title}>
            <div className="columnContainer">
              <div>
                <img className="experienceImage" src={work.imageUrl} alt={work.imageUrl} />
              </div>
              <div>
                <div className="experienceTitle">{work.title}</div>
                <div className="experienceDiscription">{work.discription}</div>
                <div>
                  {work.url !== '#' && (
                    <a href={work.url} target={'_blank'} rel="noopener noreferrer">
                      <div className="experienceUrl">サービスを見る</div>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ExperienceComponent
