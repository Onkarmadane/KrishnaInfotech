import React from "react";
import '../../../src/index.css';
import cctvImg from '../../../public/imgs/cctv vector.webp';
import biometricImg from '../../../public/imgs/biometric.webp';
import ITImg from '../../../public/imgs/computer.webp';
import networkingImg from '../../../public/imgs/networking.webp';
import mobBoosterImg from '../../../public/imgs/Mobile Network Booster.webp';
import onSiteServiceImg from '../../../public/imgs/on site service.webp';
import './Services.css'
// import { Link } from "react-router-dom";


function Card({ imageSrc, title, link }) {
  return (
    <div className="card">
      <img className="card-img-top m-3 mx-auto" loading="lazy" src={imageSrc} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title text-center"><b>{title}</b></h5>
        <button type="button" className="btn btn-primary more hvr-ripple-in"><a  href={link}>Click For More</a></button>
      </div>
    </div>
  );
}

function Services() {
  return (
    <>
      <h1 className='bolder mt-4' data-aos="fade-up"><b>Our Services</b></h1>
      <div className="line" data-aos="fade-up"></div>
      <div className="card-group w-75 mx-auto" data-aos="fade-up">
        <Card
          imageSrc={cctvImg}
          title="CCTV Services"
          link='/cctv-services'
        />
        <Card
          imageSrc={biometricImg}
          title="Biometric Controllers"
        />
        <Card
          imageSrc={ITImg}
          title="IT Managment"
        />
      </div>
      <div className="card-group w-75 mx-auto" data-aos="zoom-in">
        <Card
          imageSrc={networkingImg}
          title="Networking"
        />
        <Card
          imageSrc={mobBoosterImg}
          title="Mobile Network Boosters"

        />
        <Card
          imageSrc={onSiteServiceImg}
          title="On Site Services"
        />
      </div>
    </>
  )
}

export default Services