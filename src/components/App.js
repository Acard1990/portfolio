import React from 'react';
import Header from './header';
import { Routes } from 'react-router-dom';
import Links from './links';
import '../css/app.css';
import AboutMe from './AboutMe';
import TopBar from './TopBar';

class App extends React.Component {

            componentDidMount() {
              console.log("document-height",document.documentElement.offsetHeight);
              console.log("document-width",document.documentElement.offsetWidth);
            }

      render() {

      return (
        <div>
        <div class="fakeScreen">
          <TopBar />
          <Header />
        </div>
        <Links />
        </div>
      );
    }
  }



export default App;
