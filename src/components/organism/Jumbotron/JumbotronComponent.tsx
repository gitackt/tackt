import React from "react"
import "./Jumbotron.scss"

interface Props {}

const styles = {
  contentHeight: {
    height: window.innerHeight,
  },
}

const JumbotronComponent: React.FC<Props> = () => {
  return (
    <div className="jumbotron" style={styles.contentHeight}>
      <div className="jumbotronInnerContainer">
        <img
          className="profileImage"
          src="./images/profile.png"
          alt="profile"
        />
        <div className="profileTitle">Takuto Mitsuhashi</div>
        <div className="profileSubTitle">Portfolio Website.</div>
        <div className="profileBorder" />
        <div className="snsContainer">
          <a
            href="https://www.facebook.com/gitackt"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <img
              className="sns"
              src="./images/sns/facebook.png"
              alt="facebook"
            />
          </a>
          <a
            href="https://github.com/gitackt"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <img className="sns" src="./images/sns/github.png" alt="github" />
          </a>
          <a
            href="https://www.instagram.com/picos_tackt/"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <img
              className="sns"
              src="./images/sns/instagram.png"
              alt="instagram"
            />
          </a>
          <a
            href="https://twitter.com/picos_tackt?lang=ja"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <img className="sns" src="./images/sns/twitter.png" alt="twitter" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default JumbotronComponent
