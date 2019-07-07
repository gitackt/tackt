import React, { PureComponent } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = {
  container: {
    position: 'relative',
    paddingTop: '10px',
    paddingBottom: '10px',
    color: '#313942',
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  coin: {
    maxWidth: '50px',
    borderRadius: '10px',
  },
};

class FooterComponent extends PureComponent {

  state = {
    value: null,
  }

  onSubmit() {
    alert('next quiz comming soon.. please wait')
  }

  render() {

    return (
      <div>
        <div style={styles.container}>
        <TextField
          label="Answer"
          value={this.state.value}
          onChange={value => this.setState({ value: value.target.value })}
          margin="normal"
          variant="outlined"
        />
        <br />
        <Button 
          variant="outlined" 
          color="secondary" 
          onClick={() => this.onSubmit()}
        >
          Submit
        </Button>
        <br />
        <br />

        <div>
          <img
            style={styles.coin}
            src={'/images/balls/bubble_coin.png'}
            alt={'bubble'}
          />
          <img
            style={styles.coin}
            src={'/images/balls/gum_coin.png'}
            alt={'bubble'}
          />
          <img
            style={styles.coin}
            src={'/images/balls/cake_coin.png'}
            alt={'bubble'}
          />
          <img
            style={styles.coin}
            src={'/images/balls/honey_coin.png'}
            alt={'bubble'}
          />
          <img
            style={styles.coin}
            src={'/images/balls/cocoa_coin.png'}
            alt={'bubble'}
          />
          <img
            style={styles.coin}
            src={'/images/balls/mono_coin.png'}
            alt={'bubble'}
          />
        </div>
          <h6>Copyright 2018~{new Date().getFullYear()} Takuto Mitsuhashi</h6>
        </div>
      </div>
    );
  }
}

export default FooterComponent;
