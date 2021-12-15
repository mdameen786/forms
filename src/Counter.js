import { useState } from "react";
import React from 'react';
function Counter(){
    const [count,SetCount]=useState(1)
    function add(){
        SetCount(count+1)
    }
    function minis(){
        SetCount(count-1)
    }
    return(
        <div>
            <p>Orders:{count}</p>
        </div>
    );
}
export default Counter;