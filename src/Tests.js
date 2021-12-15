import react from 'react';
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

import './tv.css'
import Collapsible from './Collapsible.js'
function Tests(){
const tv=<i class="fa fa-tv"></i>
const info=<li id="navs"><i class="fa fa-info"></i></li>
const hme=<li id="navs"><i class="fa fa-home"></i></li>
const srch=<li id="navs"><i class="fa fa-search"></i></li>
return(
        <div id="fullui">
            
            <div id="slide">
                <h2>Live News {tv}</h2>
                <Router>
            <ul id="lan">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
            <li><Link to={'/about'} className="nav-link">About</Link></li>
       
            </ul>
            </Router>
            <ul id="mnave">
           
<Collapsible title={info}>
<ul id="lang">
                <li>English</li>
                <li>Tamil/தமிழ்</li>
                <li>Malayalam/മലയാളം</li>
                    
               <li>Hindi/हिंदी</li>
               <li>Telugu/తెలుగు</li>
            </ul>

</Collapsible>
<Collapsible title={srch}>
     <p>develop</p>
            </Collapsible>      
            <Collapsible title={srch}>
               <div id="content" >
                   
     <input type="text" id="searchb" placeholder="Search Your Favorite Channel"/>
               </div>
            </Collapsible>    
        
    </ul>
            </div>

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
           <Routes>
            <Route exact path='/' element={<Home/>} />
              <Route path='/contact' element={<Contact/>} />
              <Route path='/about' element={<About/>} />
              </Routes>
            </div>
        </div>
    );
}
export default Tests;