import React, { useEffect } from 'react'
import { Navbar, MobileNavbar } from '../Components/Nav/Nav';
import Carousel from '../Components/Carousel/Carousel';
import Intro from '../Components/Intro/Intro';
import WeProvide from '../Components/WeProvide/WeProvide';
import Vision from '../Components/Vision/Vision';
import ContactOverlay from '../Components/ContactOverlay/ContactOverlay';
import Footer from '../Components/Footer/Footer';
const Home = () => {
useEffect(()=>{
    document.title ='Krishna Infotech | Home'
})
    return (
        <>
            <Navbar />
            <MobileNavbar />
            <Carousel />
            <Intro />
            <WeProvide />
            <Vision />
            <ContactOverlay />
            <Footer />

        </>
    )
}

export default Home