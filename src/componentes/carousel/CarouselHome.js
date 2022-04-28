import React from "react";
import cultura1 from './img/cultura (1).jpg'
import cultura2 from './img/cultura (2).jpg'
import cultura3 from './img/cultura (3).jpg'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../home/home.css'


function CarouselHome() {

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

<Carousel
        responsive={responsive}
        draggable={true}
        infinite={true}
        autoPlaySpeed={1000}
        transitionDuration={1000}
      >
        <div>
          {" "}
          <img src={cultura1} alt='cultura' className="d-block w-100"/>
        </div>
        <div>
          {" "}
          <img src={cultura2} alt='cultura' className="d-block w-100"/>
        </div>
        <div>
          {" "}
          <img src={cultura3} alt='cultura' className="d-block w-100"/>
        </div>
      </Carousel>

    </>
  );
}

export default CarouselHome;
