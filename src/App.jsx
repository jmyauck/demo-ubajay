import './App.css';
import React from 'react';
import Footer from './components/Footer/Footer'
import Card from './components/Cards/Cards';
import Hero from './components/Hero/Hero';
import About  from './components/AboutUs/AboutUs';


function App() {
  return (

    <div className='app-style'>
      <Hero />
      <About />
      <Footer />
    </div>
  )
}

export default App;
