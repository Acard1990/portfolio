import React from 'react';
import '../css/links.css'; 
import { SocialIcon } from 'react-social-icons';

class Links extends React.Component {

  render() {

    return (
          <ul class="bar">
            <ul class="chunk"><SocialIcon url="https://www.linkedin.com/in/scott-cardinali-10b212a6/" /></ul>
            <ul class="chunk"><SocialIcon bgColor="white" url="https://github.com/Acard1990" /></ul>
            <ul class="chunk"><SocialIcon url="https://drive.google.com/file/d/1l33sKLJoP1lW8NJxKUXdz7s0I_0PnhDU/view?usp=sharing" /></ul>
          </ul>
    )
  }
}

export default Links;