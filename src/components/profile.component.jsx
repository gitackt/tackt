import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class ProfileComponent extends Component {

  render() {
    return (
      <div className={styles.root} style={{ position: 'relative', top: -95, padding: '30px', paddingTop: '30px', paddingBottom: '120px', height: '100%', background: 'white', color: '#2a2929' }}>
        <h2>profile</h2>
        <Grid container spacing={5}>
          <Grid item xs={12} md={2}/>
          <Grid item xs={12} md={3} style={{ textAlign: 'center' }}>
            <div>
              <img
                style={{ position: 'relative', width: '100px', height: '100px', borderRadius: '100px' }}
                src="/profile.jpg"
                alt={'Tackt Mitsuhashi'}
              />
              <h3 style={{ fontSize: '20px' }}>三橋拓人</h3>
              <h4 style={{ fontSize: '13px' }}>Tackt Mitsuhashi</h4>
            </div>
          </Grid>
          <Grid item xs={12} md={5} style={{ fontSize: '11px', textAlign: 'left' }}>
          <p>
            自己紹介<br/>
            Web開発、アプリ開発、Bot開発、デザイン制作、イラスト制作、漫画制作、記事制作、アイテム制作やってます！
        
            <br/>
            <br/>

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
          <Grid item xs={12} md={2} />
        </Grid>
      </div>
    );
  }
}

export default ProfileComponent;
