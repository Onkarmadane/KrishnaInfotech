import React from 'react'
import { useEffect,useState } from 'react';
import { MobileNavbar, Navbar } from '../Components/Nav/Nav';
import Marquee from '../Components/Marquee/Marquee';
import Footer from '../Components/Footer/Footer';
import BackToTopButton from '../Components/BackToTop/BackToTop';
import Services from '../Components/Services/Services';
import ContactOverlay from '../Components/ContactOverlay/ContactOverlay';
import CallNow from '../Components/CallNow/CallNow'
import NetworkingServicesImg from '../../public/imgs/networkingServices.webp'

const NetworkingServicesData = {
    title: 'Our Networking Services',
    title1: 'Comprehensive Solutions to Keep Your Business Connected',
    intro: 'At Krishna Infotech, we specialize in providing top-tier networking services tailored to meet the unique needs of your business. Our expert team ensures that your network infrastructure is robust, secure, and scalable to support your growth and digital transformation.',
    outro: 'We are committed to providing exceptional networking services that enhance your business operations. Partner with [Your Company Name] to experience reliable, secure, and efficient networking solutions. For more information about our services or to get a custom quote, please contact us today!'

};
const data = {
    LAN:  ['Design and Implementation: We create customized LAN solutions that provide reliable and high-speed connectivity within your business premises.', 'Maintenance and Support: Our ongoing maintenance and support services ensure that your LAN operates smoothly and efficiently, minimizing downtime and disruptions.'],
    WAN: ['Secure Connectivity: Our WAN solutions connect your business locations securely and efficiently, regardless of geographical distance.', 'Scalable Solutions: We offer scalable WAN services that grow with your business, ensuring seamless communication and data transfer between your offices.'],
    CloudSolutions:  ['Advanced Cloud Solutions: We help you leverage cloud networking to enhance your business operations, providing scalable and flexible network infrastructure.', 'Support for Digital Transformation: Our cloud networking services support your journey towards digital transformation, improving agility and reducing costs.'],
    NetworkSecurity: ['Comprehensive Protection: Our network security services protect your network from threats, ensuring the safety and integrity of your data.', 'Proactive Monitoring: We provide continuous monitoring and threat detection to preemptively address potential security issues.'],
    WirelessNetworking: ['Seamless Connectivity: We design and deploy wireless networks that offer seamless connectivity and mobility within your business environment.', 'Optimized Performance: Our wireless solutions are optimized for performance and reliability, ensuring your team stays connected and productive.'],
    VPN:['Secure Remote Access: Our VPN solutions provide secure remote access for your employees, enabling them to work safely from anywhere.', 'Encryption and Privacy: We ensure that all data transmitted over the VPN is encrypted and secure, maintaining the privacy of your communications.'],
    NetworkManagementAndMonitoring: ['Proactive Management: We offer comprehensive network management services to keep your network running smoothly.', 'Real-Time Monitoring: Our real-time monitoring services detect and resolve issues quickly, ensuring maximum uptime and performance.']
  };
  const NetworkingServices = () => {

    useEffect(() => {
      document.title = 'Krishna Infotech | Networking Services'
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
              <img src={NetworkingServicesImg} alt="Image" className="img-fluid" style={{ width: '500px', borderRadius: '20px', padding: '0', margin: '0' }} />
              <CallNow />
            </div>
            <div className="col-md-8">
              <h1 className='text-start mx-1'><b>{NetworkingServicesData.title}</b></h1>
              <p>{NetworkingServicesData.title1}</p>
              <p>{NetworkingServicesData.intro}</p>
              <div>
                <nav aria-label="...">
                  <ul className="pagination pagination-sm justify-content-center m-1">
                    {Object.keys(data).map((key) => (
                      <li
                        key={key}
                        className={`page-item  ${activeKey === key ? 'active' : ''}`}
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

export default NetworkingServices