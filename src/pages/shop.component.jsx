import React, { Component } from 'react';
import NavigationComponent from '../components/navi.component';
import FooterComponent from '../components/footer.component';
import Button from '@material-ui/core/Button';


const styles = {
  root: {
    flexGrow: 1,
  },
};

class ShopPageComponent extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className={styles.root} style={{ position: 'relative', padding: '30px', height: '100%' }}>
        <NavigationComponent />

        <h2 style={{ color: '#1DD6D1' }}>
          ショップ
        </h2>

        <p>
          BASEでハーバリウムやレジンアイテムを売ってます。
        </p>

        <a
          href="https://tackt.official.ec/"
          target="_blank"
          style={{ textDecoration: 'none' }}
        >
          <Button
            variant="outlined"
            size="large"
            style={{ color: '#1DD6D1', borderColor: '#1DD6D1', marginTop: '30px' }}
          >
            BASEを見る
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

export default ShopPageComponent;
