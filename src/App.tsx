import React from 'react'
import { Box, Center, Container } from '@chakra-ui/react'

import { Jumbotron } from './components/Jumbotron'
import { Footer } from './components/Footer'
import { List } from './components/List'
import * as styles from './styles'

const experiences: Array<List> = [
  { title: 'Crezit holdings株式会社', link: 'https://corp.crezit.jp', date: '2020/10~' },
  { title: '株式会社MICIN', link: 'https://micin.jp/', date: '2018/03~2020/02' },
  { title: 'WhatzMoney株式会社', link: 'https://whatzmoney.co.jp/', date: '2017/04~2018/03' },
  { title: '明治大学', link: 'https://www.meiji.ac.jp/', date: '2016/04~2020/03' },
]

const certifications: Array<List> = [
  {
    title: '日本証券アナリスト協会検定会員補（CCMA）',
    date: '2020/08',
  },
  { title: '基本情報技術者試験　合格', date: '2020/08' },
]

const articles: Array<List> = [
  {
    title:
      'シード期スタートアップに新卒入社！23歳ソフトウェアエンジニアが自分のキャリア目標を固めた瞬間とは？',
    link: 'https://u-note.me/note/66387',
  },
  {
    title:
      '「創業期の開発を全て任せられるような存在になりたい。」新卒エンジニアがシード期のCrezitへ飛び込んだ理由。',
    link: 'https://note.crezit.jp/n/ne622d29411c5',
  },
]

const App: React.FC = () => {
  return (
    <Box background={styles.background}>
      <Jumbotron />
      <Center>
        <Container padding={styles.lg} maxW="3xl">
          <List title="EXPERIENCES" lists={experiences} />
          <List title="CERTIFICATION" lists={certifications} />
          <List title="ARTICLES" lists={articles} />
        </Container>
      </Center>
      <Footer />
    </Box>
  )
}

export default App
