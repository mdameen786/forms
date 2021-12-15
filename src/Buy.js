import react from 'react'
import fw from './images/watchlogo.png'
import fwc from './images/watchfc.png'
import fwl from './images/watchfl.png'
import fwc2 from './images/watchfc2.png'
import fwsb from './images/smartblack.png'
import fwsw from './images/smartwhite.png'
import fwsa from './images/analogsmart.png'

function Buy(){
    
    return(
<div>
<img src={fwsb} id="mwatch"/>
<div>
    <h1>T5500</h1>
    <p>Price:$12</p>
</div>
</div>
    );
}
export default Buy;