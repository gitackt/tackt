import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    background: 'white',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
};

export class EachComponent extends Component {

  render() {

    return (
      <div style={styles.card}>
        <img
          style={{ position: 'relative', width: '100%', height: 'auto', borderRadius: '20px', maxHeight: '180px' }}
          src={this.props.data.image}
          alt={this.props.data.name}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2" style={{ fontSize: '18px' }}>
            <Button
              style={{ fontSize: '15px', color: '#218ac6' }}
              size="small"
              color="primary"
              href={this.props.data.url}
              target="_blank"
            >
              {this.props.data.name}
            </Button>
          </Typography>
          <Typography component="p" style={{ fontSize: '11px', color: 'gray' }}>
            {this.props.data.skill}
          </Typography>
          <br />
          <Typography component="p" style={{ fontSize: '12px', color: '#5b5b5b' }}>
            {this.props.data.info}
          </Typography>
        </CardContent>
      </div>
    );
  }
}