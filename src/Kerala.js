import React, { Component } from 'react';
import './tv.css'
class Kerala extends Component {
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
            <iframe  id="vdo" src="https://www.youtube.com/embed/jjH6v95z3Nw"></iframe>
           <iframe id="vdo" src="https://www.youtube.com/embed/PNR06O9sSio"></iframe>
           <iframe id="vdo" src="https://www.youtube.com/embed/zcrUCvBD16k"></iframe>
           <iframe id="vdo" src="https://www.youtube.com/embed/UUFYCs7JbwA"></iframe>
            </div>
        </div>
</div>
    );
  }
}

export default Kerala;