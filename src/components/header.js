import React from 'react';
import '../css/header.css';

class Header extends React.Component {


  render() {

    return (
            <div>
                <h3 className="beginning">Welcome, my name is <span className="name">Scott Cardinali</span>. <br/>
                                            Test Automation Engineer<br/>
                                            &amp;<br/>
                                            Full Stack Web Developer.</h3>
                                            <br/>
                <h4 className="beginning">Oh, btw... I freaking love testing software applications.</h4>
            </div>
    )
  }
}

export default Header;
