import { Content } from '../interfaces/Content'

type State = {
  contents: Content[]
}

export const appState: State = {
  contents: [
    {
      title: 'Experiences',
      skills: [],
      services: [],
      experiences: [
        {
          name: 'Crezit inc.',
          pisition: 'Software Engineer',
          term: '2019/8 ~',
          corpUrl: 'https://corp.crezit.jp/',
          works: [
            {
              title: 'CREZIT (デジタルネイティブ向けモバイルクレジット)',
              discription:
                '３人目の創業メンバーとして新卒入社しました。Typescript, React.js, Golangで利息0%で10万円借りる事ができるサービスを開発しています。',
              url: 'https://crezit.jp/',
              imageUrl: './images/experiences/crezit.png',
            },
          ],
        },
        {
          name: 'MICIN inc.',
          pisition: 'Software Engineer Internship',
          term: '2018/3 ~ 2020/2',
          corpUrl: 'https://micin.jp/',
          works: [
            {
              title: 'Curon (オンライン診療サービス)',
              discription:
                '２年間インターンをしていました。TypescriptとReact-native, Angular.jsを使って、モバイルアプリケーション開発をしていました。',
              url: 'https://curon.co/',
              imageUrl: './images/experiences/curon.png',
            },
          ],
        },
        {
          name: 'WhatzMoney inc.',
          pisition: 'Software Engineer Internship',
          term: '2017/4 ~ 2018/3',
          corpUrl: 'https://whatzmoney.com/',
          works: [
            {
              title: 'WhatzMoney（ローンシミュレーション）',
              discription:
                '１年間プログラマーのアルバイトをしていました。Ruby on Railsを使って、住宅ローンの比較サイトを開発していました。',
              url: 'https://rank.whatzmoney.com/',
              imageUrl: './images/experiences/whatzmoney.png',
            },
          ],
        },
      ],
      writings: [],
    },
    {
      title: 'Projects',
      skills: [],
      services: [],
      experiences: [
        // {
        //   name: '留学アシスタント',
        //   pisition: 'Frontend Engineer',
        //   term: '2020/7 ~',
        //   corpUrl: 'https://studyabroadces.com/',
        //   works: [
        //     {
        //       title: '留学チェッカー（留学情報サイト）',
        //       discription:
        //         'フロントエンドのリファクタリング・Typescriptへの移行を行い、その後の開発も行っています。',
        //       url: '#',
        //       imageUrl: './images/experiences/az.png',
        //     },
        //   ],
        // },
        {
          name: 'AZ',
          pisition: 'Graphic Designer',
          term: '2020/4 ~',
          corpUrl: '#',
          works: [
            {
              title: 'AZ（D2Cアパレルブランド）',
              discription: 'ブランドロゴのキャラクターを描きました。',
              url: '#',
              imageUrl: './images/experiences/az.png',
            },
          ],
        },
      ],
      writings: [],
    },
    {
      title: 'Products',
      skills: [],
      services: [
        {
          title: 'トップハムゴッサム',
          discription: '個人ブログです。お金をかけないで生きるサバイバル術を書いています。',
          url: 'https://monetizealchemist.com/',
          imageUrl: './images/services/monetizealchemist_info.png',
          term: '2017/12 ~',
        },
        {
          title: 'potato sand',
          discription:
            '（開発中）\n オセロゲームです。ハンバーガーでポテトをサンドしてひっくり返します。TypescriptとReact.jsを使用して作りました。',
          url: 'https://potato-sand.web.app/',
          imageUrl: './images/services/potato_info.png',
          term: '2020/4 ~',
        },
        {
          title: 'Props iOS',
          discription:
            '持ち物管理ができるiOSアプリです。自分の持ち物をアプリでまとめて管理できます。',
          url:
            'https://apps.apple.com/us/app/props-%E6%8C%81%E3%81%A1%E7%89%A9%E7%AE%A1%E7%90%86%E3%82%A2%E3%83%97%E3%83%AA/id1460285997?l=ja&ls=1',
          imageUrl: './images/services/props_info.png',
          term: '2018/8 ~',
        },
        {
          title: 'Props Android',
          discription:
            '（サービス終了）\n 持ち物管理ができるAndroidアプリです。自分の持ち物をアプリでまとめて管理できます。',
          url: 'https://play.google.com/store/apps/details?id=com.gitackt.props',
          imageUrl: './images/services/props_info.png',
          term: '2018/8 ~',
        },
        {
          title: '格付けくん',
          discription:
            '（サービス終了）\n 個人の口コミサイトです。日頃の感謝や、仕事のお礼など、相手の評価につながる口コミを書くことが出来ます。フロントエンドはVue.js、バックエンドはGolang(Echo)を使って作りました。',
          url: '#',
          imageUrl: './images/services/rank_info.png',
          term: '2019/4 ~ 2019/8',
        },
        {
          title: 'Babel Bubble',
          discription:
            '（サービス終了）\n 無料で遊べる投資シミュレーションゲームです。架空のアイテムをゲーム内通貨で売買して遊びます。フロントエンドはReact.js、バックエンドはPython(Django)を使って作りました。',
          url: '#',
          imageUrl: './images/services/babel.png',
          term: '2018/7 ~ 2019/7',
        },
        {
          title: 'VCU',
          discription:
            '（サービス終了）\n 仮想通貨のポートフォリオ管理サービスです。複数の取引所とAPI連携を行い自動でデータを取得します。Python(Django)を使って作りました。',
          url: '#',
          imageUrl: './images/services/vcu.png',
          term: '2017/12 ~ 2019/6',
        },
        {
          title: 'ヒモフレ',
          discription: '（ボツ）\n ヒモのためのマッチングアプリです。デザインだけ作りました。',
          url: '#',
          imageUrl: './images/services/himohure.png',
          term: '2019/6 ~ 2019/6',
        },
      ],
      experiences: [],
      writings: [],
    },
  ],
}

