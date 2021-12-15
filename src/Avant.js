import react from 'react';
import women from './images/illustration-woman-online-desktop.svg';

import womenmble from './images/illustration-woman-online-mobile.svg';
import box from './images/illustration-box-desktop.svg';
import Collapsible from './Collapsible';
class Avant extends react.Component {
        constructor(props){
                super(props);
        }
  render(){
     return(           
        <div>



<img src={womenmble} id="wnmb"/>        
        <div id="box">
        <div id="pht">
        <img src={women} id="wn"/>
        
        <img src={box} id="bx"/>
        </div>
        <ul>
        <h3>FAQ</h3>
        {/* <li>How Many team Members can invite?<i onClick={this.toggle} class="fa fa-chevron-down" id="btn"></i>
        {this.state.show && <p>You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.</p>}
</li>
        <hr/>
            <li>What is the maximum file upload size<i onClick={this.toggle} class="fa fa-chevron-down" id="btn"></i>
        {this.state.show && <p>You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.</p>}
</li>
        <hr/>
        <li>How Many team Members can invite?<i onClick={this.toggle} class="fa fa-chevron-down" id="btn"></i>
        {this.state.show&& <p>You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.</p>}
</li>
        <hr/>
           <li>What is the maximum file upload size<i onClick={this.toggle} class="fa fa-chevron-down" id="btn"></i>
        {this.state.show && <p>You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.</p>}
</li>
        <hr/>
          */}
          <li>
          <i class="fa fa-chevron-down"></i><Collapsible title="How Many team Members can invite?">
          <div>
          <p>You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.</p>
          
          </div>
          </Collapsible>
          <hr/>
          </li>
          <li>
          <i class="fa fa-chevron-down"></i><Collapsible title="What is the maximum file upload size?">
          <div>
                  <p>No more than 2GB. All files in your account must fit your allotted storage space.</p>
          </div>
          </Collapsible>
          <hr/>
          </li>
          
          <li>
          <i class="fa fa-chevron-down"></i><Collapsible title="How do I reset my password?">
          <div>
          <p> Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.</p>
          </div>
          </Collapsible><hr/></li>
          <li>
          <i class="fa fa-chevron-down"></i><Collapsible title="Can I cancel my subscription?">
          <p>Yes! Send us a message and we’ll process your request no questions asked.</p>
          <div>
          </div>
          </Collapsible><hr/></li>
          <li>
          <i class="fa fa-chevron-down"></i><Collapsible title="Do you provide additional support?">
          <div>
         <p> Chat and email support is available 24/7. Phone lines are open during normal business hours.</p>
          </div>
          </Collapsible><hr/></li>
          
        </ul>
        </div>
    
        </div>
    );
}}
export default Avant;