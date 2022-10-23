import React from 'react';
import '../css/header.css';

class Header extends React.Component {


  render() {

    return (
            <div>
                <h3 className="beginning">Welcome, my name is <span className="name">Scott Cardinali</span>. <br/>
                                            Test Automation Engineer 3<br/>
                                            ||<br/>
                                            SDET 3.<br/>
                                            ||<br/>
                                            Quality Engineer 3</h3>
                                            <br/>
                <p className="summary">I am a former Broadcast Professional with experience in Operations and Engineering. 
                Broadcast Engineering exposed me to some basic scripts which eventually piqued my curiosity and led me to attend the Full Stack Web Development Boot Camp at Georgia Tech. 
                That boot camp along with my never ending obsession to learn new things has led me to become a level 3 SDET thats contributed to test automation within both 
                the SaasOps and Fintech industries. During my time in Quality Engineering, I've pushed the use of new frameworks and practices to help evolve the organizations.</p>
            </div>
    )
  }
}

export default Header;
