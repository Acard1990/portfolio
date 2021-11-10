import React from 'react';
import Header from './header';
import Spinner from './spinner';
import Links from './links';
import '../css/app.css';


class App extends React.Component {

            componentDidMount() {
              console.log("document-height",document.documentElement.offsetHeight);
              console.log("document-width",document.documentElement.offsetWidth);
            }

      render() {

      return (
        <div>
            <Spinner />
            <Header />
            <Links />
        </div>
      );
    }
  }



export default App;
