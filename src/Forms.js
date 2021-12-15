import React from 'react'
class Forms extends React.Component{
constructor(){
    super();
    this.state={name:'',course:'',degree:'UG',age:''}
    this.handleChange=this.handleChange.bind(this)
    this.handleChangetwo=this.handleChangetwo.bind(this)
    this.handleChangethree=this.handleChangethree.bind(this)
    
    this.handleChangenew=this.handleChangenew.bind(this)
    
    this.handleSubmit=this.handleSubmit.bind(this)
}
handleChange(event){
this.setState({name:event.target.value})
}
handleChangetwo(event){
    this.setState({course:event.target.value})
}
handleChangethree(event){
    this.setState({age:event.target.value})
}

handleChangenew(event){
    this.setState({degree:event.target.value})
}
handleSubmit(event){
    var cap="";
    if(this.state.degree==="Doctarate"){
        cap="Dr."
    }
    else{
        cap="Mr/Mrs"
    }
    alert(cap+this.state.name+' '+this.state.course+'\nAge :'+this.state.age+'\nEducation '+this.state.degree)
    // if(this.state.course==="PhD"){
    //     alert(cap+this.state.name)
    // }
    if(this.state.age>18){
        alert("Eligible for Vote and Driving Licence")
    }
    else{
        alert(" Not Eligible for Vote and Driving Licence")
    }
    
}
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
    <input type="text" placeholder="Name" onChange={this.handleChange} value={this.state.name}/>
    <select onChange={this.handleChangenew} value={this.state.ctype}>
        <option value="Under Graduate">
            UG
        </option>
        <option value="Post Graduate">
            PG
        </option>
        <option value="Doctarate">
            PhD
        </option>
    </select>
    <input type="text" placeholder="Course" onChange={this.handleChangetwo} value={this.state.course}/>
    <input type="text" placeholder="Age" onChange={this.handleChangethree} value={this.state.age}/>
          
            <input type="submit"/>
            
            </form>
        );
    }
}
export default Forms;