import React, { useEffect } from 'react'
import { Navbar, MobileNavbar } from '../Components/Nav/Nav';
import Services from '../Components/Services/Services'
import ContactOverlay from '../Components/ContactOverlay/ContactOverlay';
import Footer from '../Components/Footer/Footer';
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
<Footer />
    </>
  )
}

export default Servicespage; 