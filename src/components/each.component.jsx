import React, { Component } from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    width: '95%',
    height: '380px',
    background: '#ffffff',
    overflow: 'hidden',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: '10px',
    textAlign: 'center',
    boxShadow: '1px 1px 15px 5px #edf0f4',
  },
  cardNoShadow: {
    width: '95%',
    height: '380px',
    background: '#ffffff',
    overflow: 'hidden',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: '10px',
    textAlign: 'center',
    // boxShadow: '1px 1px 15px 5px #edf0f4',
  },
  image: {
    position: 'relative',
    width: '100%',
    height: 'auto',
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
    padding: '15px',
    textDecoration: 'none',
  },
  github: {
    position: 'absolute',
    width: '100px',
    background: '#924df2',
    color: 'white',
    fontSize: '17px',
    padding: '10px',
    borderRadius: '10px 0px 5px 0px',
    zIndex: '26',
  },
  active: {
    position: 'absolute',
    width: '100px',
    background: '#0dddb4',
    color: 'white',
    fontSize: '17px',
    padding: '10px',
    borderRadius: '10px 0px 5px 0px',
    zIndex: '26',
  },
  sold: {
    position: 'absolute',
    width: '100px',
    background: '#ff0050',
    color: 'white',
    fontSize: '17px',
    padding: '10px',
    borderRadius: '10px 0px 5px 0px',
    zIndex: '26',
  },
  ios: {
    position: 'absolute',
    width: '100px',
    background: '#33c9e0',
    color: 'white',
    fontSize: '17px',
    padding: '10px',
    borderRadius: '10px 0px 5px 0px',
    zIndex: '26',
  },
  android: {
    position: 'absolute',
    width: '100px',
    background: '#b54141',
    color: 'white',
    fontSize: '17px',
    padding: '10px',
    borderRadius: '10px 0px 5px 0px',
    zIndex: '26',
  },
  line: {
    position: 'absolute',
    width: '100px',
    background: '#4fd65a',
    color: 'white',
    fontSize: '17px',
    padding: '10px',
    borderRadius: '10px 0px 5px 0px',
    zIndex: '26',
  },
  deactive: {
    position: 'absolute',
    width: '100px',
    background: '#fdc538',
    color: 'white',
    fontSize: '17px',
    padding: '10px',
    borderRadius: '10px 0px 5px 0px',
    zIndex: '26',
  }
};

class ContentComponent extends Component {
  render() {

    return (
      <div>
        {this.props.data.status === 'sold' && (
          <div style={styles.sold}>
            Sold
          </div>
        )}
        {this.props.data.status === 'active' && (
          <div style={styles.active}>
            Active
          </div>
        )}
        {this.props.data.status === 'deactive' && (
          <div style={styles.deactive}>
            Deactive
          </div>
        )}
        {this.props.data.status === 'github' && (
          <div style={styles.github}>
            Github
          </div>
        )}
        {this.props.data.status === 'ios' && (
          <div style={styles.ios}>
            iOS
          </div>
        )}
        {this.props.data.status === 'android' && (
          <div style={styles.android}>
            Andoid
          </div>
        )}
        {this.props.data.status === 'line' && (
          <div style={styles.line}>
            LINE Bot
          </div>
        )}
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
          <Typography component="p" style={{ fontSize: '12px', color: '#6D6C6A',height: '70px' }}>
            {this.props.data.info}
            <br /><br />
            {this.props.data.complete ? (
              this.props.data.url
            ) : (
              "Coming soon..."
            )}
          </Typography>
        </CardContent>
      </div>
    )
  }
}

export class EachComponent extends Component {

  render() {

    return (
      <div>
        {this.props.data.complete ? (
          <div style={styles.card}>
            <a
              href={this.props.data.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', textAlign: 'center' }}
            >
            <ContentComponent data={this.props.data} />
            </a>
          </div >
        ) : (
          <div style={styles.cardNoShadow}>
            <ContentComponent data={this.props.data} />
          </div >
        )}
      </div >
    );
  }
}