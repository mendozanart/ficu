import React, {useEffect} from "react";
import "./contacto.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "animate.css";
import Contacto from "./Contacto";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Carousel4 from "../carousel/Carousel4";



function Pcontacto() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  return (
    <>
      {/*********** Banner **************/}

      <Carousel4/>

{/*      <div className="banner-image-contacto w-100 vh-100 d-flex justify-content-center align-items-center">
        <div className="content-header">
          <h1 className="animate__animated animate__fadeInDown tituloheader-contacto">
            CONTACTO
          </h1>
          <h3 className="animate__animated animate__fadeInDown subtituloheader"></h3>
          <KeyboardArrowDownIcon sx={{ color: "#ffffff", width: "5vw" }} />
        </div>
  </div>*/}

      {/************ Formulario ***********/}


      <div style={{height:"100vh", display:"flex"}}>
        <div>
          <h1 className="t-contacto">FICU</h1>
          <h1 className="t-contacto2">Fundación para la Integración Cultural</h1>
          

          <p className="parrafo-contacto">+54 9 11 3027-3150</p>
          <p className="parrafo-contacto">somosficu@gmail.com</p>
          <p className="parrafo-contacto">CABA - BS. AS. ARGENTINA</p>

          <div>
            <div className="containerf" style={{marginTop:"5vh", marginLeft:"1vw"}}>
              <section className="mb-4">
                {" "}
                <a
                  href="https://www.facebook.com/somosficu"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Facebook"
                  target="_blank"
                >
                  <FacebookIcon sx={{ color: "#6667AB", margin: "5px" }} />
                </a>
                <a
                  href="https://www.instagram.com/somosficu/"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Instagram"
                  target="_blank"
                >
                  <InstagramIcon sx={{ color: "#6667AB", margin: "5px" }} />
                </a>
                <a
                  href="https://www.linkedin.com/company/somosficu/"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Instagram"
                  target="_blank"
                >
                <LinkedInIcon sx={{ color: "#6667AB", margin: "5px" }} />
                </a>
                <a
                  href="https://mobile.twitter.com/somosficu"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Instagram"
                  target="_blank"
                >
                <TwitterIcon sx={{ color: "#6667AB", margin: "5px" }} />
                </a>
              </section>
            </div>
          </div>



        </div>
        <div>
        <Contacto/>
        </div>
      </div>


    </>
  );
}

export default Pcontacto;
