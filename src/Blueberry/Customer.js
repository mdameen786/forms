import react from 'react'
import model from './images/ameen.jpeg'
import flag from './images/flag.png'
import graphs from './images/graph.png'

import { HiMail } from 'react-icons/hi';
import { HiPhone } from 'react-icons/hi';
import { GoLocation } from 'react-icons/go';

import { IoIosArrowDown } from 'react-icons/io';
import { BiBell } from 'react-icons/bi';
import {  RiMore2Fill} from 'react-icons/ri';
import { BsCalendar2Date } from 'react-icons/bs';

import { IoSettingsOutline } from 'react-icons/io5';


// import model from './images/model.png'
function Customer(){
    const models=<img src={model} id="model" className="rounded-circle"/>
    const flags=<img src={flag} id="flag" className="rounded-circle"/>
    const modelss=<img src={model} id="models" className="rounded-circle"/>
    const graph=<img src={graphs} id="graphs"/>
    const calender=<BsCalendar2Date id="icons"/>
    const name=<h3>Mohamed Ameen</h3>
    var phone=9360252269;
    let email="ameensm604@gmail.com"
    let doorno="1/325-11"
    let street="Satham Hussain Nagar"
    let landmark="Veeranam"
    let dist="Tenkasi"

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
<div id="profile">
              <div id="prof">
  {modelss }
  <div>
            <h1>Mohamed Ameen </h1>
            <h5><HiMail/>{email}</h5>
            <h5><HiPhone/>{phone}</h5>
            </div>
            </div>
            <div id="Add">
                <h4>Address</h4>
            <div id="Add2">
            <p>{doorno}</p>
            <p>{street}</p>
            <p>{landmark}</p>
            <p>{dist}</p>
            </div>
            </div>
            </div>

        </div>

    );
}
export default Customer;