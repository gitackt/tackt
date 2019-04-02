import React, { PureComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

import { listData } from '../params/services';

const styles = {
  container: {
    marginTop: '10px',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '1200px',
  },
  grid: {
    textAlign: 'left',
    marginBottom: '10px',
    marginTop: '10px',
    padding: '20px',
  },
  title: {
    width: '80%',
    color: '#6D6C6A',
    maxWidth: '1200px',
    textAlign: 'left',
    padding: '15px',
    fontSize: '28px',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderBottom: 'solid 2px #EAEAEA',
  },
  titleInfo: {
    fontSize: '13px',
    fontWeight: 'normal',
    marginTop: '10px',
  },
  card: {
    width: '95%',
    height: '380px',
    background: '#ffffff',
    overflow: 'hidden',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: '10px',
    textAlign: 'center',
  },
  image: {
    position: 'relative',
    width: '100%',
    height: 'auto',
  },
  button: {
    height: '20px',
    borderRadius: '10px',
    border: 'solid 1px #ff517c',
    background: 'white',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: '#ff517c',
    fontSize: '13px',
    paddingTop: '10px',
    paddingBottom: '10px',
    paddingLeft: '80px',
    paddingRight: '80px',
    textDecoration: 'none',
  },
  github: {
    position: 'absolute',
    width: '60px',
    background: '#924df2',
    color: 'white',
    fontSize: '15px',
    padding: '10px',
    borderRadius: '10px 0px 5px 0px',
    zIndex: '26',
  },
  active: {
    position: 'absolute',
    width: '60px',
    background: '#0dddb4',
    color: 'white',
    fontSize: '15px',
    padding: '10px',
    borderRadius: '10px 0px 5px 0px',
    zIndex: '26',
  },
  sold: {
    position: 'absolute',
    width: '60px',
    background: '#ff0050',
    color: 'white',
    fontSize: '15px',
    padding: '10px',
    borderRadius: '10px 0px 5px 0px',
    zIndex: '26',
  },
  ios: {
    position: 'absolute',
    width: '60px',
    background: '#33c9e0',
    color: 'white',
    fontSize: '15px',
    padding: '10px',
    borderRadius: '10px 0px 5px 0px',
    zIndex: '26',
  },
  android: {
    position: 'absolute',
    width: '60px',
    background: '#b54141',
    color: 'white',
    fontSize: '15px',
    padding: '10px',
    borderRadius: '10px 0px 5px 0px',
    zIndex: '26',
  },
  line: {
    position: 'absolute',
    width: '60px',
    background: '#4fd65a',
    color: 'white',
    fontSize: '15px',
    padding: '10px',
    borderRadius: '10px 0px 5px 0px',
    zIndex: '26',
  },
  deactive: {
    position: 'absolute',
    width: '60px',
    background: '#fdc538',
    color: 'white',
    fontSize: '15px',
    padding: '10px',
    borderRadius: '10px 0px 5px 0px',
    zIndex: '26',
  }
};


const CardContentComponent = (props) => {

  return (
    <div>
      {props.data.status === 'sold' && (
        <div style={styles.sold}>
          Sold
        </div>
      )}
      {props.data.status === 'active' && (
        <div style={styles.active}>
          Active
        </div>
      )}
      {props.data.status === 'deactive' && (
        <div style={styles.deactive}>
          Deactive
        </div>
      )}
      {props.data.status === 'github' && (
        <div style={styles.github}>
          Github
        </div>
      )}
      {props.data.status === 'ios' && (
        <div style={styles.ios}>
          iOS
        </div>
      )}
      {props.data.status === 'android' && (
        <div style={styles.android}>
          Andoid
        </div>
      )}
      {props.data.status === 'line' && (
        <div style={styles.line}>
          LINE Bot
        </div>
      )}
      <div style={{ overflow: 'hidden', maxHeight: '150px' }}>
        <img
          style={styles.image}
          src={props.data.image}
          alt={props.data.name}
        />
      </div>
      <CardContent>
        <Typography gutterBottom variant="headline" component="h2" style={{ fontSize: '17px', color: '#51504d' }}>
          {props.data.name}
        </Typography>
        <br />
        <Typography component="p" style={{ fontSize: '12px', color: '#6D6C6A', height: '100px' }}>
          {props.data.info}
        </Typography>
        <p>
          {props.data.complete ? (
            <a
              href={props.data.url}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.button}
            >
              サービスを見る
            </a>
          ) : (
            "Coming soon..."
          )}
        </p>
      </CardContent>
    </div>
  )
}

const EachComponent = (props) =>{

  return (
    <div>
      <div style={styles.card}>
        <CardContentComponent data={props.data} />
      </div >
    </div >
  );
}

class ServiceComponent extends PureComponent {

  render() {
    return (
      <div style={{ paddingTop: '5px', textAlign: 'center', background: 'white' }}>
        <h2 style={styles.title}>
          Services <br /><span style={styles.titleInfo}>作ったサービスの一覧です。</span>
        </h2>

        <Grid container justify={'center'} style={styles.container}>
          {listData.map((each) => (
            <Grid item xs={12} sm={6} md={4} style={styles.grid}>
              <EachComponent data={each} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

export default ServiceComponent;

