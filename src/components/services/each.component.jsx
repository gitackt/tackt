import React, { Component } from 'react';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    background: 'white',
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
    color: 'white',
    fontSize: '15px',
    marginTop: '50px',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: '30px',
    padding: '10px 60px 10px 60px',
    boxShadow: '2px 2px 20px rgba(0,0,0,0.2)',
    background: '#ea3c8e',
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
          <Typography gutterBottom variant="headline" component="h2" style={{ fontSize: '18px', color: '#545454' }}>
            {this.props.data.name}
          </Typography>
          <Typography component="p" style={{ fontSize: '11px', color: 'gray' }}>
            {this.props.data.skill}
          </Typography>
          <br />
          <Typography component="p" style={{ fontSize: '12px', color: '#5b5b5b' }}>
            {this.props.data.info}
          </Typography>
          <div style={{ textAlign: 'center' }}>
            <Button
              style={styles.button}
              size="small"
              color="primary"
              href={this.props.data.url}
              target="_blank"
            >
              サイトを見る
          </Button>
          </div>
        </CardContent>
      </div>
    );
  }
}