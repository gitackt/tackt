import React, { Component } from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    background: '#ffffff',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: '10px',
    boxShadow: '2px 2px 20px rgba(0,0,0,0.1)',
  },
  image: {
    position: 'relative',
    width: '100%',
    height: 'auto',
    maxHeight: '180px',
    borderRadius: '10px 10px 0px 0px',
  },
  button: {
    color: '#eb346b',
    fontSize: '18px',
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
          <Typography gutterBottom variant="headline" component="h2" style={{ fontSize: '18px', color: '#533B3F' }}>
            <a
              href={this.props.data.url}
              target="_blank"
              style={styles.button}
            >
              {this.props.data.name}
            </a>
          </Typography>
          <Typography component="p" style={{ fontSize: '11px', color: '#533B3F' }}>
            {this.props.data.skill}
          </Typography>
          <br />
          <Typography component="p" style={{ fontSize: '12px', color: '#533B3F' }}>
            {this.props.data.info}
          </Typography>
        </CardContent>
      </div >
    );
  }
}