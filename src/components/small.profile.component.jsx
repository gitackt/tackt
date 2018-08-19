import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

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
                }
              }
            >
              <Button
                variant="outlined"
                size="large"
                onClick={this.handleOpen}
                style={{ color: '#6CD9F6', borderColor: '#6CD9F6' }}
              >
                プロフィール詳細を見る
              </Button>
            </Link>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default SmallProfileComponent;

