import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import NavigationComponent from '../components/navi.component';
import FooterComponent from '../components/footer.component';

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
        <h2>
          <img
            style={{ position: 'relative', width: '300px', height: 'auto', borderRadius: '20px', marginTop: '100px' }}
            src="/shop.png"
            alt={'shop'}
          />
          {/* https://tackt.official.ec/ */}
        </h2>
        <FooterComponent />
      </div>
    );
  }
}

export default ShopPageComponent;
