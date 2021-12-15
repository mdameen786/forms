import react from 'react'
import model from './images/model.png'
import flag from './images/flag.png'
import graphs from './images/graph.png'
import { IoIosArrowDown } from 'react-icons/io';
import { BiBell } from 'react-icons/bi';
import {  RiMore2Fill} from 'react-icons/ri';
import { BsCalendar2Date } from 'react-icons/bs';

import { IoSettingsOutline } from 'react-icons/io5';

function Wishlist(){
    const models=<img src={model} id="model" className="rounded-circle"/>
    const flags=<img src={flag} id="flag" className="rounded-circle"/>
    const modelss=<img src={model} id="models" className="rounded-circle"/>
    const graph=<img src={graphs} id="graphs"/>
    const calender=<BsCalendar2Date id="icons"/>

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
<div id="wishlist">
    <h2>No Wishlists are Found</h2>
</div>
        </div>

    );
    
}
export default Wishlist;