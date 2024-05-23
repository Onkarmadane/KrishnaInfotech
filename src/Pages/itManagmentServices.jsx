import React, { useState, useEffect } from 'react';
import { MobileNavbar, Navbar } from '../Components/Nav/Nav';
import Marquee from '../Components/Marquee/Marquee';
import Footer from '../Components/Footer/Footer';
import BackToTopButton from '../Components/BackToTop/BackToTop';
import Services from '../Components/Services/Services';
import computerImg from '../../public/imgs/computerServices .webp';
import ContactOverlay from '../Components/ContactOverlay/ContactOverlay';
import CallNow from '../Components/CallNow/CallNow'
import '../../src/index.css'

const ItManagment = {
  title: 'Ultimate Custom PC Configurations for Sale!',
  introTitle: 'Choose Your Perfect Setup',
  intro: 'Unleash the Power with Our Tailored PC Configurations – Crafted to meet every need, from casual browsing to intense gaming and professional workstations. Customize your dream PC today!',
}


const data = {
  Processor: ['Intel Core i3 – Efficient and Reliable',
    'Intel Core i5 – Balanced Performance',
    'Intel Core i7 – Advanced Capabilities',
    'Intel Core i9 – Ultimate Power'],
  RAM: ['4GB – Basic Computing', '8GB – Smooth Multitasking', '16GB – For Power Users', '32GB – Extreme Performance'],
  HDD: ['1TB', '2TB', '4TB', '8TB'],
  SSD: [
    "A Solid State Drive (SSD) is a storage device that uses integrated circuit assemblies.",
    "SSDs are faster than HDDs.",
    "They have no moving parts, which makes them more durable."
  ],
  GraphicsCard: ['4GB – Entry-Level Gaming', '8GB – Smooth Gameplay', '16GB – High-Resolution Performance', '32GB – Unmatched Visual Power'],
  Cabinets: ['Simple – Sleek and Compact', 'Cooler Master – Efficient Cooling', 'Gaming Cabinet – Stunning Aesthetics'],
  KeyboardAndMouse: ['Gaming – Precision and Speed', 'Regular – Everyday Comfort', 'Mechanical – Superior Tactile Feedback']
};


const itManagmentServices = () => {

  useEffect(() => {
    document.title = 'Krishna Infotech | IT Services'
  })
  const [activeKey, setActiveKey] = useState(null); // Initially no item is active

  const handleClick = (key) => {
    setActiveKey(key);
  };

  return (
    <>
      <Navbar />
      <MobileNavbar />
      <div className="container mt-5" data-aos='fade-up' >
        <div className="row align-items-center mb-4 m-2">
          <div className="col-md-4">
            <img src={computerImg} alt="Image" className="img-fluid" style={{ width: '500px', borderRadius: '20px', padding: '0', margin: '0' }} />
            <CallNow />
          </div>
          <div className="col-md-8">
            <h1 className='text-start mx-1'><b>{ItManagment.title}</b></h1>
            <p>{ItManagment.introTitle}</p>
            <p>{ItManagment.intro}</p>
            <div>
              <nav aria-label="...">
                <ul className="pagination pagination-sm justify-content-center ">
                  {Object.keys(data).map((key) => (
                    <li
                      key={key}
                      className={`page-item m-1 ${activeKey === key ? 'active' : ''}`}
                      aria-current={activeKey === key ? 'page' : undefined}
                    >
                      <a
                        className="page-link"
                        href={`#${key}`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleClick(key);
                        }}
                      >
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              {activeKey && (
                <ul className="content-list">
                  {data[activeKey].map((item, index) => (
                    <li key={index} className="fade-in">{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
      <Marquee />
      <Services />
      <BackToTopButton />
      <ContactOverlay />
      <Footer />

    </>

  );
};

export default itManagmentServices;
