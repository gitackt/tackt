import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class ShopComponent extends Component {

  render() {
    return (
      <div className={styles.root} style={{ position: 'relative', height: '100%', background: 'white', color: '#2a2929' }}>
        <Link to="/shop" style={{ textDecoration: 'none' }}>
        <h2>
          <img
            style={{ position: 'relative', width: '270px', height: 'auto', borderRadius: '20px', marginTop: '100px' }}
            src="/shop.png"
            alt={'shop'}
          />
          {/* https://tackt.official.ec/ */}
        </h2>
        </Link>
      </div>
    );
  }
}

export default ShopComponent;
