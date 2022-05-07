import React from "react";
import "./nosotros.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "animate.css";
import Cards2 from '../cards/Cards2'



function Nosotros() {
  return (
    <>
      {/*********** Banner **************/}

      <div className="banner-image-nosotros w-100 vh-100 d-flex justify-content-center align-items-center">
        <div className="content-header">
          <h1 className="animate__animated animate__fadeInDown tituloheader-nosotros">
            NOSOTROS
          </h1>
          <h3 className="animate__animated animate__fadeInDown subtituloheader"></h3>
          <KeyboardArrowDownIcon sx={{ color: "#ffffff", width: "5vw" }} />
        </div>
      </div>


      {/*********** Banner2 **************/}





      {/*********** Cards **************/}

    <div className="cards">

    <div className="container-profile">
      <div className="profile-photo">
      <h3 className="profile-title">Merwin Molina</h3>
        <h4 className="profile-subtitle">Secretario</h4>
        <p className="profile-p">Venezolano</p>
      </div>
    </div>

    <div className="container-profile">
      <div className="profile-photo">
      <h3 className="profile-title">Merwin Molina</h3>
        <h4 className="profile-subtitle">Secretario</h4>
        <p className="profile-p">Venezolano</p>
      </div>
    </div>

    <div className="container-profile">
      <div className="profile-photo">
      <h3 className="profile-title">Merwin Molina</h3>
        <h4 className="profile-subtitle">Secretario</h4>
        <p className="profile-p">Venezolano</p>
      </div>
    </div>

    



    </div>




    </>
  );
}

export default Nosotros;
