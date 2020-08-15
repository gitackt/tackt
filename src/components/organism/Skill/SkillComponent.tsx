import React from 'react'
import { Container, Row, Col } from 'react-grid-system'
import './Skill.scss'
import { skills } from '../../../entity/appState'

const SkillComponent: React.FC = () => {
  return (
    <div className="skill">
      <div className="contentTitle">Favorites</div>
      <div className="contentBorder" />
      <Container className="skillContainer">
        <Row>
          {skills.map(skill => (
            <Col key={skill.name} xs={3} sm={1} className="col">
              <a href={skill.linkUrl} target={'_blank'} rel="noopener noreferrer">
                <img className="skillImage" src={skill.imgUrl} alt={skill.imgUrl} />
                {/* <div className="skillName">{skill.name}</div> */}
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default SkillComponent
