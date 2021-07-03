import React from 'react'
import { Box } from '@chakra-ui/react'

import { JumbotronComponent } from './components/JumbotronComponent'
import * as styles from './styles'

type Experience = {
  title: string
  date: Date
}

type Certification = {
  title: string
  date: Date
}

type Article = {
  title: string
  date: Date
}

const experiences: Array<Experience> = []
const certifications: Array<Certification> = []
const articles: Array<Article> = []

const ExperienceComponent = ({ experiences }: { experiences: Array<Experience> }) => {
  return (
    <div>
      {experiences.map(experience => (
        <div key={experience.title}>{experience.title}</div>
      ))}
    </div>
  )
}

const CertificationComponent = ({ certifications }: { certifications: Array<Certification> }) => {
  return (
    <div>
      {certifications.map(certification => (
        <div key={certification.title}>{certification.title}</div>
      ))}
    </div>
  )
}

const ArticlesComponent = ({ articles }: { articles: Array<Article> }) => {
  return (
    <div>
      {articles.map(article => (
        <div key={article.title}>{article.title}</div>
      ))}
    </div>
  )
}

const App: React.FC = () => {
  return (
    <Box background={styles.background} padding={styles.md}>
      <JumbotronComponent />
      <ExperienceComponent experiences={experiences} />
      <CertificationComponent certifications={certifications} />
      <ArticlesComponent articles={articles} />
    </Box>
  )
}

export default App
