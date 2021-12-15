import react from 'react'
import { useState } from 'react'
import Ad from './images/ad.png'
import Collapsible from './Collapsible.js'
import fw from './images/watchlogo.png'
import fwc from './images/watchfc.png'
import fwl from './images/watchfl.png'
import fwc2 from './images/watchfc2.png'
import fwsb from './images/smartblack.png'
import fwsw from './images/smartwhite.png'
import fwsa from './images/analogsmart.png'

import model from './images/model.png'
import flag from './images/flag.png'
import graphs from './images/graph.png'
import { IoIosArrowDown } from 'react-icons/io';
import { BiBell } from 'react-icons/bi';
import {  RiMore2Fill} from 'react-icons/ri';
import { BsCalendar2Date } from 'react-icons/bs';

import { IoSettingsOutline } from 'react-icons/io5';


// import model from './images/model.png'
function Product(){
  const [count,setCount]=useState(1);
  function Add(){
    if(count<10){
    setCount(count+1);
  }
  }
  function minis(){
    if(count>1){
    setCount(count-1);
  }
  }
  
    const buy=<button id="order">Order</button>
    const models=<img src={model} id="model" className="rounded-circle"/>
    const flags=<img src={flag} id="flag" className="rounded-circle"/>
    const modelss=<img src={model} id="models" className="rounded-circle"/>
    const graph=<img src={graphs} id="graphs"/>
    const calender=<BsCalendar2Date id="icons"/>
    const fwatch=<img src={fw} id="pngs"/>
    const chainw=<img src={fwc} id="png"/>
    const smartblack=<img src={fwsb} id="png"/>
    const smartwhite=<img src={fwsw} id="png"/>
    const smartcircle=<img src={fwsa} id="png"/>

    return(
        <div id="content">
<div id="menu">
<RiMore2Fill id="flag" />
<div id="menu2" >
<div id="menu3">
<BiBell id="flag"/>
<IoSettingsOutline id="flag"/>
{flags}
{models}
<IoIosArrowDown id="flag"/>
</div>
</div>
</div>
<div id="product">          
<div id="offer">
        {fwatch}
        <div id="blog">
        
        <div id="fline">
        <h1> Watches</h1>

          <ul id="varity">

            <li>Smart Watch</li>
            <li>Analog Watch</li>
            <li>Digital Watch</li>
            
          </ul>

        </div>
        <h3>Offer Zone</h3>
        <h2>Min 20% Offer</h2>
        <img src={Ad} id="ad"/>
        </div>
        </div>
      {/* <div id="spro">
        {chainw}
      </div> */}
      <div id="swatch">
      {/* <div id="swatch2"> */}
      {/* <div id="spro">
        {smartcircle}
        <h3>Active 2</h3>
        <div id="price">
        <p>$20.00</p>
        {buy}
        </div>
        </div>
      <div id="spro">
        {smartblack}
        
        <h3>Smart Watch T55</h3>
        <div id="price">
        <p>$12.00</p>
        {buy}
        </div>
        </div>
      <div id="spro">
        {smartwhite}
        
        <h3>Smart Watch  T500</h3>
        <div id="price">
        <p>$16.00</p>
        {buy}
        </div>
      </div> */}
      {/* </div> */}
      <div id="mwatch">
        <table>
          <tr>
            <td>
            <div id="spro2">
        {smartcircle}
        <h3>Active 2</h3>
        <div id="price">
        <p>$20.00</p>
        <Collapsible title={buy}>
        
   <div id="box3">
     <div id="total">
     <p>Total :{count}</p>
     <div id="btnuse">
     <button onClick={Add}>+</button>
     <button onClick={minis}>-</button>
     </div>
     </div>
     <div id="pay">
      <div>
      <input type="radio" name="UPI" id="rd"/>
      <span>UPI</span>
      </div>
      
      <div>
      <input type="radio" name="UPI" id="rd"/>
      <span>EMI</span>
      </div>
      
      <div>
      <input type="radio" name="UPI" id="rd"/>
      <span>Cash On Delivery</span>
      </div>
      <div>
      <input type="radio" name="UPI" id="rd"/>
      <span>Net Banking</span>
      </div>
      </div>
     <p>Price:150</p>
   <p>Total:{count*150}</p>
      {/* {/* <input type="radio">Cash On Delevery</input>
      <input type="radio">UPI</input> */}
     
    <button id="btn">Pay Now</button>
    </div>

        </Collapsible>
        
        </div>
        </div>
      
            </td>
            <td>
            <div id="spro2">
            {smartblack}
        
        <h3>Smart Watch T55</h3>
        <div id="price">
        <p>$12.00</p>
        {buy}
        </div>
       </div>
      
            </td>
            <td>
            <div id="spro2">
            {smartwhite}
        
        <h3>Smart Watch  T500</h3>
        <div id="price">
        <p>$16.00</p>
        {buy}
        </div>
        </div>
      
            </td>
          </tr>
          <tr>
            <td>
            <div id="spro2">
        {smartcircle}
        <h3>Active 2</h3>
        <div id="price">
        <p>$20.00</p>
        {buy}
        </div>
        </div>
      
            </td>
            <td>
            <div id="spro2">
            {smartblack}
        
        <h3>Smart Watch T55</h3>
        <div id="price">
        <p>$12.00</p>
        {buy}
        </div>
       </div>
      
            </td>
            <td>
            <div id="spro2">
            {smartwhite}
        
        <h3>Smart Watch  T500</h3>
        <div id="price">
        <p>$16.00</p>
        {buy}
        </div>
        </div>
      
            </td>
          </tr>
          <tr>
            <td>
            <div id="spro2">
        {smartcircle}
        <h3>Active 2</h3>
        <div id="price">
        <p>$20.00</p>
        {buy}
        </div>
        </div>
      
            </td>
            <td>
            <div id="spro2">
            {smartblack}
        
        <h3>Smart Watch T55</h3>
        <div id="price">
        <p>$12.00</p>
        {buy}
        </div>
       </div>
      
            </td>
            <td>
            <div id="spro2">
            {smartwhite}
        
        <h3>Smart Watch  T500</h3>
        <div id="price">
        <p>$16.00</p>
        {buy}
        </div>
        </div>
      
            </td>
          </tr>
          <tr>
            <td>
            <div id="spro2">
        {smartcircle}
        <h3>Active 2</h3>
        <div id="price">
        <p>$20.00</p>
        {buy}
        </div>
        </div>
      
            </td>
            <td>
            <div id="spro2">
            {smartblack}
        
        <h3>Smart Watch T55</h3>
        <div id="price">
        <p>$12.00</p>
        {buy}
        </div>
       </div>
      
            </td>
            <td>
            <div id="spro2">
            {smartwhite}
        
        <h3>Smart Watch  T500</h3>
        <div id="price">
        <p>$16.00</p>
        {buy}
        </div>
        </div>
      
            </td>
          </tr>
          
        </table>
      </div>
      </div>
      
        </div>
</div>
    );
}
export default Product;