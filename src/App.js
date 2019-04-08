import React, { Component } from 'react';
import FooterComponent from './components/core/footer.component';
import NavigationComponent from './components/core/navi.component';
import ServiceComponent from './components/main/service.component';
import GalleryComponent from './components/main/gallery.component';
import JumbotronSmallComponent from './components/main/jumbotron.small.component';
import { ProfileComponent } from './components/main/profile.component';
import { PriceComponent } from './components/main/price.component';
import JumbotronComponent from './components/slides/jumbotron.component';
import { 
  Name1Component, 
  Name2Component, 
  Name3Component, 
  Name4Component 
} from './components/slides/name.component';
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';
import ReactFullpage from '@fullpage/react-fullpage';

const styles = {
  background: {
    width: '100%',
    height: '100%',
  }
}

class SlideComponent extends Component {
  render() {
    return (
      <ReactFullpage
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <JumbotronComponent　onChange={this.props.changeScreen} />
                <div className='down-button' onClick={() => fullpageApi.moveSectionDown()}>
                  <img
                    style={{ width: '70px' }}
                    src={'/images/arrow.png'}
                    alt={'arrow'}
                  />
                </div>
              </div>
              <div className="section">
                <Name1Component />
                <div className='down-button' onClick={() => fullpageApi.moveSectionDown()}>
                  <img
                    style={{ width: '70px' }}
                    src={'/images/arrow.png'}
                    alt={'arrow'}
                  />
                </div>
              </div>
              <div className="section">
                <Name2Component />
                <div className='down-button' onClick={() => fullpageApi.moveSectionDown()}>
                  <img
                    style={{ width: '70px' }}
                    src={'/images/arrow.png'}
                    alt={'arrow'}
                  />
                </div>
              </div>
              <div className="section">
                <Name3Component />
                <div className='down-button' onClick={() => fullpageApi.moveSectionDown()}>
                  <img
                    style={{ width: '70px' }}
                    src={'/images/arrow.png'}
                    alt={'arrow'}
                  />
                </div>
              </div>
              <div className="section">
                <Name4Component onChange={this.props.changeScreen}/>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    )
  }
}

class MainComponent extends Component {

  render() {
    return (
      <div>
        <NavigationComponent onChange={this.props.changeScreen} />
        <JumbotronSmallComponent />
        <div className='flex-container-background'>
          <ProfileComponent />
          <PriceComponent />
          <ServiceComponent />
          <GalleryComponent />
          <FooterComponent />
        </div>
      </div>
    )
  }
}

class LandingComponent extends Component {

  state = {
    screen: true,
  }

  render() {
    return (
      <div style={styles.background}>
        {this.state.screen ? (
          <SlideComponent changeScreen={() => this.setState({ screen: !this.state.screen })} /> 
         ) : (
          <MainComponent changeScreen={() => this.setState({ screen: !this.state.screen })} />
        )}
      </div>
    );
  }
}

class App extends Component {
  render() {

    return (
      <div>
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
