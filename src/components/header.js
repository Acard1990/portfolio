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
                <p className="summary">I am a former Broadcast Professional with experience in Operations and Engineering. 
                After being a part of Engineering I was exposed to some basic scripts which eventually piqued my curiosity and led me to attend the Full Stack Web Development Boot Camp at Georgia Tech. 
                With that education and my previous knowledge from Broadcast Automations, I stepped into a Quality Engineering role at BetterCloud. 
                That role has helped me grow far more knowledgeable and eventually led me to my latest role as a Test Automation Engineer. 
                I have a passion for all things Automation, Testing, Monitoring, and Reporting.</p>
            </div>
    )
  }
}

export default Header;
