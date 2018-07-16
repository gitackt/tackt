import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProfileComponent from './components/profile.component';
import JumbotronComponent from './components/jumbotron.component';
import WebsiteComponent from './components/website.component';
import AppComponent from './components/app.component';
import ProjectComponent from './components/project.component';
import BlogComponent from './components/blog.component';
import WorkComponent from './components/work.component';
import FooterComponent from './components/footer.component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <JumbotronComponent />
        <img
          style={{ position: 'relative', width: '100%', height: '40px', top: '-55px', zIndex: '10000' }}
          src="/drop.png"
          alt={'drop'}
        />
        <ProfileComponent />
        <img
          style={{ position: 'relative', width: '100%', height: '40px', top: '-130px'}}
          src="/wave.png"
          alt={'wave'}
        />
        <WebsiteComponent />
        <AppComponent />
        <ProjectComponent />
        <WorkComponent />
        <BlogComponent />
        <FooterComponent />
      </div>
    );
  }
}

export default App;
