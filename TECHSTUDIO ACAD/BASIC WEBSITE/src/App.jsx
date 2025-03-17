import { useState } from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import FeaturedCars from './components/FeaturedCars'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import './App.css'

function App() {

  return (
    <div>
      <NavBar/>
      <Hero/>
      <FeaturedCars/>
      <ScrollToTop/>
      <Footer/>


    </div>
  )
}

export default App