import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Home from './Pages/home';
import ServicesPage from './Pages/servicespage';
import AboutPage from './Pages/aboutpage';
import CCTVServices from './Pages/cctvServices';

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route index path='/' element={<Home/>}/>
        <Route path='/servicespage' element={<ServicesPage/>}/>
        <Route path='/AboutPage' element={<AboutPage/>} />
        <Route path="/cctv-services" element={<CCTVServices />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App