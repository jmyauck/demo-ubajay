import './App.css';
import React from 'react';
import Footer from './components/Footer/Footer'
import Card from './components/Cards/Cards';
import About from './components/AboutUs/AboutUs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Multifamiliares } from './pages/ViviendasMultifamiliares/ViviendasMultifamiliares'
import { useContext } from 'react';
import { ModalContext } from './contexts/background-image.context';
import { useEffect } from 'react';
import { SectionBannerLoteoSM } from './components/SectionBannerLoteoSM/SectionBannerLoteoSM';
import { ContactSection } from './components/ContactSection/ContactSection'
import AOS from 'aos'
import 'aos/dist/aos.css'


function App() {
  const { setClassName } = useContext(ModalContext)

  useEffect(() => {
    setClassName('background-image-1')
  }, [])




  return (

    <div className='app-style'>
      <div className='section-container'>
        <Card exact path={'/section/:id'} />
        <About />
        <SectionBannerLoteoSM />
        <ContactSection />
        <Footer />
      </div>
    </div>

  )
}

export default App;
