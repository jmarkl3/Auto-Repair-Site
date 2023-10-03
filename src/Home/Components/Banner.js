import React from 'react'
import carRepairIcon from "../../Images/carRepairIcon.png"
import EngineIcon from "../../Images/EngineIcon.png"
import carCheckIcon from "../../Images/carCheckIcon.png"
import maintenanceIcon from "../../Images/MaintanceIcon.png"

function Banner() {
  return (
    <div className='banner'>
      <img className='bannerImg' src='http://www.dallascarcare.com/images/slide2.jpg'></img>
      <div className='bannerTextBox'>
        <h1>Auto Repair You Can Count On!</h1>
        <p>
          Dalace Car Care is a full service auto repair and auto body facility located in East Dallas Texas.
          It is our goal to get you moving down the road safely at a price you can afford.
        </p>
      </div>
      <div className='bannerButtons'>
        <div className='bannerButton'>
          <img src={carRepairIcon}></img>
          <div>Car Repair</div>
        </div>
        <div className='bannerButton'>
          <img src={EngineIcon}></img>
          <div>Engine Repair</div>
        </div>
        <div className='bannerButton'>
          <img src={carCheckIcon}></img>
          <div>Certifications</div>
        </div>
        <div className='bannerButton'>
          <img src={maintenanceIcon}></img>
          <div >Maintance</div>
        </div>
      </div>
    </div>
  )
}

export default Banner