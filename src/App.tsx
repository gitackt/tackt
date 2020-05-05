import React from "react"
import "bulma/css/bulma.css"
import "./App.scss"
import { appState } from "./entity/appState"

import JumbotronComponent from "./components/organism/Jumbotron/JumbotronComponent"
import ContentComponent from "./components/organism/Content/ContentComponent"

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
  const [colorClass, setColorClass] = React.useState("profileColor")

  React.useEffect(() => {
    document.addEventListener("scroll", onScroll)
    return (): void => document.removeEventListener("scroll", onScroll)
  })

  const eElement = document.getElementById("Engineering")
  const dElement = document.getElementById("Design")
  const wElement = document.getElementById("Writing")
  const pElement = document.getElementById("Product")

  const profileHeight = 500
  const eHeight = eElement ? profileHeight + eElement.clientHeight : 0
  const dHeight = dElement ? eHeight + dElement.clientHeight : 0
  const wHeight = wElement ? dHeight + wElement.clientHeight : 0
  const pHeight = pElement ? wHeight + pElement.clientHeight : 0

  const onScroll = (): void => {
    const position = scrollTop()
    if (position <= profileHeight) {
      if (!className.includes("pink")) {
        setClassName("root pink")
        setColorClass("profileColor")
      }
    } else if (position <= eHeight) {
      if (!className.includes("bluePurple")) {
        setClassName("root bluePurple")
        setColorClass("eigineeringColor")
      }
    } else if (position <= dHeight) {
      if (!className.includes("blueGreen")) {
        setClassName("root blueGreen")
        setColorClass("designColor")
      }
    } else if (position <= wHeight) {
      if (!className.includes("yellowGreen")) {
        setClassName("root yellowGreen")
        setColorClass("writingColor")
      }
    } else if (position <= pHeight) {
      if (!className.includes("redPurple")) {
        setClassName("root redPurple")
        setColorClass("productColor")
      }
    } else {
      if (!className.includes("primary")) {
        setClassName("root primary")
        setColorClass("primaryColor")
      }
    }
  }

  return (
    <div className={className}>
      <JumbotronComponent />
      {appState.contents.map((content) => {
        return (
          <ContentComponent
            content={content}
            key={content.title}
            id={content.title}
            colorClass={colorClass}
          />
        )
      })}
    </div>
  )
}

export default App
