import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import NavigationComponent from '../components/navi.component';
import FooterComponent from '../components/footer.component';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
  },
  card: {
    maxWidth: 345,
    paddingTop: 50,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

class BlogPageComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentWillMount() {
    const url = "https://monetizealchemist.com/wp-json/wp/v2/posts?_embed&filter[posts_per_page]=5%";

    fetch(url, {
      method: 'GET'
    }).then((response) => {
      return response.json()
      }).then((data) => {
      this.setState({ posts: data })
      })
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className={styles.root} style={{ position: 'relative', padding: '30px', height: '100%' }}>
        <NavigationComponent />
        <h2 style={{ color: '#1DD6D1' }}>
         ブログ
        </h2>

        <p>
          人生は運ゲーという元も子もないタイトルのブログを書いてます。プログラミングやお金の知識を紹介する雑記ブログです。

        </p>

        <a
          href="https://monetizealchemist.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <Button
            variant="outlined"
            size="large"
            style={{ color: '#1DD6D1', borderColor: '#1DD6D1', marginTop: '30px' }}
          >
            人生は運ゲー
          </Button>
        </a>

        <br/>
        <br />
        <br />
        <br />

        <Grid container spacing={24} justify={'center'}> 
            {this.state.posts.map(post => {
              return (
                <Grid key={post.id} item xs={12} md={4} style={{ textAlign: 'center', marginBottom: '10px', marginTop: '10px', paddingLeft: '20px', paddingRight: '20px' }}>
                  <Card className={styles.card}>
                    <img
                      style={{ position: 'relative', width: '100%', height: 'auto' }}
                      src={String(post._embedded['wp:featuredmedia'][0].media_details.sizes['slide-thum'].source_url)}
                      alt={String(post.title.rendered)}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="headline" component="h2" style={{ fontSize: '18px' }}>
                        <Button
                          style={{ fontSize: '15px' }}
                          size="small"
                          color="primary"
                          href={String(post.guid.rendered)}
                          target="_blank"
                        >
                        {String(post.title.rendered)}
                        </Button>
                      </Typography>
                      <Typography component="p" style={{ fontSize: '12px' }}>
                        {String(post.excerpt.rendered).replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '')}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              )
            })}
        </Grid>
        <FooterComponent />
      </div>
    );
  }
}

export default BlogPageComponent;
