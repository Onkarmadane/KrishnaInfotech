import React, { useEffect } from 'react';

import { MobileNavbar, Navbar } from '../Components/Nav/Nav';
import Marquee from '../Components/Marquee/Marquee';
import Footer from '../Components/Footer/Footer';
import BackToTopButton from '../Components/BackToTop/BackToTop';
import Services from '../Components/Services/Services';
import dvrImg from '../../public/imgs/dvr.webp'
import nvrImg from '../../public/imgs/nvr.webp'
import ContactOverlay from '../Components/ContactOverlay/ContactOverlay';
import CallNow from '../Components/CallNow/CallNow'
import '../../src/index.css'

const CctvDvr = {
    title: "DVR Systems",
    text: "Enhance your security with our advanced DVR systems, available in various channel configurations to meet your surveillance needs. Whether you're protecting a small business or a large facility, our DVR solutions offer unmatched reliability and clarity.",
    spectitle: "Available Channel Configurations: ",
    spec: ["4 Channel DVR: Ideal for small spaces, providing comprehensive coverage with high-resolution recording.",
        "8 Channel DVR: Perfect for medium-sized areas, offering flexible installation options.",
        "16 Channel DVR: Designed for larger properties, ensuring no corner is left unmonitored.",
        "32 Channel DVR: For extensive surveillance needs, delivering robust and scalable security solutions."],
    resolutionTitle: 'Resolution Options : ',
    resolutionSpec: ['2 Mega Pixel: Clear and detailed images, perfect for general surveillance needs.', '5 Mega Pixel: Enhanced clarity and detail for more precise monitoring.', '8 Mega Pixel: Ultra-high definition, providing superior image quality for critical areas.', '12 Mega Pixel: The ultimate in resolution, capturing the finest details even in expansive spaces.'],
    keySpecTitle: 'Key Features : ',
    keySpec: ['High-Definition Recording: Crystal-clear footage in all lighting conditions.', 'Remote Viewing: Access live and recorded video from anywhere using your smartphone or computer.', 'Motion Detection: Intelligent alerts and notifications for any suspicious activity.', 'Easy Installation: User-friendly setup with step-by-step guidance.', 'Reliable Performance: Built to last, ensuring continuous operation with minimal maintenance.']
}

const CctvNvr = {
    title: 'NVR Systems',
    text: "Elevate your security with our state-of-the-art NVR systems, offering various channel configurations to meet your surveillance needs. Whether you're securing a small business or a large facility, our NVR solutions provide unmatched reliability and clarity.",
    spectitle: 'Available Channel Configurations :',
    spec: ['4 Channel NVR: Ideal for small spaces, providing comprehensive coverage with high-resolution recording.', '8 Channel NVR: Perfect for medium-sized areas, offering flexible installation options.', '16 Channel NVR: Designed for larger properties, ensuring no corner is left unmonitored.', '32 Channel NVR: For extensive surveillance needs, delivering robust and scalable security solutions.'],
    resolutionTitle: 'Available Resolution Options',
    resolutionSpec: ['2 Mega Pixel: Clear and detailed images, perfect for general surveillance needs.', '5 Mega Pixel: Enhanced clarity and detail for more precise monitoring.', '8 Mega Pixel: Ultra-high definition, providing superior image quality for critical areas.', '12 Mega Pixel: The ultimate in resolution, capturing the finest details even in expansive spaces.'],
    keySpecTitle: 'Key Features : ',
    keySpec: ['High-Definition Recording: Crystal-clear footage in all lighting conditions.', 'Remote Viewing: Access live and recorded video from anywhere using your smartphone or computer.', 'Motion Detection: Intelligent alerts and notifications for any suspicious activity.', 'Easy Installation: User-friendly setup with step-by-step guidance.', 'Reliable Performance: Built to last, ensuring continuous operation with minimal maintenance.']
}

function CCTVServices() {
    useEffect(() => {
        document.title = 'Krishna Infotech | CCTV Services'
        AOS.refresh();
    })
    return (
        <>
            <Navbar />
            <MobileNavbar />
            <div className="container mt-5" data-aos='fade-up'>
                <div className="row align-items-center mb-4 m-2">
                    <div className="col-md-4">
                        <img src={dvrImg} alt="Image" className="img-fluid" style={{ width: '500px' }} />
                        <CallNow />
                    </div>
                    <div className="col-md-8">
                        <h1 className='text-start mx-1'><b>{CctvDvr.title}</b></h1>
                        <p>{CctvDvr.text}</p>
                        <p><b>{CctvDvr.keySpecTitle}</b></p>
                        {CctvDvr.keySpec.map((item, key) => (
                            <li>{item}</li>
                        ))}
                        <p className="d-inline-flex gap-1">
                            <a className="link-underline-dark text-black" data-bs-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample">
                                More..
                            </a>

                        </p>
                        <div className="collapse" id="collapseExample1">
                            <div className="card card-body" style={{
                                outline: 'none', border: 'none', margin: '0', padding: '0', transform: 'none', boxShadow: 'none', filter: 'none'
                            }}>
                                <p><b>{CctvDvr.resolutionTitle}</b></p>
                                {CctvDvr.resolutionSpec.map((item, key) => (
                                    <li>{item}</li>
                                ))}
                                <p><b>{CctvDvr.spectitle}</b></p>
                                {CctvDvr.spec.map((item, key) => (
                                    <li>{item}</li>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <hr className='w-75 mx-auto' data-scroll data-scroll-speed="4" data-scroll-direction="horizontal" />

                <div className="row align-items-center" data-aos='fade-up'>
                    <div className="col-md-4 order-md-2">
                        <img src={nvrImg} alt="Image" className="img-fluid" style={{ width: '500px', padding: '12%' }} />
                        <CallNow />
                    </div>
                    <div className="col-md-8">
                        <h1 className='text-start mx-1'><b>{CctvNvr.title}</b></h1>
                        <p>{CctvNvr.text}</p>
                        <p><b>{CctvNvr.keySpecTitle}</b></p>
                        {CctvNvr.keySpec.map((item, key) => (
                            <li>{item}</li>
                        ))}
                        <p className="d-inline-flex gap-1">
                            <a className="link-underline-dark text-black" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                More..
                            </a>

                        </p>
                        <div className="collapse" id="collapseExample">
                            <div className="card card-body" style={{
                                outline: 'none', border: 'none', margin: '0', padding: '0', transform: 'none', boxShadow: 'none', filter: 'none'
                            }}>
                                <p><b>{CctvNvr.resolutionTitle}</b></p>
                                {CctvNvr.resolutionSpec.map((item, key) => (
                                    <li>{item}</li>
                                ))}
                                <p><b>{CctvNvr.spectitle}</b></p>
                                {CctvNvr.spec.map((item, key) => (
                                    <li>{item}</li>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Marquee />
            {/* <Services /> */}
            <BackToTopButton />
            <ContactOverlay />
            <Footer />

        </>
    );
}

export default CCTVServices;
