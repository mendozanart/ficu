import React, { useEffect } from "react";
import "./eventos.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Carousel3 from "../carousel/Carousel3";
import "animate.css";

import Cards from './cards/Cards'

import Cards2 from './cards/Cards2'
import CarouselEvents from "./cards/CarouselEvents";

function Eventos() {

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			{/*********** Banner **************/}


			<Carousel3 />
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
				{/**************Junio  **********/}


				<h3 className="title-mes-events">Proximos Eventos</h3>
				<p className="text-content-events">Asiste a nuestros eventos del mes</p>

				{/************** Acordeon Junio *******/}


			{/* 	<Cards2/> */}



				{/**************Julio  **********/}


				<h3 className="title-mes-events">Eventos Pasados</h3>
				<p className="text-content-events">Conoce nuestros eventos</p>

				{/************** Acordeon Julio *******/}

				


				<CarouselEvents/>



			</div>

		</>
	);
}

export default Eventos;
