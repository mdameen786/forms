import React, { Component } from 'react';
import './tv.css'
class Home extends Component {
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
            <iframe  id="vdo" src="https://www.youtube.com/embed/kzwbYu1diCY"></iframe>
           <iframe id="vdo" src="https://www.youtube.com/embed/TnPx-965Igk"></iframe>
           <iframe id="vdo" src="https://www.youtube.com/embed/r44SqwmQ3Bo"></iframe>
           <iframe id="vdo" src="https://www.youtube.com/embed/Pp2igBx17Ks"></iframe>
            </div>
          </div>
</div>
    );
  }
}

export default Home;