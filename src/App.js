import logo from './logo.svg';
import './App.css';
import React from 'react';
 function App() {
  const handleSubmit=(e)=> {
    const f=e.target.fName.value;
    
    const l=e.target.lName.value;
    
    const em=e.target.SName.value;
    console.log("Name"+f+"\nPassword"+l+"\nEmail Id"+em);
  }
  
  return (
    <div className="App">
      <div className="Temp">
     
        <h1>Welcome Back!</h1>
        <p>To keep connected with us please login with your personal info</p>

        <button id="btn">SIGN IN</button>
      </div>
      <div className="log">
      
        <h1>Create Account</h1>
        <div className="mas">
          <div className="chl">
            <i id="ic" class="fa fa-facebook"></i>
          </div>
          <div className="chl">
            <i id="ic" class="fa fa-google-plus"></i>
          </div>
          <div className="chl">
            <i id="ic" class="fa fa-linkedin"></i>
          </div>
          <i class="fab fa-linkedin-in"></i>
        </div>

        <div>
          <p>or use your email registration</p>
        </div>
        <div>
        <form onSubmit={handleSubmit}>
          
        <i class="fa fa-user" />
       

      <input name="fName" id="box"placeholder=" Name"/>
    <div>
      <i class="fa fa-lock" />
    
    <input name="lName"  id="box"placeholder=" Email"/>
    </div>
    <div>
    <i class="fa fa-envelope" />

    <input name="SName" id="box" placeholder=" Password"/>
    </div>
    <button id="btn1">Submit</button>
    </form>
    </div>
    {/* <div className="new">
    <form onSubmit={handleSubmit}>
    <div class="bg1">
        <input type="text" id="box" placeholder=" Name" name="fName"  />
        </div>
        <div class="bg2">
            <i class="fa fa-envelope" />

            <input type="text" id="box" placeholder="Email" name="Email" />
          </div>

        <div class="bg3">
          <i class="fa fa-lock" />

          <input type="password" id="box" placeholder="Password" name="Password" />
        </div><div>
          <input type="button" id="btn1" value="Sign Up" />
          <button>Submit</button>
        </div>
        </form></div> */}
        </div>
        
    </div>
  );
}

export default App;
