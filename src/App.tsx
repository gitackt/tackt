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
  const [firstScroll, setFirstScroll] = React.useState(true)

  React.useEffect(() => {
    document.addEventListener("scroll", onScroll)
    return (): void => document.removeEventListener("scroll", onScroll)
  })

  const eElement = document.getElementById("Engineering")

  const profileHeight = 800
  const eHeight = eElement ? profileHeight + eElement.clientHeight : 0

  const onScroll = (): void => {
    const position = scrollTop()
    if (position <= profileHeight) {
      if (!className.includes("pink")) {
        if (!firstScroll) {
          setClassName("root pink anim")
        } else {
          setClassName("root pink")
        }
      }
    } else if (position <= eHeight) {
      if (!className.includes("redPurple")) {
        // window.scrollTo({
        //   top: 1000,
        //   behavior: "smooth",
        // })
        setClassName("root redPurple")
      }
      if (firstScroll) {
        setFirstScroll(false)
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
          />
        )
      })}
    </div>
  )
}

export default App
