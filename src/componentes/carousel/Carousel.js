import React from "react";
import '../carousel/carousel.scss'
import '../home/home.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import 'animate.css';



function Carousel() {



  return (
    <>


<div class="slideShow">
  <div class="slide3">
  </div>

  <div class="slide2">
  </div>
  
  <div class="slide1">
  </div>
  
  <div class="banner">


  <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
        <div className="content-header">
            <h1 className="animate__animated animate__fadeInDown tituloheader">Somos Migrantes</h1>
            <h3 className="animate__animated animate__fadeInDown subtituloheader">Somos FICU</h3>
            <KeyboardArrowDownIcon sx={{ color: "#ffffff", width:"20vw", marginTop:"80vh", marginLeft:"40vw" }} />
        </div>
      </div>


  </div>
</div>



    </>
  );
}

export default Carousel;
