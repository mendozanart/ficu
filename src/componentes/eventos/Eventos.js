import React, {useEffect} from "react";
import "./eventos.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Carousel3 from "../carousel/Carousel3";
import "animate.css";

function Eventos() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/*********** Banner **************/}


<Carousel3/>
<div style={{height:"10vh"}}></div>
{/*
        <div className="banner-image-unete w-100 vh-100 d-flex justify-content-center align-items-center">
          <div className="content-header">
            <h1 className="animate__animated animate__fadeInDown tituloheader-unete">
              EVENTOS
            </h1>
            <h3 className="animate__animated animate__fadeInDown subtituloheader"></h3>
          </div>
  </div>*/}

        <div>
        {/**************Junio  **********/}


        <h3 className="t-junio">Junio</h3>
        <p className="p-junio">Asiste a nuestros eventos del mes de Junio</p>

        {/************** Acordeon Junio *******/}

        <div className="acordion">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography       sx={{
        color: '#737373',
        '&:hover': {
          color: '#737373',
          opacity: [0.9, 0.8, 0.7],
        },
      }}>Eventos</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{
        color: '#737373'}}>
                        <ul>
              <li>11/06  -  <strong>Buenos Aires celebra Venezuela</strong></li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{
        color: '#737373',
        '&:hover': {
          color: '#737373',
          opacity: [0.9, 0.8, 0.7],
        },
      }}>Charlas</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{
        color: '#737373'}}>
            Nuevas fechas por definirse en el calendario de eventos.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{
        color: '#737373',
        '&:hover': {
          color: '#737373',
          opacity: [0.9, 0.8, 0.7],
        },
      }}>Talleres</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{
        color: '#737373'}}>
            Nuevas fechas por definirse en el calendario de eventos.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>




            {/**************Julio  **********/}


            <h3 className="t-julio">Julio</h3>
        <p className="p-julio">Prepara tu calendario con anticipación</p>

        {/************** Acordeon Julio *******/}

        <div className="acordion">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography       sx={{
        color: '#737373',
        '&:hover': {
          color: '#737373',
          opacity: [0.9, 0.8, 0.7],
        },
      }}>Eventos</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{
        color: '#737373'}}>
            Nuevas fechas por definirse en el calendario de eventos.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{
        color: '#737373',
        '&:hover': {
          color: '#737373',
          opacity: [0.9, 0.8, 0.7],
        },
      }}>Charlas</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{
        color: '#737373'}}>
            Nuevas fechas por definirse en el calendario de eventos.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{
        color: '#737373',
        '&:hover': {
          color: '#737373',
          opacity: [0.9, 0.8, 0.7],
        },
      }}>Talleres</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{
        color: '#737373'}}>
            Nuevas fechas por definirse en el calendario de eventos.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>





            {/************** Agosto  **********/}


            <h3 className="t-agosto">Agosto</h3>
        <p className="p-agosto">Entérate de todo lo que llega en Agosto</p>

        {/************** Acordeon Agosto *******/}

        <div className="acordion">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography       sx={{
        color: '#737373',
        '&:hover': {
          color: '#737373',
          opacity: [0.9, 0.8, 0.7],
        },
      }}>Eventos</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{
        color: '#737373'}}>
            Nuevas fechas por definirse en el calendario de eventos.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{
        color: '#737373',
        '&:hover': {
          color: '#737373',
          opacity: [0.9, 0.8, 0.7],
        },
      }}>Charlas</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{
        color: '#737373'}}>
            Nuevas fechas por definirse en el calendario de eventos.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{
        color: '#737373',
        '&:hover': {
          color: '#737373',
          opacity: [0.9, 0.8, 0.7],
        },
      }}>Talleres</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{
        color: '#737373'}}>
            Nuevas fechas por definirse en el calendario de eventos.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>

    </div>

    </>
  );
}

export default Eventos;
