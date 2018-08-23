import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class DesignerComponent extends Component {

  render() {
    return (
      <div className={styles.root} style={{ position: 'relative', height: '100%', background: 'white', color: '#2a2929' }}>
        <h2>
          <img
            style={{ position: 'relative', width: '220px', height: 'auto', borderRadius: '20px', marginBottom: '20px', marginTop: '100px' }}
            src="/designer.png"
            alt={'designer'}
          />
        </h2>
        <br />
        <Link to="/designer" style={{ textDecoration: 'none' }}>
          <Button
            variant="outlined"
            onClick={this.handleOpen}
            style={{ color: '#EE7E9E', borderColor: '#EE7E9E' }}
          >
            デザイナー実績を見る
            </Button>
        </Link>
      </div>
    );
  }
}

export default DesignerComponent;
