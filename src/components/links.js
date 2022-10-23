import React from 'react';
import '../css/links.css'; 


class Links extends React.Component {

  render() {

    return (
          <ul class="bar">
            <ul class="chunk"><a href="https://www.linkedin.com/in/scott-cardinali-10b212a6/">Linkedin</a></ul>
            <ul class="chunk"><a href="https://github.com/Acard1990">Github</a></ul>
            {/* <ul class="chunk"><a href="https://suite32.herokuapp.com/signup">SUITE32</a></ul>
            <ul class="chunk"><a href="http://the-taskie-app.herokuapp.com/">Taskie</a></ul>
            <ul class="chunk"><a href="https://acard1990.github.io/Clickity-react-app/">Clickity</a></ul>
            <ul class="chunk"><a href="https://codepen.io/acard1990/">Code Pen</a></ul> */}
          </ul>
    )
  }
}

export default Links;