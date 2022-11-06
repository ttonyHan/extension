import React from "react";
import "./header.css";
import Home from "../home/home"
import About from "../about/about";
import { NavLink,Link } from "react-router-dom";
import logo from "../../img/logo-social.png"

const header=()=>{
    return(
        <div>        
            <nav className="header">       
                <ul>
                    <li><a><Link to='/'><img  className ="logo_img"src={logo}/></Link></a></li>
                    <li><a><Link to='/about'>About</Link></a></li>
                    <li><a><Link to='/profile'>Profile</Link></a></li>
                </ul>
                <div className="header_buttom">

                </div>
            </nav>
        </div>
        
    )
} 

export default header;