import React from 'react';
import '../css/TopBar.css';

class TopBar extends React.Component {


  render() {

    return (
            <div class="fakeMenu">
            <div class="fakeButtons fakeClose"></div>
            <div class="fakeButtons fakeMinimize"></div>
            <div class="fakeButtons fakeZoom"></div>
            <div class="fauxFilePath">scottCardinali-Portfolio -- ~zsh</div>
            </div>
    )
  }
}

export default TopBar;
