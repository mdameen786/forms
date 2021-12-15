import React from 'react';
import Testn  from './Testn';
function Test2(props){
    const age=29;
    const a=<input type="text"/>
    const b=2;
    let result="";
    if(age<18){
        result="Not Eligible";
    }
    else{
        result="Eligible"
    }
    const add=<p>{a+b}</p>
    const sub=<p>{a-b}</p>
    const mul=<p>{a*b}</p>
    const div=<p>{a/b}</p>
        const nr=<p>{result} You r {age}</p>
    return(
        // <h1>Hello Developer Mr.{props.name} {nr} No 1 is {a} No2 is {b}  Add is {add} Sub is {sub} Mul is {mul} div is {div}</h1>
<div>       <h1>Hello Developer {props.name}</h1>
        <h2>Your Are The {props.degree} Student Age is {props.ages}</h2>
       <Testn/>
        </div>
 
    );
}
export default Test2;