import React from 'react'
import { Navbar } from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import './index.css';
import Carousel from './Components/Carousel/Carousel'
import Intro from './Components/Intro/Intro';
import WeProvide from './Components/WeProvide/WeProvide'
import Vision from './Components/Vision/Vision'
import Services from './Components/Services/Services';
const App = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <Intro />
      <WeProvide />
      <Vision />
      <Services />
      <Footer />
    </>
  )
}

export default App