import sun from "./images/sund.png"
import rain from "./images/raon.png"
import cld from "./images/clds.png"
import cs from "./images/cloudsun.png"
import icons from "./images/whethericon.png"
import bg from "./images/whether.png"
import ncld from "./images/cldss.png"

function Whether(){
   
  const head=<h3 id="hd">Weather
  
  </h3>
  const greet=<h2 id="hd">Good Morning</h2>
  const date=<p id="hdp">Today Climate</p>
return(
<div className="mas">
  <div className="ic">
<img src={icons} id="iicons" />
            
{head}
</div>
<div id="one">
<div id="wh">
            <h3>London uk</h3>
            <img src={ncld} id="nw"/>
            
           <p>10°C</p> <p>Cloud</p>
           
        </div>
            
        
          <div id="wh">
            <h3>Chennai</h3>
            <img src={cs} id="nw"/>
            
           <p>20°C</p> <p>Warm</p>
        </div>
        <div id="wh">
            <h3>New York</h3>
            <img src={rain} id="nw"/>
           <p>5°C</p> <p>Winter</p>
        </div>
        
          <div id="wh">
            <h3>Bangalore</h3>
            <img src={sun} id="nw"/>
           <p>26°C</p> <p>Warm</p>
           </div>
           </div>
            
<div id="two">
        <div id="wh">
            <h3>Mumbai</h3>
            <img src={ncld} id="nw"/>
            
           <p>15°C</p> <p>Cloud</p>
        </div>
        
          <div id="wh">
            <h3>Abu Dhabi</h3>
            <img src={sun} id="nw"/>
       
           <p>38°C</p> <p>Warm</p>
        </div>
        <div id="wh">
            <h3>Colombo</h3>
            <img src={ncld} id="nw"/>
            
           <p>5°C</p> <p>Winter</p>
        </div>
        
          <div id="wh">
            <h3>Los Angels</h3>
            <img src={rain} id="nw"/>
       
           <p>6°C</p>
            <p>Rain</p>
           </div>
           </div>
           
           </div>
  
    );
}
export default Whether;