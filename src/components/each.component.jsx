import React, { Component } from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    width: '95%',
    background: '#ffffff',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: '10px',
    textAlign: 'center',
  },
  image: {
    position: 'relative',
    width: '95%',
    height: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    margin: '7px',
    borderRadius: '10px 10px 10px 10px',
  },
  button: {
    height: '20px',
    width: '80%',
    borderRadius: '10px',
    border: 'solid 1px #ff517c',
    background: 'white',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: '#ff517c',
    fontSize: '13px',
    padding: '20px',
    textDecoration: 'none',
  },
};

export class EachComponent extends Component {

  render() {

    return (
      <div style={styles.card}>
        <img
          style={styles.image}
          src={this.props.data.image}
          alt={this.props.data.name}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2" style={{ fontSize: '17px', color: '#51504d' }}>
            {this.props.data.name}
          </Typography>
          <br />
          <Typography component="p" style={{ fontSize: '12px', color: '#6D6C6A' }}>
            {this.props.data.info}
          </Typography>
          <br /><br />
          <a
            href={this.props.data.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', textAlign: 'center' }}
          >
            <div style={styles.button}>
              サイトを見る
            </div>
          </a>
        </CardContent>
      </div >
    );
  }
}