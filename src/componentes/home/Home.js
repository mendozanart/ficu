import React, { useEffect }  from "react";
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
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
                 {/* <img src={Logo} alt="logo" width="400" />*/}
                  <h6 className="tituloheader"></h6>
                  <h5 className="t-galeria mb-2">Nuestro Objetivo</h5>
                  <h2></h2>                  <h6 className="p-frase">
                  "<strong>FICU</strong> es una fundación cuyo objetivo es servir de puente para que
                    migrantes y refugiados puedan insertarse en la sociedad de
                    acogida desde el arte, la cultura y los oficios."
                </h6>
                <h2></h2>    
                  <p>

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



          {/*********** Galeria  ***********/}



                  <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={home1} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 className="t-galeria">Festival Reencuentro</h5>
        <p className="p-galeria">Reencuentro 2021 ACNUR</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={home2} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 className="t-galeria">Carnavales</h5>
        <p className="p-galeria">Celebracion Carnavales 2022</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={home4} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 className="t-galeria">Carnavales Calipso</h5>
        <p className="p-galeria">Celebracion Carnavales 2022</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>




                  </div>
                </div>



      {/*********** Nosotros ***********/}

      <div className="div-nosotros">
      <LinkRouter to="/nosotros">
        <button type="button" class="btn btn-header2 btn-warning">
          Conócenos
        </button>
      </LinkRouter>
      <div className="contenedor-nosotros">
        <h3 className="t-nosotros">Nuestro equipo</h3>
        <p className="p-nosotros">Conoce los miembros de nuestro equipo</p>
      </div>
      </div>

      {/*********** Frase  ***********/}

{/*      <div className="container-presentacion">
        <section class="section top-section3">
          <div class="content-container content-theme-dark">
            <div class="content-inner">
              <div class="content-center">
              <h3 className="t-eventos">Eventos</h3>
              <h6 className="p-eventos">Enterate de los proximos eventos</h6>
              </div>
            </div>
          </div>
        </section>
  </div>*/}

      {/*********** Eventos ***********/}







      {/*********** Frase  ***********/}

      <div className="container-presentacion">
        <section class="section top-section4">
          <div class="content-container content-theme-dark">
            <div class="content-inner">
              <div class="content-center">
                <h6 className="p-frase">
                  “Somos una especie en viaje. No tenemos pertenencias sino
                  equipaje”
                </h6>
                <h6 className="p-frase">Jorge Drexler</h6>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
