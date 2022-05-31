import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import "./footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import logoacnur from "./acnur2.svg";
import logooim from "./oim2.svg";
import logoSSDDHH from "./SSDDHH.svg"
import logogcba from "./gcba-01.svg"

function Footer() {
  return (
    <>
      <footer className="footer-color  ">

        <div className="container p-4 pb-0 footer-box-icons " style={{display: "flex",justifyContent: "space-between",alignItems: "center",}}>


          <div className="content-footer-logos " >
            <p class="footer-texto text-center p-3">Nos acompañan:</p>
            <div className="footer-logos">
              <a
                href="https://fundacionacnur.org/"
                data-toggle="tooltip"
                data-placement="top"
                title="Instagram"
                target="_blank"
                className="foo-log"
              >
                <img src={logoacnur} alt="logo" width="90" />
              </a>
              <a
                href="https://www.iom.int/es"
                data-toggle="tooltip"
                data-placement="top"
                title="Instagram"
                target="_blank"
                className="foo-log"
              >
                <img
                  src={logooim}
                  alt="logo"
                  width="90"
                 
                />
              </a>
            </div>



            <div className="footer-logos" >
              <a
                href="https://www.iom.int/es"
                data-toggle="tooltip"
                data-placement="top"
                title="Instagram"
                target="_blank"
                className="foo-log"
              >
                <img
                  src={logoSSDDHH}
                  alt="logo"
                  width="90"
                  
                />
              </a>

              <a
                href="https://www.iom.int/es"
                data-toggle="tooltip"
                data-placement="top"
                title="Instagram"
                target="_blank"
                className="foo-log"
              >
                <img
                  src={logogcba}
                  alt="logo"
                  width="90"
                  
                />
              </a>
            </div>
          </div>



          <div >
            <div className="containerf p-4 pb-0">
              <section className="mb-4">

                {" "}
                <a
                  href="https://www.facebook.com/somosficu"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Facebook"
                  target="_blank"
                >
                  <FacebookIcon sx={{ color: "#ffffff", margin: "5px" }} />
                </a>
                <a
                  href="https://www.instagram.com/somosficu/"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Instagram"
                  target="_blank"
                >
                  <InstagramIcon sx={{ color: "#ffffff", margin: "5px" }} />
                </a>
                <a
                  href="https://www.linkedin.com/company/somosficu/"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Instagram"
                  target="_blank"
                >
                  <LinkedInIcon sx={{ color: "#ffffff", margin: "5px" }} />
                </a>
                <a
                  href="https://mobile.twitter.com/somosficu"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Instagram"
                  target="_blank"
                >
                  <TwitterIcon sx={{ color: "#ffffff", margin: "5px" }} />
                </a>
              </section>
            </div>
          </div>
        </div>


        <div className='content-footer-links'>
            <LinkRouter to="/" className="footer-links" >Home</LinkRouter>
            <LinkRouter to="/eventos" className="footer-links">Eventos</LinkRouter>
            <LinkRouter to="/nosotros" className="footer-links" >Nosotros</LinkRouter>
            <LinkRouter to="/contacto" className="footer-links" >Contacto</LinkRouter>
        </div>

        <div className="footer-texto text-center p-3">
          <p>
            © 2022{" "}
            <strong>Ficu - Fundación para la Integración Cultural</strong> -
            Copyright.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
