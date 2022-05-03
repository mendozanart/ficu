import React from "react";
import "./contacto.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import 'animate.css';


function Pcontacto() {
  return (
<>
          {/*********** Banner **************/}

          <div className="banner-image-contacto w-100 vh-100 d-flex justify-content-center align-items-center">
        <div className="content-header">
            <h1 className="animate__animated animate__fadeInDown tituloheader">Somos Migrantes</h1>
            <h3 className="animate__animated animate__fadeInDown subtituloheader">Somos FICU</h3>
            <KeyboardArrowDownIcon sx={{ color: "#ffffff", width:"5vw", marginTop:"5vh" }} />
        </div>
      </div>




</>

  );
}

export default Pcontacto;
