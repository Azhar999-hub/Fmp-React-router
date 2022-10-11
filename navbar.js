import React from "react";
import { NavLink } from "react-router-dom";
import img1 from '../images/logo-icecream.png'
import img2 from '../images/Capture2.PNG'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top pt-1 pb-1 parent">
    <div className="container-fluid">
        <NavLink className="navbar-brand ps-1" href="#"> <img className="img-fluid" src={img1} alt=""
                width="50px" height="30px" />
            <img src={img2} className="img-fluid" alt="" width="200px" height="60px" /> </NavLink>
        <button className="navbar-toggler icon" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto me-3  mb-lg-0 link">
                <li className="nav-item">
                    <NavLink to="/" className="nav-link" href="index.html">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" className="nav-link" href="pages/about.html">About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/food" className="nav-link" href="pages/food.html">Food</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/menu" className="nav-link" href="pages/menu.html">Menu</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact" className="nav-link" href="pages/contact.html">Contact</NavLink>
                </li>
                <li className="nav-item cart">
                    <NavLink to="/order" className="nav-link" href="pages/order.html">Order</NavLink>
                </li>
            </ul>
        </div>
    </div>
</nav>

    // <nav >
    //   <div classNameName="menuIcon">
    //     <ul classNameName="navbar-list">
    //       <li>
    //         <NavLink to="/">Home</NavLink>
    //       </li>
    //       <li>
    //         <NavLink to="/about">About</NavLink>
    //       </li>
    //       <li>
    //         <NavLink to="/contact">Contact</NavLink>
    //       </li>
    //       <li>
    //         <NavLink to="/services">Services</NavLink>
    //       </li>
    //       <li>
    //         <NavLink to="/skills">Skils</NavLink>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
  );
};
