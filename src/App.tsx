import React from "react"
import "bulma/css/bulma.css"
import "./App.scss"
import { appState } from "./entity/appState"

import Jumbotron from "./components/organism/Jumbotron/Jumbotron"

interface Props {}

const scrollTop = (): number => {
  return Math.max(
    window.pageYOffset,
    document.documentElement.scrollTop,
    document.body.scrollTop
  )
}

const App: React.FC<Props> = () => {
  const [className, setClassName] = React.useState("root")

  React.useEffect(() => {
    document.addEventListener("scroll", onScroll)
    return (): void => document.removeEventListener("scroll", onScroll)
  })

  const onScroll = (): void => {
    const position = scrollTop()
    if (position <= 600) {
      !className.includes("pink") && setClassName("root pink")
    } else if (position <= 1200) {
      !className.includes("redPurple") && setClassName("root redPurple")
    } else if (position <= 1800) {
      !className.includes("bluePurple") && setClassName("root bluePurple")
    } else if (position <= 2400) {
      !className.includes("blueGreen") && setClassName("root blueGreen")
    } else if (position <= 3000) {
      !className.includes("yellowGreen") && setClassName("root yellowGreen")
    } else {
      !className.includes("primary") && setClassName("root primary")
    }
  }

  return (
    <div className={className}>
      <Jumbotron />
      {appState.contents.map((each) => {
        return <div>{each.title}</div>
      })}
    </div>
  )
}

export default App
