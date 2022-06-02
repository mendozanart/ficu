import React from "react";
import "./cards2.scss";
import Profile1 from "./ficu1.jpg";
import Profile2 from "./ficu2.jpg";
import Profile3 from "./ficu3.jpg";
import { Link as LinkRouter } from "react-router-dom";

function Cards2() {
  return (
    <>
      <div class="container-cards2">

	  <LinkRouter to="/evento">		
        <div class="card-wrapper">
          <div class="card profile-two">
            <div class="card-image profile-img--two">
              <img src={Profile1} alt="profile two" />
            </div>

            <div class="details jane">
              <h2>
                Festival del Reencuentro 2021
                <br />
                <span class="job-title">Juan Domingo Perón 3326, CABA.</span>
                <p class="job-title">10-12-2021</p>
              </h2>
            </div>
          </div>
        </div>
		</LinkRouter>

		<LinkRouter to="/evento">		
        <div class="card-wrapper">
          <div class="card profile-two">
            <div class="card-image profile-img--two">
              <img src={Profile2} alt="profile two" />
            </div>

            <div class="details jane">
              <h2>
                Festival del Reencuentro 2021
                <br />
                <span class="job-title">Juan Domingo Perón 3326, CABA.</span>
                <p class="job-title">10-12-2021</p>
              </h2>
            </div>
          </div>
        </div>
		</LinkRouter>

		<LinkRouter to="/evento">		
        <div class="card-wrapper">
          <div class="card profile-two">
            <div class="card-image profile-img--two">
              <img src={Profile3} alt="profile two" />
            </div>

            <div class="details jane">
              <h2>
                Festival del Reencuentro 2021
                <br />
                <span class="job-title">Juan Domingo Perón 3326, CABA.</span>
                <p class="job-title">10-12-2021</p>
              </h2>
            </div>
          </div>
        </div>
		</LinkRouter>




      </div>
    </>
  );
}

export default Cards2;
