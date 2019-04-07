import React, { PureComponent } from 'react';

const styles = {
  container: {
    position: 'relative',
    paddingTop: '60px',
    paddingBottom: '30px',
    textAlign: 'center',
    color: 'white',
  },
  title: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  image: {
    width: '100%',
    maxWidth: '500px',
    marginTop: '40px',
  },
}

class JumbotronSmallComponent extends PureComponent {

  render() {
    return (
      <div className='small-jumbo'>
        <div
          style={styles.container}
        >  
          <div style={styles.title}>
            <h1>金融専攻の大学生が３年間のプログラマー半生を綴る</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default JumbotronSmallComponent;
