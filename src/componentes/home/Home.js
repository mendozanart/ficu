import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import "./home.css";
import Carousel from "../carousel/Carousel";

import home1 from "./img/ficu1.jpg";
import home2 from "./img/ficu2.jpg";
import home4 from "./img/ficu8.jpg";
import icono1 from "./img/icons/1.png";
import icono2 from "./img/icons/2.png";
import icono3 from "./img/icons/3.png";
import icono4 from "./img/icons/4.png";
import icono5 from "./img/icons/5.png";
import icono6 from "./img/icons/6.png";
import icono7 from "./img/icons/7.png";
import video1 from "./video/video1.mp4";
import video2 from "./video/video2.mp4";

import Logo from "../navigation/logo2.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "animate.css";

function Home() {
  return (
    <>
      {/*********** Banner **************/}

      <Carousel />

      {/*********** Presentacion **************/}

      <div>
        <div className="container-presentacion">
          <section class="section top-section">
            <div class="content-container content-theme-dark">
              <div class="content-inner">
                <div class="content-center">
                  {/*<h1>ficu</h1>*/}
                  <img src={Logo} alt="logo" width="400" />
                  <p>
                    es una fundación cuyo objetivo es servir de puente para que
                    migrantes y refugiados puedan insertarse en la sociedad de
                    acogida desde el arte, la cultura y los oficios.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/*****video */}

          <div>
            <video autoPlay loop>
              <source src={video2} type="video/mp4" />
            </video>
          </div>

          {/*********** Mision ***********/}

          <h3 className="t-icono">Nuestra misión</h3>
          <p className="p-icono">Los objetivos de FICU</p>

          <div className="contenedor-iconos">
            <div className="iconos">
              <div className="div-icono">
                <img
                  src={icono1}
                  className="img-icono"
                  alt="icono"
                  width="100"
                />
                <h3 className="st-icono">EMPODERAR</h3>
                <p className="sp-icono">
                  Empoderar al migrante y refugiado para su integración en la
                  sociedad argentina.
                </p>
              </div>
            </div>

            <div className="iconos">
              <div className="div-icono">
                <img
                  src={icono2}
                  className="img-icono"
                  alt="icono"
                  width="100"
                />
                <h3 className="st-icono">FAVORECER</h3>
                <p className="sp-icono">
                  Favorecer los emprendimientos comunitarios productivos,
                  gastronómicos, artesanales artísticos, entre otros.
                </p>
              </div>
            </div>

            <div className="iconos" style={{ marginTop: "-0.1px" }}>
              <div className="div-icono">
                <img
                  src={icono3}
                  className="img-icono"
                  alt="icono"
                  width="100"
                />
                <h3 className="st-icono">PROMOVER</h3>
                <p className="sp-icono">
                  Promover, asesorar y alentar la generación de proyectos.
                </p>
              </div>
            </div>

            <div className="iconos" style={{ marginTop: "-0.05px" }}>
              <div className="div-icono">
                <img
                  src={icono4}
                  className="img-icono"
                  alt="icono"
                  width="100"
                />
                <h3 className="st-icono">DESARROLLAR</h3>
                <p className="sp-icono">
                  Promover y desarrollar actividades donde la cultura sea la
                  protagonista.
                </p>
              </div>
            </div>

            <div className="iconos">
              <div className="div-icono">
                <img
                  src={icono5}
                  className="img-icono"
                  alt="icono"
                  width="100"
                />
                <h3 className="st-icono">GESTIONAR</h3>
                <p className="sp-icono">
                  Desarrollar y gestionar sistemas de comunicaciones .
                </p>
              </div>
            </div>

            <div className="iconos">
              <div className="div-icono">
                <img
                  src={icono6}
                  className="img-icono"
                  alt="icono"
                  width="100"
                />
                <h3 className="st-icono">ESTABLECER</h3>
                <p className="sp-icono">
                  Establecer acuerdos con otras entidades que se encuadren
                  dentro de los objetivos de la fundación.
                </p>
              </div>
            </div>

            <div className="iconos" style={{ marginTop: "-1px" }}>
              <div className="div-icono">
                <img
                  src={icono7}
                  className="img-icono"
                  alt="icono"
                  width="100"
                />
                <h3 className="st-icono">FORTALECER</h3>
                <p className="sp-icono">Fortalecer los liderazgos.</p>
              </div>
            </div>
          </div>

          {/********Cards */}

          {/*********** Frase  ***********/}

          <div className="container-presentacion">
            <section class="section top-section2">
              <div class="content-container content-theme-dark">
                <div class="content-inner">
                  <div class="content-center"></div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/*********** Nosotros ***********/}
      <LinkRouter to="/nosotros">
        <button type="button" class="btn btn-nosotros btn-primary">
          Conocenos
        </button>
      </LinkRouter>
      <div className="contenedor-nosotros">
        <h3 className="t-nosotros">Nuestro equipo</h3>
        <p className="p-nosotros">Conoce los miembros de nuestro equipo</p>
      </div>

      {/*********** Frase  ***********/}

      <div className="container-presentacion">
        <section class="section top-section3">
          <div class="content-container content-theme-dark">
            <div class="content-inner">
              <div class="content-center">
                <p>
                  “Somos una especie en viaje. No tenemos pertenencias sino
                  equipaje”
                </p>
                <p>Jorge Drexler</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/*********** Eventos ***********/}

      <h3 className="t-icono">Eventos</h3>
      <p className="p-icono">Enterate de los proximos eventos</p>





      {/*********** Frase  ***********/}

      <div className="container-presentacion">
        <section class="section top-section4">
          <div class="content-container content-theme-dark">
            <div class="content-inner">
              <div class="content-center">
                <p>
                  “Somos una especie en viaje. No tenemos pertenencias sino
                  equipaje”
                </p>
                <p>Jorge Drexler</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
