import React, {useEffect} from "react";
import "./nosotros.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Carousel2 from "../carousel/Carousel2";
import "animate.css";




function Nosotros() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/*********** Banner **************/}

<Carousel2/>
<div style={{height:"10vh"}}></div>

{/*<div className="gradient-nosotros w-100 h-100">
      <div className="banner-image-nosotros w-100 h-100 d-flex justify-content-center align-items-center">
        <div className="content-header">
          <h1 className="animate__animated animate__fadeInDown tituloheader-nosotros">
            NOSOTROS
          </h1>
          <h3 className="animate__animated animate__fadeInDown subtituloheader"></h3>
          <KeyboardArrowDownIcon sx={{ color: "#ffffff", width: "5vw" }} />
        </div>
      </div>
  </div>*/}




      {/*********** Banner2 **************/}





      {/*********** Cards **************/}

      
      <h3 className="t-icono">Miembros Fundadores</h3>
          <p className="p-icono">Aquí nuestros miembros fundadores</p>

    <div className="cards">

    <div className="container-profile">
      <div className="profile-photo">
      <h3 className="profile-title">Lia Valeri</h3>
        <h4 className="profile-subtitle">Fundadora</h4>
        {/*<p className="profile-p">Venezolano</p>*/}
      </div>
    </div>

    <div className="container-profile">
      <div className="profile-photo2">
      <h3 className="profile-title">Eduardo Ciancia</h3>
        <h4 className="profile-subtitle">Tesorero</h4>
        {/*<p className="profile-p">Venezolano</p>*/}
      </div>
    </div>

    <div className="container-profile">
      <div className="profile-photo3">
      <h3 className="profile-title">Merwin Molina</h3>
        <h4 className="profile-subtitle">Secretario</h4>
        {/*<p className="profile-p">Venezolano</p>*/}
      </div>
    </div>
    </div>

    <h3 className="t-icono">Consejo consultor</h3>
          <p className="p-icono">Los miembros del consejo consultor</p>


          <div className="cards">

<div className="container-profile">
  <div className="profile-photo4">
  <h3 className="profile-title">Angélica</h3>
    <h4 className="profile-subtitle">Consejo consultor</h4>
    {/*<p className="profile-p">Venezolano</p>*/}
  </div>
</div>

<div className="container-profile">
  <div className="profile-photo5">
  <h3 className="profile-title">Arelis</h3>
    <h4 className="profile-subtitle">Consejo consultor</h4>
    {/*<p className="profile-p">Venezolano</p>*/}
  </div>
</div>

<div className="container-profile">
  <div className="profile-photo6">
  <h3 className="profile-title">Mónica</h3>
    <h4 className="profile-subtitle">Consejo consultor</h4>
    {/*<p className="profile-p">Venezolano</p>*/}
  </div>
</div>

<div className="container-profile">
  <div className="profile-photo7">
  <h3 className="profile-title">Nelson</h3>
    <h4 className="profile-subtitle">Consejo consultor</h4>
    {/*<p className="profile-p">Venezolano</p>*/}
  </div>
</div>



</div>


    




    </>
  );
}

export default Nosotros;
