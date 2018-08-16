import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class EngeneerComponent extends Component {

  render() {
    return (
      <div className={styles.root} style={{ position: 'relative', height: '100%' }}>
        <Link to="/engeneer" style={{ textDecoration: 'none' }}>
          <h2>
            <img
              style={{ position: 'relative', width: '270px', height: 'auto', borderRadius: '20px', marginBottom: '20px' }}
              src="/engeneer.png"
              alt={'engeneer'}
            />
          </h2>
        </Link>
      </div>
    );
  }
}

export default EngeneerComponent;
