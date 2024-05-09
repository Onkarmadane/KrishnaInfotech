import React from 'react';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import '../../../src/index.css';
// import styles from './Nav.module.css';
import logoImg from '../../../public/imgs/logo.webp'
const Navbar = () => {
  return (
    <>
    <div className="desk-nav">
      <nav className="navbar navbar-expand-lg navbar-dark m-0">
        <div className="container">

          <ul className="navbar-nav mr-auto ">
            <li className="nav-item">
              <NavLink className="nav-link " to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/servicespage">Services</NavLink>
            </li>
          </ul>
          <NavLink className="navbar-brand logo_area" to="/">
            <img src={logoImg} id="KI" alt="logo" />
          </NavLink>
         <ul className="navbar-nav ml-auto">
            {/* <li className="nav-item">
              <NavLink className="nav-link" to="/products">Products</NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/aboutpage">About Us</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      
    </div>
<Outlet/>
</>
  );
};

const MobileNavbar = () => {
  
  return (
    <>
    <div>
      <div className="mob-head">
        <h1 className="logo">
          <NavLink className="navbar-brand" to="/">
            <img src={logoImg} id="KI" className=' p-2 mx-auto' alt="logo" />
          </NavLink>
          {/* <b>Krishna <span>Infotech</span></b> */}
        </h1>
      </div>
      <div id="mob-nav">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              <i className="fas fa-home " style={{ '--fa-animation-duration': '2s', '--fa-fade-opacity': 0.6 }}></i>
              <p>Home</p>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/servicespage">
              <i className="fa-solid fa-cogs fa-duotone"></i>
              <p>Our Services</p>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/aboutpage">
              <i className="fa-solid fa-circle-info"></i>
              <p>About Us</p>
            </NavLink>
          </li>
          {/* <li className="nav-item">
            <NavLink className="nav-link" to="/productpage">
            <i className="fas fa-box-open animated-icon"></i>
              <p>Products</p>
            </NavLink>
          </li> */}
        </ul>
      </div>
    </div>
    <Outlet/>
    </>
  );
};

export { Navbar, MobileNavbar };
