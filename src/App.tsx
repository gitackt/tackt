import React from 'react'
import { Box, Center, Container } from '@chakra-ui/react'

import { Jumbotron } from './components/Jumbotron'
import { Footer } from './components/Footer'
import { List } from './components/List'
import * as styles from './styles'

const getAge = (birthday: Date) => {
  const today = new Date()
  const thisYearsBirthday = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate())

  const age = today.getFullYear() - birthday.getFullYear()

  if (today < thisYearsBirthday) {
    return age - 1
  }

  return age
}

const age = `${getAge(new Date('1997-06-30'))}歳`

const profile: Array<List> = [
  { left: '名前', right: '三橋拓人 (TAKUTO MITSUHASHI)' },
  { left: '年齢', right: age },
  { left: '職業', right: 'ソフトウェア開発者' },
  { left: 'エリア', right: '東京・神奈川' },
  {
    left: '16Personalities',
    right: 'Advocate (INFJ-T)',
    rightLink: 'https://www.16personalities.com/ja/infj%E5%9E%8B%E3%81%AE%E6%80%A7%E6%A0%BC',
  },
]

const skills: Array<List> = [
  { left: 'プログラミング言語', right: 'Typescript, Go, Python' },
  { left: 'フロントエンド', right: 'React, Next.js' },
  { left: 'バックエンド', right: 'Node.js, Go, Firebase' },
]

const experiences: Array<List> = [
  { left: 'Crezit holdings株式会社', leftLink: 'https://corp.crezit.jp', right: '2019/10 ~ now' },
  { left: '株式会社MICIN', leftLink: 'https://micin.jp/', right: '2018/03~2020/02' },
  { left: 'WhatzMoney株式会社', leftLink: 'https://whatzmoney.co.jp/', right: '2017/04 ~ 2018/03' },
]

const educations: Array<List> = [
  { left: '明治大学 商学部', leftLink: 'https://www.meiji.ac.jp/', right: '2016/04 ~ 2020/03' },
]

const certifications: Array<List> = [
  {
    left: '日本証券アナリスト協会検定会員補（CCMA）',
    right: '2019/08',
  },
  { left: '基本情報技術者試験　合格', right: '2019/08' },
]

const articles: Array<List> = [
  {
    left: 'シード期スタートアップに新卒入社！23歳ソフトウェアエンジニアが自分のキャリア目標を固めた瞬間とは？',
    leftLink: 'https://u-note.me/note/66387',
  },
  {
    left: '「創業期の開発を全て任せられるような存在になりたい。」新卒エンジニアがシード期のCrezitへ飛び込んだ理由。',
    leftLink: 'https://note.crezit.jp/n/ne622d29411c5',
  },
]

const preferences: Array<List> = [
  { left: 'UIフレームワーク', right: 'Chakra UI, Ant Design' },
  { left: 'インフラ', right: 'Cloud Run, Cloud SQL, Cloud Build ' },
  { left: 'その他ツール', right: 'Figma, Draw.io, TablePlus' },
]

const App: React.FC = () => {
  return (
    <Box background={styles.background}>
      <Jumbotron />
      <Center>
        <Container padding={styles.lg} maxW="3xl">
          <List title="PROFILE" lists={profile} />
          <List title="SKILL" lists={skills} />
          <List title="EXPERIENCE" lists={experiences} />
          <List title="EDUCATION" lists={educations} />
          <List title="CERTIFICATION" lists={certifications} />
          <List title="PREFERENCE" lists={preferences} />
          <List title="ARTICLES" lists={articles} />
        </Container>
      </Center>
      <Footer />
    </Box>
  )
}

export default App
