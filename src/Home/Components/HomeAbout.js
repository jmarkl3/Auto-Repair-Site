import React from 'react'
import twoMechanics from "../../Images/twoMechanics.jpg"

function HomeAbout() {
  return (
    <div className='about'>
      <h2>PROVIDING COMPLETE AUTO REPAIR & MAINTENANCE SINCE 1976</h2>
      <hr></hr>
      <div className='aboutDivLeft'>
        <img src={twoMechanics}></img>
      </div>
      <div className='aboutDivRight'>
        <p>
          Ocala Auto Care is a full service auto repair and auto body shop in Ocala Florida serving all domestic and import cars, trucks and SUVs. Locally owned and operated, Auto Care has become a community favorite for all auto repair and preventative maintenance needs. Our ASE certified technicians perform brake repair, engine diagnostics and repair, cooling system repairs and so much more to keep your vehicle running smooth.
        </p>
        <p>
          When you're in need of expert vehicle service in Ocala you can trust the professional and friendly team at Ocala Auto Care. Give us a call today at (352) 469 - 6049 to request a quote or schedule an appointment for quality auto repair in Ocala!
        </p>
      </div>

    </div>
  )
}

export default HomeAbout