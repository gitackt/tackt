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

        <h2 style={{ color: '#1DD6D1' }}>
          コミック
        </h2>

        <p>
          漫画とかイラスト書いてます。
        </p>

        <a
          href="https://www.pixiv.net/member.php?id=29647166"
          target="_blank"
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
    );
  }
}

export default ComicPageComponent;
