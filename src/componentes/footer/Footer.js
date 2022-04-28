import React from "react";
import { Link as Linkrouter } from "react-router-dom";
import "./footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import logoacnur from "./acnur.svg";
import logooim from "./oim.svg";

function Footer() {
  return (
    <>
      <footer className="footer-color ">

        <div
          className="container p-4 pb-0 "
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >

            
          <div className="mt-4" style={{ display: "flex", flexDirection: "column" }}>
          <a
                  href="https://fundacionacnur.org/"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Instagram"
                  target="_blank"
                >
            <img src={logoacnur} alt="logo" width="90" />
                </a>
                <a
                  href="https://www.iom.int/es"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Instagram"
                  target="_blank"
                >
            <img
              src={logooim}
              alt="logo"
              width="90"
              style={{ marginTop: "20px" }}
            />
                </a>
          </div>



          <div>
            <div className="container p-4 pb-0">
              <section className="mb-4">
                {" "}
                <a
                  href="https://www.facebook.com/somosficu"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Facebook"
                  target="_blank"
                >
                  <FacebookIcon sx={{ color: "#1B3659", margin: "5px" }} />
                </a>
                <a
                  href="https://www.instagram.com/somosficu/"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Instagram"
                  target="_blank"
                >
                  <InstagramIcon sx={{ color: "#1B3659", margin: "5px" }} />
                </a>
                <a
                  href="https://www.linkedin.com/company/somosficu/"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Instagram"
                  target="_blank"
                >
                <LinkedInIcon sx={{ color: "#1B3659", margin: "5px" }} />
                </a>
                <a
                  href="https://mobile.twitter.com/somosficu"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Instagram"
                  target="_blank"
                >
                <TwitterIcon sx={{ color: "#1B3659", margin: "5px" }} />
                </a>
              </section>
            </div>
          </div>
        </div>


        <div className='mt-5 mb-3' style={{alignItems:"center"}}>
            <a href="" tittle="" style={{margin:'10px', textDecoration:'none', color:'#1B3659', fontWeight:'bold'}}>Home</a>
            <a href="" tittle="" style={{margin:'10px', textDecoration:'none', color:'#1B3659', fontWeight:'bold'}}>Nosotros</a>
            <a href="" tittle="" style={{margin:'10px', textDecoration:'none', color:'#1B3659', fontWeight:'bold'}}>Contacto</a>
        </div>

        <div class="footer-texto text-center p-3">
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
