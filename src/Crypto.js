import react from 'react';

import './crypto.css'
import graphs from "./images/graphs.png";
class Crypto extends react.Component {
    state = {
      show: true,
    }
  
      toggle = () => this.setState((currentState) => ({show: !currentState.show}));
  
  render(){
     
    const name=<p id="name"><strong>MOHAMED AMEEN</strong></p>
     const mail=<p id="mails">selfieameen@gmail.com</p>
    const date=<p id="tdd">10/09/2021</p>
    const date2=<p id="tdd">10/12/2021</p>
    const dot=<p id="dot">...</p>
     return(
            <div className="mass">

<div className="cm">                  
<button onClick={this.toggle} id="btn"><i class="fa fa-angle-double-left" id="click"></i></button>
        {this.state.show && <div className="slide">
        <div id="stop">
            <i class="fa fa-strikethrough" id="logos"></i>                      
            <h4>SIGNALS</h4>
             </div>
             <div id="sc">
            <h6><i class="fa fa-archive"></i>New Category</h6>
            
            <h6><i class="fa fa-clone"></i>DASHBOARD</h6>
            
            <h6>
            <i class="fa fa-american-sign-language-interpreting"></i>Strategies</h6>
            <h6> <i class="fa fa-file"></i>Indicators</h6>
           
            <h6><i class="fa fa-database"></i>Data</h6>
            <h6><i class="fa fa-cog"></i>Settings</h6>
            
            <h6><i class="fa fa-sign-out"></i>Log Out</h6>
            
            </div></div>
  }
  </div>
            <div className="Main">
                <div id="part1">
                    <div id="nil">
                    <h6 className="heading" id="hd">TOTAL PERFOMANCE</h6>
                <img src={graphs} id="grapsh"/>
                </div>
                <h6 className="heading">MY PROFILE</h6>

                <div className="profile1">
                <i class="fa fa-user" id="usr"></i>
                <div id="txts">
              <b> <h5>Mohamed Ameen   </h5> </b> 
  {mail}</div>
                </div>
                <div className="box2">
                    <h6 className="heading">MY STRAGIES</h6>
                    <table id="boxt1">
                        <tr>
                            <th>NAME</th>
                            <th>LAST MODIFIED</th>
                            
                        </tr>
                        <tr>
                            <td>My First Staragey</td>
                                <td>{date}</td>
                                <td>{dot}</td>
                        </tr>
                        <tr>
                            <td>Cryto bot</td>
                                <td>{date}</td>
                                <td>{dot}</td>
                        </tr>
                        <tr>
                            <td>Super Scalper</td>
                                <td>{date}</td>
                                <td>{dot}</td>
                        </tr>
                        <tr>
                            <td>SMS ETH/BTC</td>
                                <td>{date}</td>
                                <td>{dot}</td>
                        </tr>
                        <tr>
                            <td>Untitled 1</td>
                                <td>{date}</td>
                                <td>{dot}</td>
                        </tr>
                    </table>
                </div>
                </div>
                <div id="part2">
                <div className="box3">
                <h6 className="heading">FOLLOWING STRAGIES</h6>
                    <table id="boxt">
                    <tr>
                        <th>NAME</th>
                        <th>AUTHOR</th>
                        <th>DATE FOLLOWED</th>
                        <th>DATE UNFOLLOWED</th>
                        <th>STARAGY BALANCE</th>
                        <th>PERFAMANCE</th>
                    </tr>
                    <tr>
                        <td>Lucky Trader</td>
                        <td><i class="fa fa-user" id="logo"></i>md Ameen</td>
                      <td>  {date}</td>
                      <td>  {date2}</td>
                       <td>12.0000000USDT</td>
                       <td>20.0000000USDT</td>
                       <td>+73.30</td>
                       
                    </tr>
                    <tr>
                        <td>Cryto bot</td>
                        <td><i class="fa fa-strikethrough" id="logo"></i>                      
               Signals Work</td>
                      <td>  {date}</td>
                      <td>  {date2}</td>
                       <td>12.0000000USDT</td>
                       <td>20.0000000USDT</td>
                       <td>+73.30</td>
                       
                    </tr>
                    <tr>
                        <td>Cryto bot</td>
                        <td><i class="fa fa-strikethrough" id="logo"></i>                      
             Signals Work</td>
                      <td>  {date}</td>
                      <td>  {date2}</td>
                       <td>12.0000000USDT</td>
                       <td>20.0000000USDT</td>
                       <td>+73.30</td>
                       
                    </tr>
                    <tr>
                        <td>Cryto Cow</td>
                        <td><i class="fa fa-user" id="logo"></i> Md Ameen</td>
                      <td>  {date}</td>
                      <td>  {date2}</td>
                       <td>12.0000000USDT</td>
                       <td>20.0000000USDT</td>
                       <td>+73.30</td>
                       
                    </tr>
                    </table>
                </div>
                <div className="box4">
                <h6 className="heading">SIGNALS</h6>
                    <table id="boxt4">
                    <tr>
                        <th>NAME</th>
                        <th>ACTION</th>
                        <th>ORDER TYPE</th>
                        <th>MARKET</th>
                        <th>QUANITY </th>
                        <th>PRICE</th>
                        <th>TIMESTAMP- </th>
                        <th>PERFOMANCE</th>
                    </tr>
                    <tr>
                        <td>Crypto bot</td>
                        <td>Buy</td>
                      <td>  MKT</td>
                      <td>  Polniex LTC/USDT</td>
                       <td>21.091872USDT</td>
                       <td>62.45USDT</td>
                       <td>{date}</td>
                       <td>+7.30</td>
                       
                    </tr>
                    
                    <tr>
                        <td>Crypto bot</td>
                        <td>SELL</td>
                      <td>  MKT</td>
                      <td>  Polniex LTC/USDT</td>
                       <td>21.091872USDT</td>
                       <td>62.45USDT</td>
                       <td>{date}</td>
                       <td>+2.30</td>
                       
                    </tr>
                    </table>
                </div>
            </div>
            </div></div>
        );
    }
}

export default Crypto;