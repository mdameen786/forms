import React, { Component } from 'react';
import './tv.css'

class Contact extends Component {
  render() {
    return (
        <div>
          <div id="content">
<div id="tt">
    <ul id="nave">
    <input type="text" id="searchb" placeholder="Search Your Favorite Channel"/>
        <li id="navs">Home</li>
        
        <li id="navs">About</li>
        
    </ul>
</div>

          <div id="News">
            <iframe  id="vdo" src="https://www.youtube.com/embed/9fs7L2rNUEk"></iframe>
           <iframe id="vdo" src="https://www.youtube.com/embed/odmHZVWb7ws"></iframe>
           <iframe id="vdo" src="https://www.youtube.com/embed/Cy_6-_XUW-c"></iframe>
           <iframe id="vdo" src="https://www.youtube.com/embed/uRZYoO0NUe0"></iframe>
            </div>
        </div>
</div>
    );
  }
}

export default Contact;