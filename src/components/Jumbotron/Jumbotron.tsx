import React from "react"
import "bulma/css/bulma.css"
import "./Jumbotron.scss"

interface Props {}

const Jumbotron: React.FC<Props> = () => {
  return (
    <div className="jumbotron">
      <img className="profileImage" src="./images/profile.png" alt="profile" />
      <div className="profileTitle">Takuto Mitsuhashi</div>
      <div className="profileSubTitle">Portfolio Website.</div>
      <div className="profileBorder" />
    </div>
  )
}

export default Jumbotron
