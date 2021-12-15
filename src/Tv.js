import react from 'react';
import Steve from './Steve.js';
import './tv.css'
import Collapsible from './Collapsible.js'
function Tv(){
const tv=<i class="fa fa-tv"></i>
const info=        <li id="navs"><i class="fa fa-info"></i></li>
const hme=  <li id="navs"><i class="fa fa-home"></i></li>
const srch=
<li id="navs"><i class="fa fa-search"></i></li>
return(
        <div id="fullui">
            
            <div id="slide">
                <h2>Live News {tv}</h2>
                
            <ul id="lan">
                <li>English</li>
                <li>Tamil/தமிழ்</li>
                <li>Malayalam/മലയാളം</li>
                    
               <li>Hindi/हिंदी</li>
               <li>Telugu/తెలుగు</li>
            </ul>
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
            <input type="text" id="searchb" placeholder="Search Your Favorite Channel"/>
                     
            </Collapsible>    
            <Collapsible title={hme}>
               <div id="content" style={{display:"none"}}>
                   
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
            </div>
        </div>
    );
}
export default Tv;