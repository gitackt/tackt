import React, { Component } from 'react';

const styles = {
  root: {
    flexGrow: 1,
  },
  container: {
    position: 'relative',
    padding: '10px',
    paddingTop: '100px',
    height: '60px',
    background: 'transparent',
    color: 'rgb(135, 135, 135)',
    textAlign: 'center',
  },
};

class FooterComponent extends Component {

  render() {
    return (
      <div className={styles.root} style={styles.container}>

        <h6>copyright 2018 tackt mitsuhashi</h6>
      </div>
    );
  }
}

export default FooterComponent;
