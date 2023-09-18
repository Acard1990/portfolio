import React from 'react';
import '../css/app.css';

class Header extends React.Component {


  render() {

    return (
      <div class="fakeScreen">
      <p class="p line1">Welcome,<span class="cursor1">_</span></p>
      <p class="p line2">My name is Scott Cardinali,<span class="cursor2">_</span></p>
      <p class="p line3">and I'm a Senior SDET<span class="cursor3">_</span></p>
      <p class="p line4">Checkout my links below<span class="cursor4">_</span></p>
      <p class="p line5"><span class="cursor5">{'>'}_</span></p>
      </div>
    )
  }
}

export default Header;
