import React from 'react';
import { motion } from 'framer-motion';
import './Marquee.css';

// Import your images
import adLogo from '../../../public/imgs/logos/A&D.webp';
import acerLogo from '../../../public/imgs/logos/acer.webp';
import asusLogo from '../../../public/imgs/logos/asus.webp';
import contechLogo from '../../../public/imgs/logos/contech.webp';
import cpPlusLogo from '../../../public/imgs/logos/cp_plus.webp';
import dahuaLogo from '../../../public/imgs/logos/dahua.webp';
import dellLogo from '../../../public/imgs/logos/dell.webp';
import esslLogo from '../../../public/imgs/logos/essl.webp';
import hikvisionLogo from '../../../public/imgs/logos/hikvision.webp';
import hpLogo from '../../../public/imgs/logos/hp.webp';
import iballLogo from '../../../public/imgs/logos/iball.webp';
import libraLogo from '../../../public/imgs/logos/libra.webp';
import matrixLogo from '../../../public/imgs/logos/matrix.webp';
import meterLogo from '../../../public/imgs/logos/meter.webp';
import samsungLogo from '../../../public/imgs/logos/samsung.webp';
import skylinkLogo from '../../../public/imgs/logos/skylink.webp';
import sonyLogo from '../../../public/imgs/logos/sony.webp';
import syntelLogo from '../../../public/imgs/logos/syntel.webp';

const images = [
  syntelLogo,
  sonyLogo,
  skylinkLogo,
  samsungLogo,
  meterLogo,
  matrixLogo,
  libraLogo,
  iballLogo,
  hpLogo,
  hikvisionLogo,
  esslLogo,
  dellLogo,
  dahuaLogo,
  cpPlusLogo,
  contechLogo,
  asusLogo,
  acerLogo,
  adLogo
];


const Marquee = () => {
  return (
    <>
      <h1 className='bolder mt-4' data-aos="fade-up"><b>Brands We Deal With</b></h1>
      <div className="line mb-5" data-aos="fade-up"></div>
      <div className="marquee-container w-75 mx-auto">
      <marquee behavior="scroll"  scrollamount="7"  data-aos="fade-up" className="marquee ">
            <img src={adLogo} alt="" loading='Lazy' />
            <img src={hpLogo} alt="" loading='Lazy'  style={{width:"100px"}} />
            <img src={acerLogo} alt="" loading='Lazy' />
            <img src={asusLogo} alt="" loading='Lazy' />
            <img src={dellLogo} alt="" loading='Lazy'  style={{width:"150px"}} />
            <img src={esslLogo} alt="" loading='Lazy' />
            <img src={sonyLogo} alt="" loading='Lazy' />
            <img src={dahuaLogo} alt="" loading='Lazy' />
            <img src={iballLogo} alt="" loading='Lazy'  style={{width:"100px"}}/>
            <img src={meterLogo} alt="" loading='Lazy' />
            <img src={libraLogo} alt="" loading='Lazy' />
            <img src={matrixLogo} alt="" loading='Lazy' />
            <img src={syntelLogo} alt="" loading='Lazy' />
            <img src={contechLogo} alt="" loading='Lazy' />
            <img src={samsungLogo} alt="" loading='Lazy' />
            <img src={skylinkLogo} alt="" loading='Lazy' />
            <img src={hikvisionLogo} alt="" loading='Lazy' />
          </marquee>
          </div> 
    </>
  );
};

export default Marquee;
