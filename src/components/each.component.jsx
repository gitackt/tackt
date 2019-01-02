import React, { Component } from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    width: '90%',
    background: '#ffffff',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: '10px',
    // borderTop: 'solid 3px #F3F1EE',
    // borderRight: 'solid 3px #F3F1EE',
    // borderBottom: 'solid 4px #F3F1EE',
    // borderLeft: 'solid 3px #F3F1EE',
    textAlign: 'center',
    // boxShadow: '2px 2px 20px rgba(0,0,0,0.1)',
  },
  image: {
    position: 'relative',
    width: '95%',
    height: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    margin: '7px',
    maxHeight: '160px',
    borderRadius: '10px 10px 10px 10px',
  },
  button: {
    height: '30px',
    width: '160px',
    marginTop: '50px',
    borderRadius: '10px',
    borderTop: 'solid 2px #d34e6f',
    borderRight: 'solid 2px #d34e6f',
    borderBottom: 'solid 3px #d34e6f',
    borderLeft: 'solid 2px #d34e6f',
    background: '#ff517c',
    color: 'white',
    fontSize: '13px',
    padding: '12px',
    paddingLeft: '30px',
    paddingRight: '30px',
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
          <Typography gutterBottom variant="headline" component="h2" style={{ fontSize: '15px' }}>
            {this.props.data.name}
          </Typography>
          <Typography component="p" style={{ fontSize: '10px' }}>
            {this.props.data.skill}
          </Typography>
          <br />
          <Typography component="p" style={{ fontSize: '11px' }}>
            {this.props.data.info}
          </Typography>
          <br /><br /><br />
          <a
            href={this.props.data.url}
            target="_blank"
            style={styles.button}
          >
            サイトを見る
          </a>
        </CardContent>
      </div >
    );
  }
}