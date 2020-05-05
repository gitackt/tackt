import React from "react"
import "./Experience.scss"
import { Experience } from "../../../interfaces/Experience"

interface Props {
  experience: Experience
  cardClass: string
}

const ExperienceComponent: React.FC<Props> = (props) => {
  const cardClass = "experienceContainer " + props.cardClass

  return (
    <div className={cardClass}>
      <div className="columns">
        <div className="column experienceName">{props.experience.name}</div>
        <div className="column experiencePosition">
          {props.experience.pisition}
          <br />
          {props.experience.term}
        </div>
      </div>
      {props.experience.works.map((work) => {
        return (
          <div>
            <div className="columns columnContainer">
              <div className="column">
                <img
                  className="experienceImage"
                  src={work.imageUrl}
                  alt={work.imageUrl}
                />
              </div>
              <div className="column">
                <div className="experienceTitle">{work.title}</div>
                <div className="experienceDiscription">{work.discription}</div>
                <div>
                  {work.url !== "#" && (
                    <a
                      href={work.url}
                      target={"_blank"}
                      rel="noopener noreferrer"
                    >
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
