import React, { useEffect } from "react";
import "../nosotros/nosotros.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Carousel5 from "../carousel/Carousel5";
import "animate.css";



import { actionTypes } from '../../core/context/reducer';
import { useStateValue } from '../../core/context/StateProvider';
import axios from 'axios';


function Artistas() {

	const [{ artistas }, dispatch] = useStateValue()

	useEffect(() => {
		window.scrollTo(0, 0);
		axios.get("http://localhost:4000/api/artistas")
			.then(response => {
				dispatch({
					type: actionTypes.ARTISTASDB,
					artistas: response.data.response.artistas
				})
			})
	}, []);

	return (
		<>
			{/*********** Banner **************/}

			<Carousel5 />
			<div style={{ height: "10vh" }}></div>

			{/*<div className="gradient-nosotros w-100 h-100">
      <div className="banner-image-nosotros w-100 h-100 d-flex justify-content-center align-items-center">
        <div className="content-header">
          <h1 className="animate__animated animate__fadeInDown tituloheader-nosotros">
            NOSOTROS
          </h1>
          <h3 className="animate__animated animate__fadeInDown subtituloheader"></h3>
          <KeyboardArrowDownIcon sx={{ color: "#ffffff", width: "5vw" }} />
        </div>
      </div>
  </div>*/}




			{/*********** Banner2 **************/}





			{/*********** Cards **************/}


			<h3 className="t-icono">Nuestros Artistas</h3>
			<p className="p-icono">Los artistas que nos acompañan</p>


			<div className="box-artistas">
				{artistas.map(item => {
					return(
						<div className="container-profile">
						<div className="profile-photo">
							<img src={process.env.PUBLIC_URL + `/img/artistas/${item.foto}`} alt="profile"></img>
						</div>
						<h3 className="profile-name">{item.nombre} {item.apellido}</h3>
						<h4 className="profile-cargo">{item.profesion}</h4>
						

					</div>

					)
				
				})}
			



			</div>







		</>
	);
}

export default Artistas;
