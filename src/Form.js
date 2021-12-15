import React from 'react'
class Form extends React.Component{
  constructor(){
    super();
    this.state={value:'sslc',name:'',gen:'',fname:''}
    this.handleChange=this.handleChange.bind(this);
    
    this.handleChangetwo=this.handleChangetwo.bind(this);
    this.handleChangethree=this.handleChangethree.bind(this);
    
    this.handleChangefour=this.handleChangefour.bind(this);
    
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleChange(event){
    this.setState({value:event.target.value})
    
  }
  
  handleChangetwo(event){
    this.setState({name:event.target.value})
    
  }
  
  handleChangethree(event){
    this.setState({gen:event.target.value})
    
  }
  
  handleChangefour(event){
    this.setState({fname:event.target.value})
    
  }
  handleSubmit(event){
    alert('welcome'+this.state.name+'\nEDu'+this.state.value+'\nGender'+this.state.gen+'Father Name'+this.state.fname)
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="sslc">
            SSLC
          </option>
          
          <option value="hsc">
            HSC
          </option>
          
          <option value="sslc">
            SSLC
          </option>
        </select>
        {/* <input type="text" value={this.state.value} onChange={this.handleChange}/> */}
        <input type="text" value={this.state.name} onChange={this.handleChangetwo}/>
        <select value={this.state.gen} onChange={this.handleChangethree} >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <input type="text" value={this.state.fname} onChange={this.handleChangefour}/>
        
        <input type="text" value={this.state.fname} onChange={this.handleChangefive}/>
        <input type="submit"/>
      </form>
    )
  }
}
export default Form;