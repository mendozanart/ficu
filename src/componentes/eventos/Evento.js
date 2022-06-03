import React, { useEffect, useState } from "react";
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
import '../eventos/cards/cards.scss'


import { useParams } from "react-router-dom";
import { actionTypes } from '../../core/context/reducer';
import { useStateValue } from '../../core/context/StateProvider';
import axios from 'axios';


import { Swiper, SwiperSlide } from "swiper/react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


function Evento() {

	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1
		}
	};

	const [{ events }, dispatch] = useStateValue()

	const { id } = useParams();
	const eventoSelected = events.filter((x) => x._id === id);

	console.log(eventoSelected)

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


			{eventoSelected.map(item => {
				return (
					<div className="box-events">
						{/************** Descripcion eventos  **********/}



						<h3 className="title-mes-events">{item.titulo}</h3>
						<p className="text-content-events">{item.lugar}</p>


						<p className="parrafo-content-events">{item.descripcion}</p>


						<h3 className="title-mes-events">Galeria</h3>
						<p className="text-content-events">Fotos del Festival del Reencuentro</p>



						<Carousel  responsive={responsive} >
							<div className="mySwiper"><img src={process.env.PUBLIC_URL + `/img/eventos/${item.galeria[0]}`} alt="profile"></img></div>
							<div className="mySwiper"><img src={process.env.PUBLIC_URL + `/img/eventos/${item.galeria[1]}`} alt="profile"></img></div>
							<div className="mySwiper"><img src={process.env.PUBLIC_URL + `/img/eventos/${item.galeria[2]}`} alt="profile"></img></div>
							<div className="mySwiper"><img src={process.env.PUBLIC_URL + `/img/eventos/${item.galeria[3]}`} alt="profile"></img></div>
							<div className="mySwiper"><img src={process.env.PUBLIC_URL + `/img/eventos/${item.galeria[4]}`} alt="profile"></img></div>
						</Carousel>

					</div>



				)
			})}



		</>
	);
}

export default Evento;
