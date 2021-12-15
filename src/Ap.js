import React, { Component } from 'react';

class Ap extends Component {
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
            <iframe  id="vdo" src="https://www.youtube.com/embed/2pr2oR60jyg"></iframe>
           <iframe id="vdo" src="https://www.youtube.com/embed/8McTsOqeueE"></iframe>
           <iframe id="vdo" src="https://www.youtube.com/embed/IKj_cj51_W0"></iframe>
           <iframe id="vdo" src="https://www.youtube.com/embed/II_m28Bm-iM"></iframe>
            </div>
        </div>
</div>
    );
  }
}

export default Ap;