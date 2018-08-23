import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class ShopComponent extends Component {

  render() {
    return (
      <div className={styles.root} style={{ position: 'relative', height: '100%', background: 'white', color: '#2a2929' }}>
        <h2>
          <img
            style={{ position: 'relative', width: '220px', height: 'auto', borderRadius: '20px', marginBottom: '20px', marginTop: '100px' }}
            src="/shop.png"
            alt={'shop'}
          />
          {/* https://tackt.official.ec/ */}
        </h2>
        <br />
        <Link to="/shop" style={{ textDecoration: 'none' }}>
            <Button
              variant="outlined"
              onClick={this.handleOpen}
              style={{ color: '#B0A7FC', borderColor: '#B0A7FC' }}
            >
              公式ショップを見る
              </Button>
          </Link>
      </div>
    );
  }
}

export default ShopComponent;
