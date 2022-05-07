import React from "react";
import "./unete.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "animate.css";




function Unete() {
  return (
    <>
      {/*********** Banner **************/}

      <div className="banner-image-unete w-100 vh-100 d-flex justify-content-center align-items-center">
        <div className="content-header">
          <h1 className="animate__animated animate__fadeInDown tituloheader-unete">
            ÚNETE
          </h1>
          <h3 className="animate__animated animate__fadeInDown subtituloheader"></h3>
          <KeyboardArrowDownIcon sx={{ color: "#ffffff", width: "5vw" }} />
        </div>
      </div>




    </>
  );
}

export default Unete;
