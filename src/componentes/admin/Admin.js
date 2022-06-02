import React from "react";
import Carousel from "../carousel/Carousel";
import "./admin.css";

/* icons */
import { BiUser } from 'react-icons/bi';
/*import { FiUserPlus } from 'react-icons/fi';*/
import { IoIosNotifications } from 'react-icons/io';
import { FiFile } from 'react-icons/fi';


import Header from "./Header"
import Aside from "./Aside"
import Content from "./Content";
import Footer from "./Footer";

const Admin = () => {
    return (
        <>
            {/*********** Banner **************/}

            {/* <Carousel /> */}
            <div className="relleno"></div>
            <div className="hold-transition sidebar-mini all-admin">
                <div className="wrapper">
                    <h1>texto</h1>
                  
                  <Header/>
                 <Aside />
           <Content/> 
                {/* <Footer/> */}

                </div>
            </div>


        </>
    );
};

export default Admin;
