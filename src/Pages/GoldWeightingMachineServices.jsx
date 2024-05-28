import React from 'react';
import { MobileNavbar, Navbar } from '../Components/Nav/Nav';
import Marquee from '../Components/Marquee/Marquee';
import Footer from '../Components/Footer/Footer';
import BackToTopButton from '../Components/BackToTop/BackToTop';
import Services from '../Components/Services/Services';
import goldWeighingImg from '../../public/imgs/goldWeightingMachine.webp'
import ContactOverlay from '../Components/ContactOverlay/ContactOverlay';
import ProductGallery from '../Components/ProductGallery/ProductGallery';
import CallNow from '../Components/CallNow/CallNow'
// import Img1 from '../../public/imgs/Picture1.webp'
// import Img2 from '../../public/imgs/Picture2.webp'
// import Img3 from '../../public/imgs/Picture3.webp'
// import Img4 from '../../public/imgs/Picture4.webp'
// import Img5 from '../../public/imgs/Picture5.webp'
import { useEffect } from 'react';

const GoldWeighting = {
    title: 'High Precision Gold Weighing Machine',
    descTitle: 'Description :',
    desc: 'Discover precision and reliability with our high precision gold weighing machine, designed specifically for jewelers and gold traders. Engineered with the latest technology, our gold weighing machine ensures accurate measurements, helping you conduct your business with confidence and trust.',
    keyFeaturesTitle: 'Key Features :',
    Features: ['High Accuracy: Achieve precise measurements with a sensitivity of 0.01 grams.', 'Durable Build: Crafted from high-quality materials to ensure long-lasting performance.', 'Compact Design: Sleek and compact, fitting comfortably in any workspace.', 'Easy-to-Read Display: Bright LCD screen with backlight for easy reading in all lighting conditions.', 'Multi-Unit Conversion: Switch effortlessly between grams, carats, ounces, and more.', 'Tare Function: Easily subtract the weight of containers or trays for net weight calculations.', 'Overload Protection: Built-in system to prevent damage from excessive weight.', 'Automatic Calibration: Ensures consistent accuracy with self-calibrating technology.', 'Power Options: Operates on both batteries and AC adapter for convenience.', 'Portability: Lightweight and portable, making it easy to carry for on-the-go use.'],
    SpecTitle: 'Specifications :',
    spec: ['Capacity: 0.01 grams to 3000 grams (3 kilograms)', 'Display: LCD with backlight']
}

const GoldWeightingMachineServices = () => {
    useEffect(() => {
        document.title = 'Krishna Infotech | Gold Weighing Machines'
        AOS.refresh();
    })
    return (
        <>
            <Navbar />
            <MobileNavbar />
            <div className="container mt-5" data-aos='fade-up'>
                <div className="row align-items-center mb-4 m-2">
                    <div className="col-md-4">
                        <img src={goldWeighingImg} alt="Image" className="img-fluid" style={{ width: '500px' }} />
                        <CallNow />
                    </div>
                    <div className="col-md-8">
                        <h1 className='text-start mx-1'><b>{GoldWeighting.title}</b></h1>
                        <p></p>
                        <p><b>{GoldWeighting.descTitle}</b></p>
                        <p>{GoldWeighting.desc}</p>
                        <p className="d-inline-flex gap-1">
                            <a className="link-underline-dark text-black" data-bs-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample">
                                More..
                            </a>

                        </p>
                        <div className="collapse" id="collapseExample1">
                            <div className="card card-body" style={{
                                outline: 'none', border: 'none', margin: '0', padding: '0', transform: 'none', boxShadow: 'none', filter: 'none'
                            }}>
                                <p><b>{GoldWeighting.keyFeaturesTitle}</b></p>
                                {GoldWeighting.Features.map((item, key) => (
                                    <li>{item}</li>
                                ))}

                                <p><b>{GoldWeighting.SpecTitle}</b></p>
                                {GoldWeighting.spec.map((item, key) => (
                                    <li>{item}</li>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ProductGallery/>
            <Marquee />
            {/* <Services /> */}
            <BackToTopButton />
            <ContactOverlay />
            <Footer />
        </>
    )
}

export default GoldWeightingMachineServices;