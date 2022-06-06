import React from "react";
import cultura1 from '../home/img/ficu1.jpg'
import cultura2 from '../home/img/ficu2.jpg'
import cultura3 from '../home/img/ficu3.jpg'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../home/home.css'
import '../contacto/contacto.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


import Logo from "../navigation/logo2.png";
import { Link as LinkRouter } from "react-router-dom";


function Carousel4() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <div className="carousel-home-p">
  
        <div className="carousel-gradiente"> </div>

        
        <h6 className="animate__animated animate__fadeInDown titulo-contacto">CONTACTO</h6>
        <h6 className="animate__animated animate__fadeInDown subt-contacto">Forma parte de nuestro equipo</h6>
        <KeyboardArrowDownIcon className="animate__animated animate__fadeInDown arrow-info" />

     
{/*        <LinkRouter to="/eventos">
          <button type="button" className="animate__animated animate__fadeInDown btn btn-header ">
            Próximos eventos
          </button>
  </LinkRouter>*/}

      <Carousel
        responsive={responsive}
        draggable={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        transitionDuration={2000}
        arrows={false}

      >
        <div>
          {" "}
          <img src={cultura1} alt='cultura' className="d-block w-100" />

        </div>
        <div>
          {" "}
          <img src={cultura2} alt='cultura' className="d-block w-100" />
        </div>
        <div>
          {" "}
          <img src={cultura3} alt='cultura' className="d-block w-100" />
        </div>
      </Carousel>
      
      </div>
    </>
  );
}

export default Carousel4;
