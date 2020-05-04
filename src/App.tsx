import React from "react"
import "bulma/css/bulma.css"
import "./App.css"
import { appState } from "./entity/appState"

const App = () => {
  return (
    <div className="root">
      {appState.contents.map((each) => {
        return <div>{each.title}</div>
      })}
    </div>
  )
}

export default App
