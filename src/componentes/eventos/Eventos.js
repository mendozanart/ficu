import React, {useEffect} from "react";
import "./eventos.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "animate.css";

function Eventos() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/*********** Banner **************/}


        <div className="banner-image-unete w-100 vh-100 d-flex justify-content-center align-items-center">
          <div className="content-header">
            <h1 className="animate__animated animate__fadeInDown tituloheader-unete">
              EVENTOS
            </h1>
            <h3 className="animate__animated animate__fadeInDown subtituloheader"></h3>
          </div>
        </div>

    </>
  );
}

export default Eventos;
