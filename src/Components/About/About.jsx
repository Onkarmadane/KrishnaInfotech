import React from 'react'
import KIImg from '../../../public/imgs/logo1.webp';
import VikImg from '../../../public/imgs/vikrant.webp';

const About = () => {
    return (
        <>
            <h1 className='bolder mt-4'><b>About us</b></h1>
    <div className="line"></div>
            <div className="vik" data-aos="fade-up">
                <img loading="lazy" src={VikImg} alt="Vikrant" />
                <br /><br />
            </div>
            <div className="container" data-aos="fade-up">
                <p id="about"><b>Krishna Infotech</b> is a proprietary company. Founded in the 2011 by Vikrant Madane, the company is registered Krishna Infotech, Thane. Mr. Vikrant is the Manager and owner of <b>Krishna Infotech <img src={KIImg} alt="KILOGO" height="30px" width="40px" /></b></p>
                <p id="about" data-aos="fade-up"><b>Mr. Vikrant Madane</b><br />
                    Head Customer Service Support
                    Krishna Infotech<br />
                    Badlapur (E), Thane<br />
                    Mobile: +91-8419989089<br />
                    WhatsApp: +91-9819557374<br />
                    Email – vikrant2005@gmail.com <br />
                    <b>GSTN :- 27AOAPM2539L1ZR</b>
                </p>

                <div className="checkmark">
                    <li><i className="fa fa-check-circle text-danger me-3"></i>Award Winning</li>
                    <li><i className="fa fa-check-circle text-danger me-3"></i>Professional Staff</li>
                    <li><i className="fa fa-check-circle text-danger me-3"></i>Trusted Service</li>
                    <li><i className="fa fa-check-circle text-danger me-3"></i>Fair Prices</li>
                </div>
            </div>
        </>
    )
}

export default About;