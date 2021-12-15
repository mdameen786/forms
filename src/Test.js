import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Kerala from './Kerala';
import Ap from './Ap';
import Collapsible from './Collapsible'
class Test extends Component {
  render() {
const tv=<i class="fa fa-tv"></i>
const info=<li id="navs" ><i class="fa fa-info"></i></li>
const hme=  <li id="navs"><i class="fa fa-home"></i></li>
const srch=<li id="navs" classname="nn"><i class="fa fa-search"></i></li>

    return (
    <Router>
        <div>
          {/* <h2>Welcome to React Router Tutorial</h2> */}
         
          <div id="slide">
         <div id="mb">
                <h2>Live News </h2>
                
            <ul id="lan">
                <Link to={'/about'}><li>English</li></Link>
                <Link to={'/'}><li>Tamil/தமிழ்</li></Link>
                
                <Link to={'/kerala'}><li>Malayalam/മലയാളം</li></Link>
                
                <Link to={'/contact'}><li>Hindi/हिंदी</li></Link>
               <Link to={'/ap'}><li>Telugu/తెలుగు</li></Link>
              
              
            </ul>
            
            <ul id="mnave">

<Collapsible title={info}>
<ul id="lang">
                <Link to={'/about'}><li>English</li></Link>
                <Link to={'/'}><li>தமிழ்</li></Link>
                
                <Link to={'/kerala'}><li>മലയാളം</li></Link>
                
                <Link to={'/contact'}><li>हिंदी</li></Link>
               <Link to={'/ap'}><li>తెలుగు</li></Link>
            
            </ul>

</Collapsible>        
    </ul>
</div>

                 <div id="newsrc">
            <Collapsible title={srch}>
               
                   
     <input type="text" id="searchb" placeholder="Search Your Favorite Channel"/>
              
            </Collapsible>
             </div>
</div>
          <hr />
          <div id="conc">
          <Routes>
            
              <Route exact path='/' element={<Home/>} />
              
              <Route path='/contact' element={<Contact/>} />
              <Route path='/about' element={<About/>} />
              <Route path='/kerala' element={<Kerala/>} />
              <Route path='/ap' element={<Ap/>} />

          </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default Test;