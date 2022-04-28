import React, { useState } from 'react'
import logo from '../navigation/logo1.png'
import './navbar.css'


function Navbar() {

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


<nav className={
          colorChange
            ? "navbar navbar-light navbar-color fixed-top"
            : "colorChange navbar navbar-light fixed-top"
        }>
<div className="container-fluid">
<img src={logo} alt='logo' width='95'/>
<button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
<span className="navbar-toggler-icon"></span>
</button>
<div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
<div className="offcanvas-header navbar-color">
<button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
</div>
<div className="offcanvas-body navbar-color navbar-texto">
<ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
  <li className="nav-item ">
  <a className="nav-link active" aria-current="page" href="#">Home</a>
  </li>
  <li className="nav-item">
  <a className="nav-link active" aria-current="page" href="#">Nosotros</a>
  </li>
  <li className="nav-item">
  <a className="nav-link active" aria-current="page" href="#">Contacto</a>
  </li>
</ul>
</div>
</div>
</div>
</nav>






 </>
  );
}

export default Navbar;
