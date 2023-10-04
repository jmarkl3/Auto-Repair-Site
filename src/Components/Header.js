import React from 'react'
import clockIcon from '../Images/clockIcon.png'
import phoneIcon from '../Images/phoneIcon.png'
import mapIcon from '../Images/mapIcon.png'
import certifiedAutoRepair from "../Images/certified-auto-repair.png"
import logo from "../Images/OcalaAutoCareLogo2.png"
import ase from "../Images/ase.png"
import bricksBackground from "../Images/bricksBackground.png"
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return ( 
    <div className='header'>
        <div className='topBar'>
            <div><img src={clockIcon}/> Mon-Fri: 8am-5:30pm  |  Sat: 8am-3pm</div>
            <div><img src={phoneIcon}/> (214) 324-2323</div>
            <div><img src={mapIcon}/> 2437 E Fort King St, Ocala, FL 34471</div>
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
            <Link className='buttonsBarButton' to="/">Home</Link>            
            <Link className='buttonsBarButton' to="/about">About Us</Link>            
            <Link className='buttonsBarButton' to="/services">Auto Repair Services</Link>            
            <Link className='buttonsBarButton' to="/specials">Specials</Link>            
            <Link className='buttonsBarButton' to="/reviews">Reviews</Link>            
            <Link className='buttonsBarButton' to="/contact">Contact Us</Link>            
            <Link className='buttonsBarButton' to="/appointment">Request Appointment</Link>            
        </div>
    </div>
  )
}

export default Header