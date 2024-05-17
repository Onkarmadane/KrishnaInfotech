// Pages/CCTVServices.js
import React, { useEffect } from 'react';
import { MobileNavbar, Navbar } from '../Components/Nav/Nav';
import Marquee from '../Components/Marquee/Marquee';
import Footer from '../Components/Footer/Footer';
import BackToTopButton from '../Components/BackToTop/BackToTop';
function CCTVServices() {
    useEffect(() => {
        document.title = 'Krishna Infotech | CCTV Services'
    })
    return (
        <>
            <Navbar />
            <MobileNavbar />
            <Marquee />
            <Footer />
            <BackToTopButton/>

        </>
    );
}

export default CCTVServices;
