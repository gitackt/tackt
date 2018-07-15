import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProfileComponent from './components/profile.component';
import JumbotronComponent from './components/jumbotron.component';
import WebsiteComponent from './components/website.component';
import AppComponent from './components/app.component';
import ProjectComponent from './components/project.component';
import BlogComponent from './components/blog.component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <JumbotronComponent />
        <ProfileComponent />
        <WebsiteComponent />
        <AppComponent />
        <ProjectComponent />
        <BlogComponent />
      </div>
    );
  }
}

export default App;
