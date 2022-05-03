import React, { useState } from 'react'
import { Link as LinkRouter} from "react-router-dom";
import logo from '../navigation/logo2.png'
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
<LinkRouter to="/home">
<img src={logo} alt='logo' width='95'/>
</LinkRouter>

<div className='d-flex' style={{justifyContent:"right", alignItems:"right"}}>
<LinkRouter className="nav-link" style={{color:"#ffffff", fontSize:"18px"}} to="/">Home</LinkRouter>
<a className="nav-link active" style={{color:"#ffffff", fontSize:"18px"}} aria-current="page" href="#">Nosotros</a>
<a className="nav-link active"  aria-current="page" href="#">Únete</a>
<LinkRouter className="nav-link" style={{color:"#ffffff", fontSize:"18px"}} to="/pcontacto">Contacto</LinkRouter>
</div>
</div>
</nav>






 </>
  );
}

export default Navbar;