import React, { PureComponent } from 'react';
import Grid from '@material-ui/core/Grid';
// import { NameComponent } from './name.component';

const styles = {
  container: {
    textAlign: 'center',
    paddingBottom: '15px',
    // borderTop: 'solid 4px #4b8c85',
  },
  profile: {
    textAlign: 'left',
    borderRadius: '10px',
    padding: '15px',
    background: '#f2f2f2'
  },
  image: {
    maxWidth: '150px',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: '10px',
  },
  gridLeft: {
    textAlign: 'left',
    borderRadius: '10px',
    padding: '25px',
  },
  grid: {
    textAlign: 'center',
    borderRadius: '10px',
    margin: '15px',
    padding: '15px',
  },
  eyeCatch: {
    textAlign: 'left',
    borderRadius: '5px',
    padding: '35px',
    paddingTop: '10px',
    background: '#f2f2f2',
    marginTop: '30px',
    marginBottom: '60px',
  },
  content: {
    fontSize: '16px',
    fontWeight: '400',
    color: '#574F5D',
    lineHeight: '1.8',
    marginBottom : '1.8em',
  },
  sub: {
    color: '#333035',
    fontWeight: '500',
    // borderBottom: 'solid 3px #333035',
  },
  mainTitle: {
    color: '#333035',
    fontWeight: '500',
    fontSize: '28px',
    paddingLeft: '10px',
  },
  button: {
    height: '30px',
    width: '80%',
    borderRadius: '5px',
    background: '#FFAF00',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: 'white',
    fontSize: '18px',
    padding: '15px',
    textDecoration: 'none',
    marginTop: '10px',
    border: 'solid 3px #eda50b',
    borderTop: 'solid 2px #eda50b',
    borderBottom: 'solid 4px #eda50b',
  },
  twitter: {
    height: '30px',
    width: '80%',
    borderRadius: '5px',
    background: '#35d3ff',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: 'white',
    fontSize: '18px',
    padding: '15px',
    textDecoration: 'none',
    marginTop: '10px',
    border: 'solid 3px #2ac3ed',
    borderTop: 'solid 2px #2ac3ed',
    borderBottom: 'solid 4px #2ac3ed',
  },
  subimage: {
    width: '100%',
    maxWidth: '400px',
    borderRadius: '10px',
  },
  coin: {
    maxWidth: '50px',
    borderRadius: '10px',
  },
  sub_3: {
    // borderLeft: 'solid 4px #2AD8C9',
    padding: '5px',
    margin: '5px',
    marginTop: '10px',
    marginBottom: '10px',
    fontWeight: 'normal',
  }
};

export class ProfileComponent extends PureComponent {

  render() {
    return (
      <div>
        <div>
          <Grid container justify={'center'} style={styles.container}>
            <Grid item xs={12} md={8} style={styles.gridLeft}>
              <div style={styles.content}>
              <br />
              <br />
              三橋拓人(
              <a 
                href={'https://twitter.com/picos_tackt?lang=ja'}
                target="_blank"
                rel="noopener noreferrer"
              >
                @picos_tackt
              </a>
              )です。個人でWebサービスやアプリを作ってます。
              {/* <NameComponent /> */}
              <br /><br />
              {/* <h2 style={styles.sub}>Job</h2> */}
              <h3 style={styles.sub_3}>
                ・<a 
                  href={'https://micin.jp/'}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MICIN inc.
                </a> - Software Engineer Intern（2018 ~ ）
              </h3>
              {/* React-nativeやAngularを使った遠隔診療アプリケーションの開発<br /><br /> */}
              <h3 style={styles.sub_3}>
              ・<a 
                href={'https://micin.jp/'}
                target="_blank"
                rel="noopener noreferrer"
              >
                Whatzmoney inc.
              </a> - Software Engineer Intern（2017 ~ 2018）
              </h3>
              {/* Ruby on Railsを使った住宅ローン比較サイトの開発<br /><br /><br /> */}
              </div>
              <br />
              <br />
              {/* <div style={styles.profile}>
                <h3>三橋拓人（みつはしたくと）</h3>
                <h4>経歴</h4>
                <p style={{ fontSize: '12px' }}>
                  明治大学 商学部 商学科
                  Finance Course (2016 ~ )<br />
                  株式会社Whatzmoney
                  Engineer Intern (2017 ~ 2018)<br />
                  株式会社MICIN
                  Engineer Intern (2018 ~ )<br />
                </p>
                <h4>資格</h4>
                <p style={{ fontSize: '12px' }}>
                  証券アナリスト2次 (CCMA)<br />
                </p>
                <h4>技術</h4>
                <p style={{ fontSize: '12px' }}>
                  Python, Ruby, Django, Rails, HTML, CSS, JavaScript, TypeScript, React, React-native, 
                  Nginx, MySQL, Wordpress, PHP, Node, Docker, AWS, Angular, Vue, Go,
                  Affinity Designer, Clip Studio
                </p>
              </div> */}
              <img
                style={styles.coin}
                src={'/images/balls/bubble_coin.png'}
                alt={'bubble'}
              />
              <img
                style={styles.coin}
                src={'/images/balls/gum_coin.png'}
                alt={'bubble'}
              />
              <img
                style={styles.coin}
                src={'/images/balls/cake_coin.png'}
                alt={'bubble'}
              />
              <img
                style={styles.coin}
                src={'/images/balls/honey_coin.png'}
                alt={'bubble'}
              />
              <img
                style={styles.coin}
                src={'/images/balls/cocoa_coin.png'}
                alt={'bubble'}
              />
              <img
                style={styles.coin}
                src={'/images/balls/mono_coin.png'}
                alt={'bubble'}
              />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

