import React, { PureComponent } from 'react';
import Grid from '@material-ui/core/Grid';

import { listData } from '../../params/services';

const styles = {
  card: {
    width: '95%',
    height: '450px',
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
};


const CardContentComponent = (props) => {

  return (
    <div>
      {props.data.status === 'sold' && (
        <div className='tag sold'>
          Sold
        </div>
      )}
      {props.data.status === 'active' && (
        <div className='tag active'>
          Active
        </div>
      )}
      {props.data.status === 'deactive' && (
        <div className='tag deactive'>
          Deactive
        </div>
      )}
      {props.data.status === 'github' && (
        <div className='tag github'>
          Github
        </div>
      )}
      {props.data.status === 'ios' && (
        <div className='tag ios'>
          iOS
        </div>
      )}
      {props.data.status === 'android' && (
        <div className='tag android'>
          Andoid
        </div>
      )}
      {props.data.status === 'line' && (
        <div className='tag line'>
          LINE Bot
        </div>
      )}
      <div style={{ overflow: 'hidden', maxHeight: '140px' }}>
        <img
          style={styles.image}
          src={props.data.image}
          alt={props.data.name}
        />
      </div>
      <div className='service-content'>
        <h3>{props.data.name}</h3>
        <h4>{props.data.skills}</h4>
        <p style={{ height: '95px' }}>
          {props.data.info}
        </p>
        <p>
          {props.data.complete ? (
            <a
              href={props.data.url}
              target="_blank"
              rel="noopener noreferrer"
              className='service-button'
            >
              サービスを見る
            </a>
          ) : (
            "Coming soon..."
          )}
        </p>
      </div>
    </div>
  )
}

export const EachComponent = (props) =>{

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
      <div style={{ paddingTop: '5px', textAlign: 'center' }}>
        <h2 className='title'>Services</h2>

        <Grid container justify={'center'} className='container'>
          {listData.map((each) => (
            <Grid item xs={12} sm={6} md={4} className='grid'>
              <EachComponent data={each} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

export default ServiceComponent;

