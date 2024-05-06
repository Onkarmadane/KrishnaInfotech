import React from 'react';
import '../../../src/index.css';
import styles from './Nav.module.css';
import logoImg from '../../../public/imgs/logo.webp'
const Navbar = () => {
  return (
    <div className="desk-nav">
      <nav className='navbar sticky-top navbar-expand-lg navbar-light bg-light'>
        <a className="navbar-brand mx-2" to="index.html">
          <img src={logoImg} id="KI" alt="logo" />
        </a>
        {/* <h1 className="logo"><b>Krishna <span>Infotech</span></b></h1> */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Navigation links */}
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav text-end">
            <li className="nav-item">
              <a className='nav-link active' to="index.html">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" to="services.html">Our Services</a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" to="about.html">About Us</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

const MobileNavbar = () => {
  return (
    <div>
      <div className="mob-head">
        <h1 className="logo">
          <a className="navbar-brand" to="index.html">
            <img src="./assets/imgs/logo.webp" id="KI" alt="logo" />
          </a>
          <b>Krishna <span>Infotech</span></b>
        </h1>
      </div>
      <div id="mob-nav">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link active" to="./index.html">
              <i className="fas fa-home fa-fade" style={{ '--fa-animation-duration': '2s', '--fa-fade-opacity': 0.6 }}></i>
              <p>Home</p>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" to="./services.html">
              <i className="fa-solid fa-cogs fa-duotone"></i>
              <p>Our Services</p>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" to="./about.html">
              <i className="fa-solid fa-circle-info"></i>
              <p>About Us</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { Navbar, MobileNavbar };
