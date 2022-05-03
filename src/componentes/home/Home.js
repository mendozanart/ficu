import React from "react";
import "./home.css";
import CarouselHome from "../carousel/CarouselHome";
import home1 from "./img/ficu1.jpg";
import home2 from "./img/ficu2.jpg";
import home4 from "./img/home (7).jpg";
import Cards from "../cards/Cards";
import Logo from "../navigation/logo2.png";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import 'animate.css';


function Home() {
  return (
    <>
      {/*********** Banner **************/}

      <div className="banner-image w-100 vh-100 d-flex justify-content-center align-items-center">
        <div className="content-header">
            <h1 className="animate__animated animate__fadeInDown tituloheader">Somos Migrantes</h1>
            <h3 className="animate__animated animate__fadeInDown subtituloheader">Somos FICU</h3>
            <KeyboardArrowDownIcon sx={{ color: "#ffffff", width:"5vw", marginTop:"5vh" }} />
        </div>
      </div>


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

          {/************ Mision **********/}

          <div className=" d-flex">
            <div>
              <img src={home1} alt="foto" width="620" />
            </div>
            <div className="contenedor-mision">
              <h3 className="t-mision">Nuestra misión</h3>
              <ul className="p-mision">
                <li>
                  Empoderar al migrante y refugiado para su integración en la
                  sociedad argentina.
                </li>
                <li>
                  Favorecer los emprendimientos comunitarios productivos,
                  gastronómicos, artesanales artísticos, entre otros.
                </li>
                <li>
                  Promover, asesorar y alentar la generación de proyectos.
                </li>
                <li>
                  Promover y desarrollar actividades donde la cultura sea la
                  protagonista.
                </li>
                <li>Desarrollar y gestionar sistemas de comunicaciones .</li>
                <li>
                  Establecer acuerdos con otras entidades que se encuadren
                  dentro de los objetivos de la fundación.
                </li>
                <li>Fortalecer los liderazgos.</li>
              </ul>
            </div>
          </div>

          {/*********** Datos ***********/}

          <div className="d-flex">
            <div style={{ marginLeft: "650px" }}>
              <h3 className="t-datos">Actividades</h3>
              <ul className="p-datos" style={{ textAlign: "right" }}>
                <li>Charlas ,Talleres y seminarios</li>
                <li>Eventos y Encuentros</li>
                <li>Creación de Espacios</li>
                <li>Sistemas de Comunicación</li>
                <li>Acompañamiento</li>
              </ul>
            </div>
            <div>
              <img
                src={home2}
                alt=""
                width="500"
                style={{ marginLeft: "30px" }}
              />
            </div>
          </div>

          {/************ Equipo **********/}

          <div className=" d-flex">
            <div>
              <img src={home4} alt="foto" width="620" />
            </div>
            <div className="contenedor-equipo">
              <h3 className="t-equipo">Nuestro equipo</h3>
              <ul className="p-equipo">
                <li>
                  Empoderar al migrante y refugiado para su integración en la
                  sociedad argentina.
                </li>
                <li>
                  Favorecer los emprendimientos comunitarios productivos,
                  gastronómicos, artesanales artísticos, entre otros.
                </li>
                <li>
                  Promover, asesorar y alentar la generación de proyectos.
                </li>
                <li>
                  Promover y desarrollar actividades donde la cultura sea la
                  protagonista.
                </li>
                <li>Desarrollar y gestionar sistemas de comunicaciones .</li>
                <li>
                  Establecer acuerdos con otras entidades que se encuadren
                  dentro de los objetivos de la fundación.
                </li>
                <li>Fortalecer los liderazgos.</li>
              </ul>
            </div>
          </div>

          {/*********** Frase  ***********/}

          <div className="container-presentacion">
            <section class="section top-section">
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
        </div>
      </div>
    </>
  );
}

export default Home;
