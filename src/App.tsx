import React from 'react'
import 'bulma/css/bulma.css'
import './App.scss'
import { appState } from './entity/appState'

import JumbotronComponent from './components/organism/Jumbotron/JumbotronComponent'
import ContentComponent from './components/organism/Content/ContentComponent'
import SkillComponent from './components/organism/Skill/SkillComponent'

const scrollTop = (): number => {
  return Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop)
}

const App: React.FC = () => {
  const [className, setClassName] = React.useState('root')
  const [contentStyle, setContentStyle] = React.useState('content')
  const [firstScroll, setFirstScroll] = React.useState(true)

  React.useEffect(() => {
    document.addEventListener('scroll', onScroll)
    return (): void => document.removeEventListener('scroll', onScroll)
  })

  const eElement = document.getElementById('Experiences')

  const profileHeight = 400
  const eHeight = eElement ? profileHeight + eElement.clientHeight : 0

  const onScroll = (): void => {
    const position = scrollTop()
    if (position <= profileHeight) {
      if (!className.includes('pink')) {
        if (!firstScroll) {
          setClassName('root pink anim')
          setContentStyle('content')
        } else {
          setClassName('root pink')
          setContentStyle('content')
        }
      }
    } else if (position <= eHeight) {
      if (!className.includes('redPurple')) {
        setClassName('root redPurple')
        setContentStyle('content contentAnim')
      }
      if (firstScroll) {
        setFirstScroll(false)
      }
    }
  }

  return (
    <div className={className}>
      <JumbotronComponent />
      {appState.contents.map(content => {
        return (
          <ContentComponent
            contentStyle={contentStyle}
            content={content}
            key={content.title}
            id={content.title}
          />
        )
      })}
      <SkillComponent />
    </div>
  )
}

export default App
