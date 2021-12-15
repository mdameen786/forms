import React from "react";
import ReactDom from "react-dom";
import images from "./images/new.jpeg";

import imagess from "./images/fb.png";

import imagesss from "./images/insta.png";
import imagessss from "./images/linkd.png";
import imagecom from "./images/hnh.png";
import imagemail from "./images/mail.png";
import imagephone from "./images/phone.png";
import imagephones from "./images/logo.png";

function Template(){
    return(

        <div className="Mas">
            
           <img src={imagephones} alt="pro" id="pro3" />
           <div className="bg">
            
           <i class="fa fa-times" id="ic"></i>
           </div>
           <div className="boxprf">
           <div className="profile">
               
            <img src={images} alt="pro" id="pro"/>
               <h3>MOHAMED AMEEN</h3>
               <h4>Full Stack Developer</h4>
           <div className="social" >
               <img src={imagess} alt="pro" id="pro1"/>
               
            
               <img src={imagesss} alt="pro" id="pro1"/>
               
               <img src={imagessss} alt="pro" id="pro1"/>
           
              </div>
              <div id="n">
               <p>facebook</p>
               
            <p>Instagram</p>
              <p>LinkdIn</p>
              </div>
              
            </div></div>
            <div className="content">
            <img src={imagecom} alt="pro" id="proc"/>
           
           </div>
            <div className="child">
            <div>
                
            <img src={imagephone} alt="pro" id="pro2"/>
            <img src={imagemail} alt="pro" id="pros2"/>
           <div className="de">
            <p>9654789522</p>
            <p>robins@gmail.com</p>
            </div>
            </div> 
            
            </div>
                {/* <div className="profile">
                
                <i class="fa fa-facebook-square" id="icon"></i>
                <p>facebook</p>
                <i class="fa fa-instagram" id="icon"></i>
                
                <p>instagram</p>
                <i class="fa fa-linkedin-in" id="icon"></i>
                
                <h3>TONY ROBBINS</h3>
    
                <h4>Full Stack Developer</h4>
                <p>linked in</p>

            </div> */}
            <div className="footer">
                <button>Share Me</button>
            </div>
        </div>
    );
}
export default Template;