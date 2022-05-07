import React from "react";
import './cards2.scss'
import Profile1 from '../nosotros/img/MA2.jpeg'


function Cards2() {
  return (
    <>

<div class="container-cards2">
    
    
<div class="card-wrapper">
      
      <div class="card profile-two">
        
        <div class="card-image profile-img--two">
          <img src={Profile1} alt="profile two"/>
        </div>


        <div class="details jane">
            <h2>Merwin Molina
              <br/>
              <span class="job-title">Venezolano</span>
            </h2>
        </div>
    </div>
 </div>
     
 </div>
  
    </>
  );
}

export default Cards2;
