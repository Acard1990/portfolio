import React from 'react';
import Header from './header';
import Links from './links';
import '../css/app.css';
import TopBar from './TopBar';
import ApiApp from './ApiApp';



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
        <ApiApp/>
        <Links />
        </div>
      );
    }
  }



export default App;
