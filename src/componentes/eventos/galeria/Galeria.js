import React, { useEffect } from "react";
import "../eventos.css";
import "animate.css";






function Galeria() {

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<div class="container gallery-container">

<h1>Bootstrap 3 Gallery</h1>

<p class="page-description text-center">Fluid Layout With Overlay Effect</p>

<div class="tz-gallery">

    <div class="row">

        <div class="col-sm-12 col-md-4">
            <a class="lightbox" href="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/bridge.jpg">
                <img src="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/bridge.jpg" alt="Bridge"/>
            </a>
        </div>
        <div class="col-sm-6 col-md-4">
            <a class="lightbox" href="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/park.jpg">
                <img src="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/park.jpg" alt="Park"/>
            </a>
        </div>
        <div class="col-sm-6 col-md-4">
            <a class="lightbox" href="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/tunnel.jpg">
                <img src="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/tunnel.jpg" alt="Tunnel"/>
            </a>
        </div>
        <div class="col-sm-12 col-md-8">
            <a class="lightbox" href="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/traffic.jpg">
                <img src="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/traffic.jpg" alt="Traffic"/>
            </a>
        </div>
        <div class="col-sm-6 col-md-4">
            <a class="lightbox" href="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/rails.jpg">
                <img src="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/rails.jpg" alt="Coast"/>
            </a>
        </div> 
        <div class="col-sm-6 col-md-4">
            <a class="lightbox" href="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/coast.jpg">
                <img src="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/coast.jpg" alt="Rails"/>
            </a>
        </div>

    </div>

</div>

</div>
		</>
	);
}

export default Galeria;