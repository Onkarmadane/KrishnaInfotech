import React, { useEffect } from 'react';
import { MobileNavbar, Navbar } from '../Components/Nav/Nav';
import Marquee from '../Components/Marquee/Marquee';
import Footer from '../Components/Footer/Footer';
import BackToTopButton from '../Components/BackToTop/BackToTop';
import Services from '../Components/Services/Services';
import epabxImg from '../../public/imgs/epabx.webp';
import '../../src/index.css'

const Biometrics = {
  title: "Biometric Security Solutions",
  text: "Streamline Access Control with Our Advanced Biometric Systems",
  spectitle: "Explore Our Range of Biometric Devices : ",
  spectitleThumb: 'THUB Only',
  Featurestitle: 'Features : ',
  FeaturesThumb: ['High-precision thumbprint recognition', 'Fast and accurate authentication', 'Ideal for small to medium-sized businesses'],
  ThumbWithCardTitle: 'THUB with Card : ',
  FeaturesThumbWithCard: ['Thumbprint and card-based authentication.', 'Enhanced security with dual verification.', 'Easy integration with existing card systems'],
  ThumbWithFaceTitle: 'THUB and Face',
  FeaturesThumbWithFace: ['Dual biometric authentication: thumbprint and facial recognition', 'Superior accuracy and security.', 'Perfect for high-security environments'],
  ThumbFaceWithAdharTitle: 'THUB, Face with Aadhaar Number',
  FeaturesThumbFaceWithAdhar: ['Triple authentication: thumbprint, facial recognition, and Aadhaar number.', 'Unmatched security for sensitive areas', 'Compliance with government standards'],
  KeyBenifitsTitle:'Key Benifits',
  KeyBenifits: ['Supports More Than 1000 Users: Manage access for a large number of employees efficiently.', 'Multiple Authentication Methods: Choose from thumbprint, password, card, or face recognition for versatile security options.', 'EM Lock Support: Seamless integration with electromagnetic locks for secure entry and exit.', 'Remote Unlocking: Unlock doors remotely with relay support, adding convenience and control.']
}


function BiometricsServices() {
  useEffect(() => {
    document.title = 'Krishna Infotech | Biometrics Services'
  })
  return (
    <>
      <Navbar />
      <MobileNavbar />
      <div className="container mt-5" data-aos='fade-up' >
        <div className="row align-items-center mb-4 m-2">
          <div className="col-md-4">
            <img src={epabxImg} alt="Image" className="img-fluid" style={{ width: '500px' }} />
          </div>
          <div className="col-md-8">
            <h1 className='text-start mx-1'><b>{Biometrics.title}</b></h1>
            <p>{Biometrics.text}</p>
            <p><b>{Biometrics.spectitle}</b></p>
            <p><b>{Biometrics.spectitleThumb}</b></p>
            <p>{Biometrics.Featurestitle}</p>
            {Biometrics.FeaturesThumb.map((item, key) => (
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
                <p><b>{Biometrics.ThumbWithFaceTitle}</b></p>
                <p>{Biometrics.Featurestitle}</p>
                
                {Biometrics.FeaturesThumbWithFace.map((item, key) => (
                  <li>{item}</li>
                ))}
                <p><b>{Biometrics.ThumbFaceWithAdharTitle}</b></p>
                <p>{Biometrics.Featurestitle}</p>
                {Biometrics.FeaturesThumbFaceWithAdhar.map((item, key) => (
                  <li>{item}</li>
                ))}
                <p>{Biometrics.KeyBenifitsTitle}</p>
                {Biometrics.KeyBenifits.map((item, key) => (
                  <li>{item}</li>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Marquee />
      <Services />
      <Footer />
      <BackToTopButton />

    </>
  );
}

export default BiometricsServices;
