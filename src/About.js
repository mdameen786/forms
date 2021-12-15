import React, { Component } from 'react';

class About extends Component {
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
            <iframe  id="vdo" src="https://www.youtube.com/embed/CQDj5mzDfFA"></iframe>
           <iframe id="vdo" src="https://www.youtube.com/embed/WB-y7_ymPJ4"></iframe>
           <iframe id="vdo" src="https://www.youtube.com/embed/xtoOK86mW8Y"></iframe>
           <iframe id="vdo" src="https://www.youtube.com/embed/lyeyoqwXm5o"></iframe>
            </div>
                  </div>
</div>
    );
  }
}

export default About;