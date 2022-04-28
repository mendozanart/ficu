import React from "react";
import './perfiles.scss'


function Perfiles() {
  return (
    <>


<div class="container">
    
    
<div class="card-wrapper">
      
      <div class="card profile-two">
        
        <div class="card-image profile-img--two">
          <img src="https://image.ibb.co/c9rY6J/profile02.jpg" alt="profile two"/>
        </div>

        <ul class="social-icons">
          <li>
            <a href="">
              <i class="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i class="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i class="fab fa-dribbble"></i>
            </a>
          </li>
        </ul>

        <div class="details jane">
            <h2>Jane Doe
              <br/>
              <span class="job-title">UI Designer</span>
            </h2>
        </div>
    </div>
 </div>
     
 </div>


  
    </>
  );
}

export default Perfiles;