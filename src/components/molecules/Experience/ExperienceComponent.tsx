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
      <div className="columns columnContainer">
        <div className="column">
          <img
            className="experienceImage"
            src={props.experience.imageUrl}
            alt={props.experience.imageUrl}
          />
        </div>
        <div className="column">
          <div className="experienceTitle">{props.experience.title}</div>
          <div className="experienceDiscription">
            {props.experience.discription}
          </div>
          <div>
            {props.experience.url !== "#" && (
              <a
                href={props.experience.url}
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
}

export default ExperienceComponent
