import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class EngeneerComponent extends Component {

  render() {
    return (
      <div className={styles.root} style={{ position: 'relative', height: '100%' }}>
          <h2>
            <img
            style={{ position: 'relative', width: '220px', height: 'auto', borderRadius: '20px', marginBottom: '20px' }}
              src="/engeneer.png"
              alt={'engeneer'}
            />
            <br />
            <Link to="/engeneer" style={{ textDecoration: 'none' }}>
              <Button
                variant="outlined"
                onClick={this.handleOpen}
                style={{ color: '#1DD6D1', borderColor: '#1DD6D1' }}
              >
                エンジニア実績を見る
              </Button>
            </Link>
          </h2>
      </div>
    );
  }
}

export default EngeneerComponent;