export const snsState = [
  {
    name: 'facebook',
    imgUrl: './images/sns/facebook.svg',
    linkUrl: 'https://www.facebook.com/gitackt',
  },
  {
    name: 'github',
    imgUrl: './images/sns/github.svg',
    linkUrl: 'https://github.com/gitackt',
  },
  {
    name: 'instagram',
    imgUrl: './images/sns/instagram.svg',
    linkUrl: 'https://www.instagram.com/picos_tackt',
  },
  {
    name: 'twitter',
    imgUrl: './images/sns/twitter.svg',
    linkUrl: 'https://twitter.com/picos_tackt?lang=ja',
  },
  {
    name: 'weibo',
    imgUrl: './images/sns/sinaweibo.svg',
    linkUrl: 'https://weibo.com/u/738186502',
  },
  {
    name: 'leetcode',
    imgUrl: './images/sns/leetcode.svg',
    linkUrl: 'https://leetcode.com/gitackt',
  },
]

export const skills = [
  {
    name: 'Typescript',
    imgUrl: './images/techs/typescript.svg',
    linkUrl: 'https://www.typescriptlang.org/',
  },
  {
    name: 'React',
    imgUrl: './images/techs/react.svg',
    linkUrl: 'https://ja.reactjs.org/',
  },
  {
    name: 'Node.js',
    imgUrl: './images/techs/node-dot-js.svg',
    linkUrl: 'https://nodejs.org/ja/',
  },
  {
    name: 'Next.js',
    imgUrl: './images/techs/next-dot-js.svg',
    linkUrl: 'https://nextjs.org/',
  },
  {
    name: 'Ant Design',
    imgUrl: './images/techs/ant.svg',
    linkUrl: 'https://ant.design/',
  },
  {
    name: 'Eslint',
    imgUrl: './images/techs/eslint.svg',
    linkUrl: 'https://eslint.org/',
  },
  {
    name: 'Jest',
    imgUrl: './images/techs/jest.svg',
    linkUrl: 'https://jestjs.io/ja/',
  },
  {
    name: 'Prettier',
    imgUrl: './images/techs/prettier.svg',
    linkUrl: 'https://prettier.io/',
  },
  {
    name: 'Nodemon',
    imgUrl: './images/techs/nodemon.svg',
    linkUrl: 'https://nodemon.io/',
  },
  {
    name: 'Sentry',
    imgUrl: './images/techs/sentry.svg',
    linkUrl: 'https://sentry.io/welcome/',
  },
  {
    name: 'Docker',
    imgUrl: './images/techs/docker.svg',
    linkUrl: 'https://www.docker.com/',
  },
  {
    name: 'GCP',
    imgUrl: './images/techs/googlecloud.svg',
    linkUrl: 'https://console.cloud.google.com/?hl=ja',
  },
  {
    name: 'MySQL',
    imgUrl: './images/techs/mysql.svg',
    linkUrl: 'https://www.mysql.com/jp/',
  },
  {
    name: 'Python',
    imgUrl: './images/techs/python.svg',
    linkUrl: 'https://www.python.org/',
  },
  {
    name: 'Goole',
    imgUrl: './images/techs/google.svg',
    linkUrl: 'https://www.google.com/?hl=ja',
  },
  {
    name: 'Apple',
    imgUrl: './images/techs/apple.svg',
    linkUrl: 'https://www.apple.com/jp/',
  },
  {
    name: 'HUAWEI',
    imgUrl: './images/techs/huawei.svg',
    linkUrl: 'https://consumer.huawei.com/jp/',
  },
  {
    name: 'Firebase',
    imgUrl: './images/techs/firebase.svg',
    linkUrl: 'https://firebase.google.com/?hl=ja',
  },
  {
    name: 'Github',
    imgUrl: './images/techs/github.svg',
    linkUrl: 'https://github.co.jp/',
  },
  {
    name: 'Figma',
    imgUrl: './images/techs/figma.svg',
    linkUrl: 'https://www.figma.com/',
  },
  {
    name: 'Notion',
    imgUrl: './images/techs/notion.svg',
    linkUrl: 'https://www.notion.so/',
  },
  {
    name: 'Slack',
    imgUrl: './images/techs/slack.svg',
    linkUrl: 'https://slack.com/intl/ja-jp/',
  },
  {
    name: 'VS Code',
    imgUrl: './images/techs/visualstudiocode.svg',
    linkUrl: 'https://azure.microsoft.com/ja-jp/products/visual-studio-code/',
  },
  {
    name: 'Auth 0',
    imgUrl: './images/techs/auth0.svg',
    linkUrl: 'https://auth0.com/jp/',
  },
  {
    name: 'Nginx',
    imgUrl: './images/techs/nginx.svg',
    linkUrl: 'https://nginx.org/en/',
  },
  {
    name: 'Flutter',
    imgUrl: './images/techs/flutter.svg',
    linkUrl: 'https://flutter.dev/',
  },
]

export const links = [
  {
    name: 'wantedly',
    linkUrl: 'https://www.wantedly.com/users/19180819',
  },
  {
    name: 'forkwell',
    linkUrl: 'https://portfolio.forkwell.com/@gitackt',
  },
]
