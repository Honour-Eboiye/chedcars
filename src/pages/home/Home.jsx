import React from 'react'
import Hero from './Hero'
import FeaturedCars from './FeaturedCars'
import ScrollToTop from './ScrollToTop'


const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <FeaturedCars></FeaturedCars>
      <ScrollToTop></ScrollToTop>
    </div>
  )
}

export default Home