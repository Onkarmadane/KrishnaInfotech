import React, { useEffect } from 'react'
import { Navbar, MobileNavbar } from '../Components/Nav/Nav';
import About from '../Components/About/About'
import ContactOverlay from '../Components/ContactOverlay/ContactOverlay';
import Footer from '../Components/Footer/Footer';
const AboutPage = () => {
    useEffect(()=>{
        document.title = 'Krishna Infotech | About us'
    })
  return (
    <>
<Navbar/>
<MobileNavbar/>
<About/>
<ContactOverlay />
<Footer/>

    </>
  )
}

export default AboutPage