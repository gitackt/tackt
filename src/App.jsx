import React, { Component } from 'react';
import JumbotronComponent from './components/jumbotron.component';
import NavigationComponent from './components/navi.component';
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';
import FooterComponent from './components/footer.component';
import ContentComponent from './components/content.component';
import { PriceComponent } from './components/price.component';
import { Helmet } from "react-helmet";

const styles = {
  background: {
    width: '100%',
  }
}

class LandingComponent extends Component {
  render() {
    return (
      <div style={styles.background}>
        <Helmet
          title={'三橋拓人ポートフォリオサイト フリーランスWebエンジニア'}
          meta={[
            { name: 'twitter:card', content: 'summary_large_image' },
            { property: 'og:image', content: '/images/background.png' },
            { property: 'og:title', content: '三橋拓人ポートフォリオサイト フリーランスWebエンジニア' },
            { property: 'og:url', content: 'https://tackt-m.com' },
          ]}
        />
        <NavigationComponent />
        <JumbotronComponent />
        <PriceComponent />
        <ContentComponent />
        {/* <ProfileComponent /> */}
        <FooterComponent />
      </div>
    );
  }
}

class App extends Component {
  render() {

    return (
      <div style={{ background: '#white' }}>
        <Router>
          <Switch>
            <Route exact={true} path="/" component={LandingComponent} />
            <Route render={() => (<Redirect to={"/"} />)} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
