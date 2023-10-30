import React from 'react'
import junkCars from "../Images/junkCars.jpg" 
import "./SellYourCar.css"

function SellYourCar() {
  return (
    <div className='pageOuter'>
        <div className='pageInner'>      
            <h1>Sell Us Your Car</h1>
            <h3>We are willing to buy cars in any condition.</h3>
            <p className='sellPageP'>
                Wether you have a car that is only a few years old or a car that is not running at all we may be willing to make an offer.                
                Contact us today to get an offer on your used vehicle. We will make a fair offer based on the year, make, model, mileage, and general condition of the car.
                Market values vary so to get a quote please speak with one of our authorized repersentatives.  
            </p>
            <h3>
              Contact us today at Contact@OcalaAutoCare.com
            </h3>
            <div className='headerImage'>
                <img src={junkCars}></img>
            </div>
        </div>
    </div>
  )
}

export default SellYourCar