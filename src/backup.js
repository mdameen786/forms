import React from 'react';
import './styles.css';
class Toggle extends React.Component {
  state = {
    show: true,
  }

	toggle = () => this.setState((currentState) => ({show: !currentState.show}));

  render() {
    return (
      <div className="mass">
			  <button onClick={this.toggle}>click</button>    
        {this.state.show &&   <div className="slide"  >
            <i class="fa fa-strikethrough" id="logo"></i>                      
            <h4>SIGNALS</h4>
            
            <h4>New Category</h4>
            <i class="fa fa-angle-double-left"></i>
            <h4>DASHBOARD</h4>
            
            <h4>Strategies</h4>
            <h4>Indicators</h4>
            
            <h4><i class="fa fa-database"></i>Data</h4>
            <h4><i class="fa fa-cog"></i>Settings</h4>
            
            <h4><i class="fa fa-sign-out"></i>Log Out</h4>
            
            </div>
          }
		  </div>
     );
  }
}
export default Toggle;