import React, { Component } from 'react';
import NavigationComponent from '../components/navi.component';
import FooterComponent from '../components/footer.component';
import Button from '@material-ui/core/Button';


const styles = {
  root: {
    flexGrow: 1,
  },
};

class ComicPageComponent extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className={styles.root} style={{ position: 'relative', padding: '30px', height: '100%' }}>
        <NavigationComponent />

        <div style={{ marginTop: '60px' }}>

        <h3 style={{ color: '#1DD6D1' }}> 作品紹介</h3>

        <p>
          漫画とかイラスト書いてます。
        </p>

        <a
          href="https://www.pixiv.net/member_illust.php?id=29647166"
          style={{ textDecoration: 'none' }}
        >
          <Button
            variant="outlined"
            size="large"
            style={{ color: '#1DD6D1', borderColor: '#1DD6D1', marginTop: '30px' }}
          >
            PIXIVを見る
          </Button>
        </a>

        <br />
        <br />
        <br />
        <br />

        <FooterComponent />
      </div>
      </div >
    );
  }
}

export default ComicPageComponent;
