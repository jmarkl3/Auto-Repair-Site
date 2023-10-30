import React from 'react'
import carRepairIcon from "../../Images/carRepairIcon.png"
import EngineIcon from "../../Images/EngineIcon.png"
import carCheckIcon from "../../Images/carCheckIcon.png"
import maintenanceIcon from "../../Images/MaintanceIcon.png"
import bannerImg from "../../Images/banner.jpg"
import { Link } from 'react-router-dom'

function Banner() {
  return (
    <div className='banner'>
      <img className='bannerImg' src={bannerImg}></img>
      <div className='bannerTextBox'>
        <h1>Auto Repair You Can Count On!</h1>
        <p>
          Ocala Auto Care is a full service auto repair and auto body facility located in Ocala Florida.
          It is our goal to get you moving down the road safely at a price you can afford.
        </p>
      </div>
      <div className='bannerButtons'>
        <Link to={"/services/Auto Body Repair"}>
          <div className='bannerButton'>
            <img src={carRepairIcon}></img>
            <div>Auto Body Repair</div>
          </div>
        </Link>
        <Link to={"/services/Check Engine"}>
          <div className='bannerButton'>
            <img src={EngineIcon}></img>
            <div>Check Engine</div>
          </div>
        </Link>
        <Link to={"/services/Certifications"}>
          <div className='bannerButton'>
            <img src={carCheckIcon}></img>
            <div>Certifications</div>
          </div>
        </Link>
        <Link to={"/services/Maintance"}>
          <div className='bannerButton'>
            <img src={maintenanceIcon}></img>
            <div >Maintance</div>
          </div>
        </Link>

      </div>
    </div>
  )
}

export default Banner