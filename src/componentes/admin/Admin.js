import React from "react";
import Carousel from "../carousel/Carousel";
import "./admin.css";

/* icons */
import { BiUser } from 'react-icons/bi';
/*import { FiUserPlus } from 'react-icons/fi';*/
import { IoIosNotifications } from 'react-icons/io';
import { FiFile } from 'react-icons/fi';
import Carga from "./Carga";

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
                            Artistas
                        </a>

                        <a href="">
                            <IoIosNotifications className="icon-admin-link" />
                            Nosotros
                        </a>

                      {/*   <a href="">
                            <BiUser className="icon-admin-link" />
                            Sign In
                        </a>
                        <a href="">
                            <BiUser className="icon-admin-link" />
                            Sign Up
                        </a>*/}
                        <a href="">
                            {/*<FiUserPlus className="icon-admin-link" />*/}
                            Sign Out
                        </a> 
                    </div>


                </aside>

                <div>
                   
                    <Carga/>
                </div>
            </section>



        </>
    );
};

export default Admin;
