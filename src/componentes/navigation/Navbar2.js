import React, { useState } from "react";
import { Link as LinkRouter } from "react-router-dom";
import logo from "../navigation/logo2.png";
import './navbar.css'

function Navbar2() {
	const [colorChange, setColorchange] = useState(false);
	const changeNavbarColor = () => {
		if (window.scrollY >= 10) {
			setColorchange(true);
		} else {
			setColorchange(false);
		}
	};
	window.addEventListener("scroll", changeNavbarColor);

	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light navbar-color fixed-top">
				<div className="container-fluid">
					<LinkRouter to="/home">
						<img src={logo} alt="logo" width="95" />
					</LinkRouter>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse"
						style={{ justifyContent: "right", alignItems: "right" }}
						id="navbarNav"
					>
						<ul className="navbar-nav">
							<li className="nav-item">
								<LinkRouter
									className="nav-link"
									style={{ color: "#ffffff", fontSize: "18px" }}
									to="/"
								>
									Home
								</LinkRouter>
							</li>
							<li className="nav-item">
								<LinkRouter
									className="nav-link"
									style={{ color: "#ffffff", fontSize: "18px" }}
									to="/eventos"
								>
									Eventos
								</LinkRouter>
							</li>
							<li className="nav-item">
								<LinkRouter
									className="nav-link"
									style={{ color: "#ffffff", fontSize: "18px" }}
									to="/nosotros"
								>
									Nosotros
								</LinkRouter>
							</li>
							<li className="nav-item">
								<LinkRouter
									className="nav-link"
									style={{ color: "#ffffff", fontSize: "18px" }}
									to="/artistas"
								>
									Artistas
								</LinkRouter>
							</li>
							<li className="nav-item">
								<LinkRouter
									className="nav-link"
									style={{ color: "#ffffff", fontSize: "18px" }}
									to="/contacto"
								>
									Contacto
								</LinkRouter>
							</li>
						</ul>
					</div>
				</div>
			</nav>



		</>
	);
}

export default Navbar2;



			{/* <nav className="navbar navbar-expand-lg navbar-light navbar-color fixed-top">
				<div className="container-fluid">
					<LinkRouter to="/home">
						<img src={logo} alt="logo" width="95" />
					</LinkRouter>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse"
						style={{ justifyContent: "right", alignItems: "right" }}
						id="navbarNav"
					>
						<ul className="navbar-nav">
							<li className="nav-item">
								<LinkRouter
									className="nav-link"
									style={{ color: "#ffffff", fontSize: "18px" }}
									to="/"
								>
									Home
								</LinkRouter>
							</li>
							<li className="nav-item">
								<LinkRouter
									className="nav-link"
									style={{ color: "#ffffff", fontSize: "18px" }}
									to="/eventos"
								>
									Eventos
								</LinkRouter>
							</li>
							<li className="nav-item">
								<LinkRouter
									className="nav-link"
									style={{ color: "#ffffff", fontSize: "18px" }}
									to="/nosotros"
								>
									Nosotros
								</LinkRouter>
							</li>
							<li className="nav-item">
								<LinkRouter
									className="nav-link"
									style={{ color: "#ffffff", fontSize: "18px" }}
									to="/artistas"
								>
									Artistas
								</LinkRouter>
							</li>
							<li className="nav-item">
								<LinkRouter
									className="nav-link"
									style={{ color: "#ffffff", fontSize: "18px" }}
									to="/contacto"
								>
									Contacto
								</LinkRouter>
							</li>
						</ul>
					</div>
				</div>
			</nav> */}