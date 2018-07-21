import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class SmallProfileComponent extends Component {

  render() {
    return (
      <div className={styles.root} style={{ position: 'relative', top: '70px', padding: '30px', paddingTop: '30px', paddingBottom: '120px', height: '100%', background: 'transparent', color: '#2a2929' }}>
        <Grid container spacing={5}>
          <Grid item xs={12} style={{ textAlign: 'center' }}>
            <div>
              <img
                style={{ position: 'relative', width: '70px', height: '70px', borderRadius: '100px' }}
                src="/profile.jpg"
                alt={'Tackt Mitsuhashi'}
              />
              <h3 style={{ fontSize: '20px' }}>三橋拓人</h3>
              <h4 style={{ fontSize: '12px' }}>Tackt Mitsuhashi</h4>
            </div>
          </Grid>
          <Grid item xs={12} style={{ textAlign: 'center' }}>
          <p>
            Web開発、アプリ開発、Bot開発、デザイン制作、イラスト制作、漫画制作、記事制作、アイテム制作やってます！

            <br />

            <div style={{ fontSize: '10px', color: 'rgb(149, 149, 149)',textAlign: 'left' }}>
            経歴<br/>
            2016 ~           明治大学 商学部<br/>
            2017 ~ 2018      株式会社Whatzmoney<br/>
            2018 ~           株式会社MICIN 
            
            <br/>
            <br/>

            技術<br/>
            Python, Django, Rails, Node, React, React-native, Mysql, Nginx, Docker, Aws,
            Affinty Designer, Clip Studio

            <br/>
            <br/>
            
            {/* 資格<br/> */}
                <br />
            {/* 証券アナリスト, FP */}

                生年月日　     1997年6月30日<br />
                Email        git.tackt@gmail.com<br />
                Ethereum     0x9ddb22480bd6f3d56de73457fe657520d5da6693<br />

  
            <br />
            <br/>
            </div>
            <a
              href="https://www.facebook.com/profile.php?id=100013371464347"
              target="_blank"
            >
            <img
              style={{ position: 'relative', width: '90px', height: '32px', marginTop: '30px', marginLeft: '5px', marginRight: '5px'  }}
              src="/facebook.png"
              alt={'facebook'}
            />
            </a>
            <a
              href="https://twitter.com/picos_tackt"
              target="_blank"
            >
            <img
              style={{ position: 'relative', width: '90px', height: '32px', marginTop: '30px', marginLeft: '5px', marginRight: '5px'  }}
              src="/twitter.png"
                alt={'twitter'}
            />
            </a>
            <a
              href="https://github.com/gitackt/tackt"
              target="_blank"
            >
            <img
              style={{ position: 'relative', width: '90px', height: '32px', marginTop: '30px', marginLeft: '5px', marginRight: '5px'  }}
              src="/github.png"
              alt={'github'}
            />
            </a>
            <a
              href="https://valu.is/tackt3"
              target="_blank"
            >
            <img
              style={{ position: 'relative', width: '90px', height: '32px', marginTop: '30px', marginLeft: '5px', marginRight: '5px' }}
              src="/valu.png"
              alt={'valu'}
            />
            </a>
          </p>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default SmallProfileComponent;
