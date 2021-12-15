import React from 'react';
import './news.css'
class Test3 extends React.Component{


    constructor(props){
        super(props);
        this.state={
            role:"Developer",
            name:"Ameen",
            edu:"BCA",
            pay:""
        };
    }
    shouldComponentUpdate() {
        return true;
      }    
    
    // componentDidMount() {
    //     setTimeout(() => {
    //       this.setState({edu: "MCA"})
    //     }, 1000)
    //     setTimeout(() => {
    //         this.setState({edu: "MBA"})
    //       }, 2000)
    //   }
    //  // static getDerivedStateFromProps(props,state){
    //     return{role:props.nrole};
    // }
    changeRole=()=>{
        this.setState({role:"Manager",edu:"MCA",pay:"Paid"});
    }
    changeRole2=()=>{
        this.setState({role:"Developer",edu:"MCA",pay:"Un Paid"});
    }
        render(){
        const a=this.state;
    return(
        <div>
        <p>Hello {a.role} Mr {this.state.name} {this.state.edu}</p>
        <p>Payement Status:{a.pay}</p>
        <button onClick={this.changeRole}>Give Promotion</button>
        <button onClick={this.changeRole2}>WithDraw Promotion</button>
        </div>
    );
}

}
export default Test3;