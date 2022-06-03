import React, { useEffect } from "react";
import "./eventos.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Carousel6 from "../carousel/Carousel6";
import "animate.css";



import Cards2 from './cards/Cards2'
import Cards from "./cards/Cards";
import Gallery from './galeria/Galeria'
import Galeria from "./galeria/Galeria";


function Evento() {

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			{/*********** Banner **************/}


			<Carousel6 />
			<div style={{ height: "10vh" }}></div>
			{/*
        <div className="banner-image-unete w-100 vh-100 d-flex justify-content-center align-items-center">
          <div className="content-header">
            <h1 className="animate__animated animate__fadeInDown tituloheader-unete">
              EVENTOS
            </h1>
            <h3 className="animate__animated animate__fadeInDown subtituloheader"></h3>
          </div>
  </div>*/}


			<div className="box-events">
				{/************** Descripcion eventos  **********/}

				<h3 className="title-mes-events">Festival del Reencuentro 2021</h3>
				<p className="text-content-events">Tte. Gral. Juan Domingo Perón 3326, CABA.</p>


				<p className="parrafo-content-events">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id tellus vulputate nulla magna odio aliquet. Integer pretium diam tincidunt netus lacus, mauris. Nullam proin in eget sit parturient. Est nunc sed diam eget enim libero egestas. Nisl risus ullamcorper quisque nunc rhoncus neque, orci, adipiscing tincidunt. Quis dolor amet, nec, lacus viverra egestas. Sagittis, cursus augue justo, leo purus vulputate lacus. Sagittis libero ridiculus ut nisi, sed velit.
				</p>


			</div>


			<div className="box-events">
				{/************** Titulos eventos  **********/}

				<h3 className="title-mes-events">Galeria</h3>
				<p className="text-content-events">Fotos del Festival del Reencuentro</p>

				<Cards />

			</div>



			{/* <Galeria/> */}

		</>
	);
}

export default Evento;
