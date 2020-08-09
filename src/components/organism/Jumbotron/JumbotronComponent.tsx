import React from 'react'
import './Jumbotron.scss'

import { snsState } from '../../../entity/appState'

const styles = {
  contentHeight: {
    height: window.innerHeight,
  },
}

const JumbotronComponent: React.FC = () => {
  return (
    <div className="jumbotron" style={styles.contentHeight}>
      <div className="jumbotronInnerContainer">
        <img className="profileImage" src="./images/profile.png" alt="profile" />
        <div className="profileTitle">Takuto Mitsuhashi</div>
        <div className="profileSubTitle">Portfolio Website.</div>
        <div className="profileBorder" />
        <div className="snsContainer">
          {snsState.map(sns => (
            <a key={sns.name} href={sns.linkUrl} target={'_blank'} rel="noopener noreferrer">
              <img className="sns" src={sns.imgUrl} alt={sns.name} />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default JumbotronComponent
