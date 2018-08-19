import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import NavigationComponent from '../components/navi.component';
import FooterComponent from '../components/footer.component';
import { Timeline } from 'react-twitter-widgets'

const styles = {
  root: {
    flexGrow: 1,
  },
};

class ProfilePageComponent extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className={styles.root} style={{ position: 'relative', padding: '30px', height: '100%' }}>
        <NavigationComponent />
        {/* <h2>
          <img
            style={{ position: 'relative', width: '300px', height: 'auto', borderRadius: '20px', marginTop: '50px', marginBottom: '50px' }}
            src="/profile.png"
            alt={'profile'}
          />
        </h2> */}
        <div style={{ marginTop: '120px', }}>
          <div>
            <img
              style={{ position: 'relative', width: '130px', height: '130px', borderRadius: '100px', marginTop: "-60px" }}
              src="/profile.jpg"
              alt={'Tackt Mitsuhashi'}
            />
            <h3 style={{ fontSize: '17px' }}>三橋拓人</h3>
            <h4 style={{ fontSize: '12px' }}>Tackt Mitsuhashi</h4>
          </div>

            <div style={{ fontSize: '7px', color: 'rgb(149, 149, 149)',textAlign: 'left', textAlign: 'center' }}>
            経歴 
            2016 ~           明治大学 商学部 
            2017 ~ 2018      株式会社Whatzmoney 
            2018 ~           株式会社MICIN 
            
            <br/>

            技術 
            Python, Django, Rails, Node, React, React-native, Mysql, Nginx, Docker, Aws,
            Affinty Designer, Clip Studio

            <br/>
            
            資格 
            証券アナリスト, FP

            <br/>

                生年月日　     1997年6月30日 
                Email        git.tackt@gmail.com 
                Ethereum     0x9ddb22480bd6f3d56de73457fe657520d5da6693

  
            <br/>
            <a
              href="https://www.facebook.com/profile.php?id=100013371464347"
              target="_blank"
            >
              <img
                style={{ position: 'relative', width: '50px', height: '18px', marginTop: '30px', marginLeft: '5px', marginRight: '5px' }}
                src="/facebook.png"
                alt={'facebook'}
              />
            </a>
            <a
              href="https://twitter.com/picos_tackt"
              target="_blank"
            >
              <img
                style={{ position: 'relative', width: '50px', height: '18px', marginTop: '30px', marginLeft: '5px', marginRight: '5px' }}
                src="/twitter.png"
                alt={'twitter'}
              />
            </a>
            <a
              href="https://github.com/gitackt/tackt"
              target="_blank"
            >
              <img
                style={{ position: 'relative', width: '50px', height: '18px', marginTop: '30px', marginLeft: '5px', marginRight: '5px' }}
                src="/github.png"
                alt={'github'}
              />
            </a>
            <a
              href="https://valu.is/tackt3"
              target="_blank"
            >
              <img
                style={{ position: 'relative', width: '50px', height: '18px', marginTop: '30px', marginLeft: '5px', marginRight: '5px' }}
                src="/valu.png"
                alt={'valu'}
              />
            </a>
            <a
              href="https://www.pixiv.net/member.php?id=29647166"
              target="_blank"
            >
              <img
                style={{ position: 'relative', width: '50px', height: '18px', marginTop: '30px', marginLeft: '5px', marginRight: '5px' }}
                src="/pixiv.png"
                alt={'pixiv'}
              />
            </a>
            </div>
          <div style={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: '400px', marginTop: '100px' }}>
            <Timeline
              dataSource={{
                sourceType: 'profile',
                screenName: 'picos_tackt'
              }}
              options={{
                username: 'picos_tackt',
                height: '400'
              }}
            />
          </div>
          </div>
        <FooterComponent />
      </div>
    );
  }
}

export default ProfilePageComponent;
