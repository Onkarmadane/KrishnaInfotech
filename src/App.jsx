import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Home from './Pages/home';
import ServicesPage from './Pages/servicespage';
import AboutPage from './Pages/aboutpage';
import CCTVServices from './Pages/cctvServices';
import BiometricsServices from './Pages/BiometricsServices';
import ItManagment from './Pages/itManagmentServices';
import GoldWeightingMachineServices from './Pages/GoldWeightingMachineServices';

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route index path='/' element={<Home/>}/>
        <Route path='/servicespage' element={<ServicesPage/>}/>
        <Route path='/AboutPage' element={<AboutPage/>} />
        <Route path="/cctv-services" element={<CCTVServices /> } />
        <Route path="/biometrics-services" element={<BiometricsServices />} />
        <Route path="/itmanagment-services" element={<ItManagment/>}/>
        <Route path="/goldmachine-services" element={<GoldWeightingMachineServices/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App