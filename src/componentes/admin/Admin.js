import React from "react";
import Carousel from "../carousel/Carousel";
import "./admin.css";

/* icons */
import { BiUser } from 'react-icons/bi';
import { FiUserPlus } from 'react-icons/fi';
import { IoIosNotifications } from 'react-icons/io';
import { FiFile } from 'react-icons/fi';

const Admin = () => {
    return (
        <>
            {/*********** Banner **************/}

            {/* <Carousel /> */}
            <div className="relleno"></div>
            <div className="pru"></div>
            <section className="box-admin ">

                <aside>
                    <p> Administrador </p>

                    <div className="admin-link ">
                        <a href="">
                            <FiFile className="icon-admin-link" />
                            Eventos
                        </a>
                        <a href="">
                            <IoIosNotifications className="icon-admin-link" />
                            Notificaciones
                        </a>

                        <a href="">
                            <BiUser className="icon-admin-link" />
                            Sign In
                        </a>
                        <a href="">
                            <BiUser className="icon-admin-link" />
                            Sign Up
                        </a>
                        <a href="">
                            <FiUserPlus className="icon-admin-link" />
                            Sign Out
                        </a>
                    </div>


                </aside>

                <div>
                    <p>
                        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                            Toggle width collapse
                        </button>
                    </p>
                    <h1>Aqui va el contenido</h1>
                </div>
            </section>



            <div style={{ height: "120px" }}>
                <div class="collapse collapse-horizontal" id="collapseWidthExample">
                    <div class="card card-body" style={{ width: "300px" }}>
                        This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.
                    </div>
                </div>
            </div>

            <nav class="navbar flex-column navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled">Disabled</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>

        </>
    );
};

export default Admin;
