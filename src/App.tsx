import React from "react"
import "bulma/css/bulma.css"
import "./App.scss"
import { appState } from "./entity/appState"

import Jumbotron from "./components/Jumbotron/Jumbotron"

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <div className="root">
      <Jumbotron />
      {appState.contents.map((each) => {
        return <div>{each.title}</div>
      })}
    </div>
  )
}

export default App
