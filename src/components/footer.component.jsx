import React, { Component } from 'react';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class FooterComponent extends Component {

  render() {
    return (
      <div className={styles.root} style={{ position: 'relative', padding: '30px', height: '40px', background: 'white', color: '#2a2929' }}>
        <h6>copyright 2018 tackt mitsuhashi</h6>
      </div>
    );
  }
}

export default FooterComponent;
