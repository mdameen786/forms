import steve from './images/steve.png'
import apple from './images/apple.png'
import applecto from './images/applecto.png'

import Collapsible from './Collapsible';

function Steve(){

const dob= <p>  Born	Steven Paul Jobs
February 24, 1955
San Francisco, California, U.S.</p>
const rip=<p>
Died	October 5, 2011 (aged 56)
Palo Alto, California, U.S.</p>
const navh=<i class="fa fa-home" id="ic"></i>
const navv=<i class="fa fa-play"id="ic"></i>
const navb=<i class="fa fa-book"id="ic"></i>
const navp=<i class="fa fa-apple" id="ic"></i>
const db=<p id="ctn">Born And Died 
   </p>

const job=<p id="ctn">Career</p>
const product=<p id="ctn">Life</p>

const products=<p id="ctn">Product</p>
return(
      <div >

<div id="name">

  <div id="headings">
  <h2>Blog</h2>
<h2 id="abt">About</h2>
            </div>
           <div id="contnt">
            <h1>Steve Jobs</h1>
           
        </div>

        <img src={steve} id="st"/>
        <div id="bd">
        </div>
        <div id="cntimg">
                    <div id="box" >
          
          <li><Collapsible title={db} >
          <div>
            {dob}
            {rip}
          </div>
          </Collapsible></li>
          <li><Collapsible title={product}>
          <div>
          <div>
         
            <iframe  id="n" src="https://www.youtube.com/embed/U_5AAkfG9DM?autoplay=1&controls=0"></iframe>
          </div>          </div>
          </Collapsible></li>
          
          <li><Collapsible title={job}>
          <div id="job">
        <p>Jobs was born in San Francisco, California, and put up for adoption. He was raised in the San Francisco Bay Area. He attended Reed College in 1972 before dropping out that same year, and traveled through India in 1974 seeking enlightenment and studying Zen Buddhism.

Jobs and Wozniak co-founded Apple in 1976 to sell Wozniak's Apple I personal computer. Together the duo gained fame and wealth a year later with the Apple II, one of the first highly successful mass-produced microcomputers. Jobs saw the commercial potential of the Xerox Alto in 1979, which was mouse-driven and had a graphical user interface (GUI). This led to the development of the unsuccessful Apple Lisa in 1983, followed by the breakthrough Macintosh in 1984, the first mass-produced computer with a GUI. The Macintosh introduced the desktop publishing industry in 1985 with the addition of the Apple LaserWriter, the first laser printer to feature vector graphics. Jobs was forced out of Apple in 1985 after a long power struggle with the company's board and its then-CEO John Sculley. That same year, Jobs took a few of Apple members with him to found NeXT, a computer platform development company that specialized in computers for higher-education and business markets. In addition, he helped to develop the visual effects industry when he funded the computer graphics division of George Lucas's Lucasfilm in 1986. The new company was Pixar, which produced the first 3D computer animated feature film Toy Story (1995), and went on to become a major animation studio, producing over 20 films since then.

Jobs became CEO of Apple in 1997, following his company's acquisition of NeXT. He was largely responsible for helping revive Apple, which had been on the verge of bankruptcy. He worked closely with designer Jony Ive to develop a line of products that had larger cultural ramifications, beginning in 1997 with the "Think different" advertising campaign and leading to the iMac, iTunes, iTunes Store, Apple Store, iPod, iPhone, App Store, and the iPad. In 2001, the original Mac OS was replaced with the completely new Mac OS X (now known as macOS), based on NeXT's NeXTSTEP platform, giving the OS a modern Unix-based foundation for the first time. Jobs was diagnosed with a pancreatic neuroendocrine tumor in 2003. He died of respiratory arrest related to the tumor at age 56 on October 5, 2011.


</p>
        </div>
        
          </Collapsible></li>
          
          
          <li><Collapsible title={products}>
          <div id="prd">
        </div>
        <img src={apple} id="ns"/>
          </Collapsible></li>
          
          </div>
          <div id="profile">
          <img src={applecto} id="ns"/>
        
          <h1>Steve Jobs</h1>

          <h2 id="role">Cheif Excutive Officer</h2>
          <div id="cntrls">
          <li><Collapsible title={navh} >
                  <div id="profile">
          <img src={applecto} id="ns"/>
        
          <h1>Steve Jobs</h1>

          <h2 id="role">Cheif Excutive Officer</h2>
          
          </div>
          </Collapsible></li>
          <li><Collapsible title={navv} >
          <div>
          <iframe  id="n" src="https://www.youtube.com/embed/U_5AAkfG9DM?autoplay=1&controls=0"></iframe>

          </div>
          </Collapsible></li>
          <li><Collapsible title={navp} >
          <div>
          <iframe  id="n" src="https://www.youtube.com/embed/U_5AAkfG9DM?autoplay=1&controls=0"></iframe>

          </div>
          </Collapsible></li>
          <li><Collapsible title={navb} >
         <div id="job">        <p>Jobs was born in San Francisco, California, and put up for adoption. He was raised in the San Francisco Bay Area. He attended Reed College in 1972 before dropping out that same year, and traveled through India in 1974 seeking enlightenment and studying Zen Buddhism.

Jobs and Wozniak co-founded Apple in 1976 to sell Wozniak's Apple I personal computer. Together the duo gained fame and wealth a year later with the Apple II, one of the first highly successful mass-produced microcomputers. Jobs saw the commercial potential of the Xerox Alto in 1979, which was mouse-driven and had a graphical user interface (GUI). This led to the development of the unsuccessful Apple Lisa in 1983, followed by the breakthrough Macintosh in 1984, the first mass-produced computer with a GUI. The Macintosh introduced the desktop publishing industry in 1985 with the addition of the Apple LaserWriter, the first laser printer to feature vector graphics. Jobs was forced out of Apple in 1985 after a long power struggle with the company's board and its then-CEO John Sculley. That same year, Jobs took a few of Apple members with him to found NeXT, a computer platform development company that specialized in computers for higher-education and business markets. In addition, he helped to develop the visual effects industry when he funded the computer graphics division of George Lucas's Lucasfilm in 1986. The new company was Pixar, which produced the first 3D computer animated feature film Toy Story (1995), and went on to become a major animation studio, producing over 20 films since then.

Jobs became CEO of Apple in 1997, following his company's acquisition of NeXT. He was largely responsible for helping revive Apple, which had been on the verge of bankruptcy. He worked closely with designer Jony Ive to develop a line of products that had larger cultural ramifications, beginning in 1997 with the "Think different" advertising campaign and leading to the iMac, iTunes, iTunes Store, Apple Store, iPod, iPhone, App Store, and the iPad. In 2001, the original Mac OS was replaced with the completely new Mac OS X (now known as macOS), based on NeXT's NeXTSTEP platform, giving the OS a modern Unix-based foundation for the first time. Jobs was diagnosed with a pancreatic neuroendocrine tumor in 2003. He died of respiratory arrest related to the tumor at age 56 on October 5, 2011.


</p>
        
</div>
          </Collapsible></li>
          </div>
        </div>
        </div></div>
           <footer>
           <div id="cntrl">{navh}
           {navv}
           {navb}
           {navp}
           </div> 
         
           </footer>
        
</div>
    );
}
export default Steve;