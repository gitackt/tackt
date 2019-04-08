import React, { PureComponent } from 'react';
import Grid from '@material-ui/core/Grid';

const styles = {
  container: {
    textAlign: 'left',
    background: 'white',
    marginTop: '30px',
  },
  grid: {
    textAlign: 'center',
    paddingBottom: '5px',
    paddingTop: '5px',
    paddingLeft: '5px',
    paddingRight: '5px',
    fontSize: '12px',
    borderRadius: '10px',
    margin: '5px',
  },
  content: {
    fontSize: '14px', 
    padding: '10px', 
    textAlign: 'center'
  },
  image: {
    height: '150px',
    marginLeft: 'auto',
    marginRight: 'auto',
  }
};

export class PriceComponent extends PureComponent {

  render() {
    return (
      <div style={{ paddingTop: '5px', background: 'white' }}>
        <h2 className='title'>Freelance</h2>
        <Grid container justify={'center'} style={styles.container}>
          <Grid item xs={12} md={3} style={styles.grid}>
            <img
              style={styles.image}
              src={"/images/web.png"}
              alt={"web"}
            />
            <h2 className='subtitle'>ウェブ運用</h2>
            <p style={styles.content}>
              複数Webサイトの保守管理経験があります。サイト運営を格安で行うことに関しては自信があり、DjangoやWordpressを使用した本格的なWebアプリを月額約200円で運営しています。サイト管理にお悩みの方は何かお役に立てるかもしれません。
            </p>
            <a
              href={'https://twitter.com/picos_tackt'}
              target="_blank"
              rel="noopener noreferrer"
              className='service-button'
            >
              DMで相談
            </a>
          </Grid>
          <Grid item xs={12} md={3} style={styles.grid}>
            <img
              style={styles.image}
              src={"/images/site.png"}
              alt={"site"}
            />
            <h2 className='subtitle'>サイト制作</h2>
            <p style={styles.content}>
              DjangoやRailsを使ったWebアプリケーションの開発経験があります。Wordpressを使ったメディア運営の経験もあります。要求に応じて最適な方法を提案します。これからWebを活用して行きたい方は何かお役に立てるかもしれません。<br />
            </p>
            <a
              href={'https://twitter.com/picos_tackt'}
              target="_blank"
              rel="noopener noreferrer"
              className='service-button'
            >
              DMで相談
            </a>
          </Grid>
          <Grid item xs={12} md={3} style={styles.grid}>
            <img
              style={styles.image}
              src={"/images/db.png"}
              alt={"db"}
            />
            <h2 className='subtitle'>システム開発</h2>
            <p style={styles.content}>
              LINEボットやスマホアプリ開発の経験があります。アイコンやUIのデザインからシステムの実装・サービスの運営まで全て行うことができます。サービスのアイデアを形にしたい方は何かお役に立てるかもしれません。<br />
            </p>
            <a
              href={'https://twitter.com/picos_tackt'}
              target="_blank"
              rel="noopener noreferrer"
              className='service-button'
            >
              DMで相談
            </a>
          </Grid>
        </Grid>
      </div>
    );
  }
}

