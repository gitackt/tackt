import React from "react"
import "./Jumbotron.scss"

interface Props {}

const styles = {
  contentHeight: {
    height: window.innerHeight + 50,
  },
}

const Jumbotron: React.FC<Props> = () => {
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
          <img className="sns" src="./images/sns/facebook.png" alt="facebook" />
          <img className="sns" src="./images/sns/github.png" alt="github" />
          <img
            className="sns"
            src="./images/sns/instagram.png"
            alt="instagram"
          />
          <img className="sns" src="./images/sns/twitter.png" alt="twitter" />
        </div>
      </div>
    </div>
  )
}

export default Jumbotron
