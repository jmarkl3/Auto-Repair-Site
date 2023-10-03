import React from 'react'
import "./Home.css"
import Banner from './Components/Banner'
import About from './Components/About'
import Services from './Components/Services'
import Reviews from './Components/Reviews'

function Home() {
  return (
    <div>
        <Banner></Banner>
        <About></About>
        <Services></Services>
        <Reviews></Reviews>
    </div>
  )
}

export default Home