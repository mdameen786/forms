import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Orders from './Orders.js'
import Customer  from './Customer.js'
import Wishlist  from './Wishlist.js'

import './berry.scss'
import Charts from './Charts.js'
import Page from './Page.js'
import Product from './Product.js'

import { MdSpaceDashboard } from 'react-icons/md';
import { BiBell } from 'react-icons/bi';

import graph from './images/graph.png'

import map from './images/map.png'
import { IoIosArrowDown } from 'react-icons/io';
import { IoSettingsOutline } from 'react-icons/io5';
import { IoIosAnalytics } from 'react-icons/io';
import {  RiMore2Fill} from 'react-icons/ri';

import { RiHome5Line } from 'react-icons/ri';
import { BsCalendar2Date } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';

import { IoStatsChart } from 'react-icons/io5';
import { MdProductionQuantityLimits } from 'react-icons/md';
import logob from './images/blueberry.png'
import model from './images/model.png'
import flag from './images/flag.png'

import { FaLock } from 'react-icons/fa';
import { BsPeopleFill } from 'react-icons/bs';
import { BsBoxSeam } from 'react-icons/bs';
// import {logob} from './images/steve.png';
import { BsTag } from 'react-icons/bs';
function Blueberry(){
    const head=<div id="head"><img src={logob} className="rounded" id="new"/><p>CRM</p></div>
    const flags=<img src={flag} id="flag" className="rounded-circle"/>
    const models=<img src={model} id="model" className="rounded-circle"/>
    const graphs=<img src={graph} id="graph"/>
    const maps=<img src={map}/>
    
    const home=<i className="fa fa-home"></i>
    const contact=<i className="fa fa-contact"></i>
   const calender=<BsCalendar2Date id="icons"/>
    
    const people=<i className="fa fa-people"></i>

return(
    <div id="ui">
        <Router>
<div id="slide">

    <ul className="list-group">
{head}
        <Link to={'/Page'}><li><RiHome5Line id="icons"/>Dashboard</li></Link>
        <li id="titles">Management</li>
        <li><IoIosAnalytics id="icons"/>Analytics</li>
        <Link to={'/Customer'}><li><BsPeopleFill id="icons"/>Customer</li></Link>
        <Link to={'/Orders'}><li><MdProductionQuantityLimits id="icons"/>Order</li></Link>
    
        <Link to={'/Product'}><li><BsTag id="icons"/>Products</li></Link>
        
        <li ><MdSpaceDashboard id="icons"/>Invoices</li>
        <li id="titles">Pages</li>
        
        <li><FaLock id="icons"/> Authentication</li>
        <li><BsCalendar2Date id="icons"/>Calendor</li>
        <li id="titles">Components</li>
        <Link to={'/'}><li><IoStatsChart id="icons"/>Charts</li></Link>
        <li><BsBoxSeam id="icons"/>UI Elements</li>
        

    </ul>
</div>
<footer>
<div id="mcontrol">
    <ul  className="list-group" >
    <Link to={'/Product'}><li><RiHome5Line id="icons"/></li></Link>
    <Link to={'/Wishlist'}><li><AiFillHeart id="icons"/></li></Link>
    
    <Link to={'/Orders'}><li><MdProductionQuantityLimits id="icons"/></li></Link>
    
    <Link to={'/Customer'}><li><BsPeopleFill id="icons"/></li></Link>
        
    </ul>

</div>
</footer>
<Routes>
    <Route  path='/' element={<Charts/>}/>
    <Route  path='/Product' element={<Product/>}/>
    <Route  path='/Customer' element={<Customer/>}/>
    <Route  path='/Orders' element={<Orders/>}/>
    <Route exact path='/Page' element={<Page/>}/>
    <Route  path='/Wishlist' element={<Wishlist/>}/>
</Routes>
</Router>
</div>

);
}
export default Blueberry;