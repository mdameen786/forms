import React from 'react'
import {BsFillEyeSlashFill} from 'react-icons/bs'
import {IoEyeSharp} from 'react-icons/io5'
import model from './images/model.png'
import {RiPencilFill} from 'react-icons/ri'
import {IoIosArrowForward} from 'react-icons/io'
import './form.scss'
import Collapsible from './Collapsible.js'
import {CgMoreVerticalAlt} from 'react-icons/cg'


import {RiWirelessChargingFill} from 'react-icons/ri'
import {BsBellFill} from 'react-icons/bs'
import {MdSecurity} from 'react-icons/md'


function Formnew(){
const eye=<BsFillEyeSlashFill id="eye2"/>;
const hi=<CgMoreVerticalAlt id="more"/>
return(
        <div id="all">
            <div id="cntrl">
            <ul className="list-group">
               
                <li><RiPencilFill id="icon"/>Edit Profile<IoIosArrowForward id="icon"/></li> <hr/>
                <li><BsBellFill id="icon"/>Notification</li> <hr/>
                <li><RiWirelessChargingFill id="icon"/>Choose Plan</li> <hr/>
                <li><MdSecurity id="icon"/>Password&Security</li>
                <hr/>
            </ul>

            </div>
            <div id="vl"></div>
            <div id="content">
                <div id="new">
                <h3>Edit Profile</h3>
                <Collapsible title={hi}>
                <ul className="list-group" id="mlist">
               
               <li><RiPencilFill id="icon"/>Edit Profile<IoIosArrowForward id="icon"/></li> <hr/>
               <li><BsBellFill id="icon"/>Notification</li> <hr/>
               <li><RiWirelessChargingFill id="icon"/>Choose Plan</li> <hr/>
               <li><MdSecurity id="icon"/>Password&Security</li>
               
           </ul>
          
                </Collapsible>
                </div>
                <div>
                    <img src={model} id="prof"/>
                </div>

                <div id="cnt">

                <div id="box">
                    <p>First Name</p>
                    <input type="text" id="name"/>
                </div>
                <div id="box">
                    <p>Last Name</p>
                    <input type="text" id="name"/>
                </div>
                </div>
                <div id="box2">
                    <p>Email</p>
                    <input type="text"/>
                </div><div id="box2">
                    <p>Contact No</p>
                    <input type="text"/>
                </div><div id="box2">
                    <p>Address </p>
                    <input type="text"/>
                </div>
                <div id="cnt">
                <div id="box">
                    <p>City</p>
                    <input type="text"/>
                </div>
                <div id="box">
                    <p>State</p>
                    <input type="text"/>
                </div>
                </div>
                <div id="cnt">
                <div id="box">
                    <p>Zip Code</p>
                    <input type="number"/>
                </div>
                <div id="box">
                    <p>Country</p>
                    <input type="text"/>
                </div>
                </div>
                <div id="box2">
                    <p>Password</p>
                    <div id="pas">
                    <input type="password" id="pass"/>
                    <Collapsible title={eye}>
                    <IoEyeSharp id="eye"/>
                    </Collapsible>
                    </div>
                </div>
                <button id="btn">Save</button>
            </div>
        </div>
    )
}
export default Formnew;