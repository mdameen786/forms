import react from 'react'
import model from './images/model.png'
import flag from './images/flag.png'
import graphs from './images/graph.png'
import { IoIosArrowDown } from 'react-icons/io';
import { BiBell } from 'react-icons/bi';
import {  RiMore2Fill} from 'react-icons/ri';
import { BsCalendar2Date } from 'react-icons/bs';
import Collapsible from './Collapsible.js'
import { IoSettingsOutline } from 'react-icons/io5';

function Page(){
    const flags=<img src={flag} id="flag" className="rounded-circle"/>
    const models=<img src={model} id="model" className="rounded-circle"/>
    const graph=<img src={graphs} id="graphs"/>
    const calender=<BsCalendar2Date id="icons"/>
    const feedback=<div id="fback"><button>Feedback</button></div>
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
<div id="page">
<h2>Overview</h2>
<div id="allbox">
<div id="box">
<h6>Total Profit</h6>
<div id="amt">
<h1>$95,500</h1>
<h4>+2.55%</h4>
</div>
</div>

<div id="box">
<h6>Total Expense</h6>
<div id="amt">
<h1>$21,500</h1>
<h4>+2.62%</h4>
</div>
</div>

<div id="box">
<h6>New Users</h6>
<div id="amt">
<h1>$1950</h1>
<h4 id="loss">-9.65%</h4>
</div>
</div>

</div>
{graph}
</div>
<div id="dates">
<div id="date">

<h6>01-11-2021</h6>
{calender}
</div>
<div id="date">
<h6>01-10-2021</h6>
{calender}
</div>
</div>
<div id="chat" >
 <div></div>
    <Collapsible title={feedback}>
        <div id="hp">
<div id="fback2">
   <div id="box2">
    <textarea id="cmt" placeholder="Comment Here"/>
    <button id="btn">Send Now</button>
    </div>
    </div></div>
</Collapsible>

</div>
</div>
    );
}
export default Page;