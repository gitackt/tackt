import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';


const styles = {
  root: {
    flexGrow: 1,
  },
};

class SmallProfileComponent extends Component {

  render() {
    return (
      <div className={styles.root} style={{ position: 'relative', top: '70px', padding: '30px', paddingBottom: '90px', height: '350px', background: 'transparent', color: '#2a2929' }}>
        <Grid container spacing={8}>
          <Grid item xs={12} style={{ textAlign: 'center' }}>
            <div>
              <img
                style={{ position: 'relative', width: '130px', height: '130px', borderRadius: '100px', marginTop: "-60px" }}
                src="/profile.jpg"
                alt={'Tackt Mitsuhashi'}
              />
              <h3 style={{ fontSize: '17px' }}>三橋拓人</h3>
              <h4 style={{ fontSize: '12px' }}>Tackt Mitsuhashi</h4>
            </div>
          </Grid>
          <Grid item xs={12} style={{ fontSize: '11px', textAlign: 'center' }}>
          <p>
            Web開発、アプリ開発、Bot開発、デザイン制作、イラスト制作、漫画制作、記事制作、アイテム制作やってます！
          </p>
            <br />
            <br />

            <Link 
              to="/profile" 
              style={
                { 
                  textDecoration: 'none', 
                  fontSize:'13px',
                  paddingTop: "15px", 
                  paddingBottom: "15px", 
                  paddingLeft: "55px", 
                  paddingRight: "55px", 
                  background: '#6CD9F6', 
                  color: 'white', 
                  width: '100px', 
                  borderRadius: '50px',
                }
              }
            >
                プロフィール詳細を見る
            </Link>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default SmallProfileComponent;

