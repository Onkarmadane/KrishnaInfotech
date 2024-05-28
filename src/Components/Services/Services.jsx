import React from "react";
import '../../../src/index.css';
import { useEffect } from "react";
import cctvImg from '../../../public/imgs/cctv vector.webp';
import biometricImg from '../../../public/imgs/biometric.webp';
import ITImg from '../../../public/imgs/computer.webp';
import networkingImg from '../../../public/imgs/networking.webp';
// import mobBoosterImg from '../../../public/imgs/Mobile Network Booster.webp';
// import onSiteServiceImg from '../../../public/imgs/on site service.webp';
import goldMachineImg from '../../../public/imgs/goldWeightingMachine.webp'
import './Services.css'
import { Routes, Route, Outlet, Link } from 'react-router-dom';

// import { Link } from "react-router-dom";


function Card({ imageSrc, title, link }) {

  return (
    <div className="card">
      <img className="card-img-top m-3 mx-auto" loading="lazy" src={imageSrc} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title text-center"><b>{title}</b></h5>
        <button type="button" className="btn btn-primary more hvr-ripple-in"><Link to={link}>Click For More</Link></button>
      </div>
    </div>
  );
}

function Services() {
  return (
    <>
      <h1 className='bolder mt-4'><b>Our Services</b></h1>
      <div className="line"></div>
      <div className="card-group w-75 mx-auto">
        <Card
          imageSrc={cctvImg}
          title="CCTV Services"
          link='/cctv-services'
        />
        <Card
          imageSrc={biometricImg}
          title="Biometric Controllers"
          link='/biometrics-services'
        />
        <Card
          imageSrc={ITImg}
          title="IT Managment"
          link='/itmanagment-services'
        />
      </div>
      <div className="card-group w-75 mx-auto">
        <Card
          imageSrc={networkingImg}
          title="Networking"
          link='/networking-services'
        />
        <Card
          imageSrc={goldMachineImg}
          title="Gold Weighting Machine"
          link='/goldmachine-services'

        />
        {/* <Card
          imageSrc={onSiteServiceImg}
          title="On Site Services"
        /> */}
      </div>
      <Outlet />
    </>
  )
}

export default Services