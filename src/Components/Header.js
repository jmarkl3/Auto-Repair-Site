import React from 'react'
import clockIcon from '../Images/clockIcon.png'
import phoneIcon from '../Images/phoneIcon.png'
import mapIcon from '../Images/mapIcon.png'
import certifiedAutoRepair from "../Images/certified-auto-repair.png"
import logo from "../Images/OcalaAutoCareLogo2.png"
import ase from "../Images/ase.png"
import bricksBackground from "../Images/bricksBackground.png"

function Header() {
  return ( 
    <div className='header'>
        <div className='topBar'>
            <div><img src={clockIcon}/> Mon-Fri: 8am-5:30pm  |  Sat: 8am-3pm</div>
            <div><img src={phoneIcon}/> (214) 324-2323</div>
            <div><img src={mapIcon}/> 10908 Garland Rd, Ocala, TX 75218</div>
        </div>
        <div className='logoBar'>
            <div className='backgroundImage'>
                <img src={bricksBackground}></img>
            </div>
            <div className='sideLogo'>
                <img src={certifiedAutoRepair}></img>
            </div>
            <div className='centerLogo'>
                <img src={logo}></img>
            </div>
            <div className='sideLogo'>
                <img src={ase}></img>
            </div>
        </div>
        <div className='buttonsBar'>
            <div>Home</div>
            <div>About Us</div>
            <div>Auto Repair Services</div>
            <div>Specials</div>
            <div>Reviews</div>
            <div>Contact Us</div>
            <div>Request Appointment</div>
        </div>
    </div>
  )
}

export default Header