import React from 'react'
import "./Home.css"
import Banner from './Components/Banner'
import About from './Components/HomeAbout'
import Services from './Components/Services'
import HomeReviews from './Components/HomeReviews'


function Home() {
  return (
    <div>
        <Banner></Banner>
        <About></About>
        <Services></Services>
        <HomeReviews></HomeReviews>
    </div>
  )
}

export default Home