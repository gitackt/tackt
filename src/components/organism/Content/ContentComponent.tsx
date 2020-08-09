import React from 'react'
import { Container, Row, Col } from 'react-grid-system'
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
      <Container>
        {props.content.services.length !== 0 && (
          <Row>
            {props.content.services.map(service => {
              return (
                <Col key={service.title} sm={3}>
                  <ServiceComponent key={service.title} service={service} />
                </Col>
              )
            })}
          </Row>
        )}
      </Container>
      <Container>
        {props.content.experiences.length !== 0 && (
          <Row>
            {props.content.experiences.map(experience => {
              return (
                <Col key={experience.name} sm={4}>
                  <ExperienceComponent key={experience.name} experience={experience} />
                </Col>
              )
            })}
          </Row>
        )}
      </Container>
    </div>
  )
}

export default ContentComponent
