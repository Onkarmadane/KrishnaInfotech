import React, { useEffect } from 'react'
import { Navbar, MobileNavbar } from '../Components/Nav/Nav';
import Services from '../Components/Services/Services'
import ContactOverlay from '../Components/ContactOverlay/ContactOverlay';
import Marquee from '../Components/Marquee/Marquee';
import Footer from '../Components/Footer/Footer';
import BackToTop from '../Components/BackToTop/BackToTop'
const Servicespage = () => {
  useEffect(()=>{
    document.title = 'Krishna Infotech | Services'
  })
  return (
    <>
<Navbar/>
<MobileNavbar/>
<Services />
<ContactOverlay />
<Marquee />
<Footer />
<BackToTop/>
    </>
  )
}

export default Servicespage; 