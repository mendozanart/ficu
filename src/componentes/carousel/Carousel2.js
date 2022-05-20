import React from "react";
import '../carousel/carousel.scss'
import '../home/home.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import 'animate.css';




function Carousel2() {



  return (
    <>


<div class="slideShow">
  <div class="slide4">
  </div>

  <div class="slide4">
  </div>
  
  <div class="slide4">
  </div>
  

  
  <div class="banner">


  <div className="gradient w-100 vh-100">
        <div className="content-header">
            <h6 className="animate__animated animate__fadeInDown tituloheader"></h6>
            <h6 className="animate__animated animate__fadeInDown tituloheadernosotros">NOSOTROS</h6>
            <h6 className="animate__animated animate__fadeInDown subtituloheadernosotros">Conoce la familia FICU</h6>
            <KeyboardArrowDownIcon className="animate__animated animate__fadeInDown" sx={{ color: "#ffffff", width:"20vw", marginTop:"90vh", marginLeft:"40vw" }} />
        </div>
      </div>



  </div>
</div>



    </>
  );
}

export default Carousel2;
