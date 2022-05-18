import React, {useEffect} from "react";
import "./nosotros.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "animate.css";




function Nosotros() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/*********** Banner **************/}

      <div className="gradient-nosotros w-100 h-100">
      <div className="banner-image-nosotros w-100 h-100 d-flex justify-content-center align-items-center">
        <div className="content-header">
          <h1 className="animate__animated animate__fadeInDown tituloheader-nosotros">
            NOSOTROS
          </h1>
          <h3 className="animate__animated animate__fadeInDown subtituloheader"></h3>
          <KeyboardArrowDownIcon sx={{ color: "#ffffff", width: "5vw" }} />
        </div>
      </div>
      </div>




      {/*********** Banner2 **************/}





      {/*********** Cards **************/}

    <div className="cards">

    <div className="container-profile">
      <div className="profile-photo">
      <h3 className="profile-title">Lia Valeri</h3>
        <h4 className="profile-subtitle">Fundadora</h4>
        <p className="profile-p">Venezolano</p>
      </div>
    </div>

    <div className="container-profile">
      <div className="profile-photo2">
      <h3 className="profile-title">Eduardo Ciancia</h3>
        <h4 className="profile-subtitle">Tesorero</h4>
        <p className="profile-p">Venezolano</p>
      </div>
    </div>

    <div className="container-profile">
      <div className="profile-photo3">
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
