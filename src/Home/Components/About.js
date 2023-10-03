import React from 'react'
import twoMechanics from "../../Images/twoMechanics.jpg"

function About() {
  return (
    <div className='about'>
      <h2>PROVIDING COMPLETE AUTO REPAIR & MAINTENANCE SINCE 1976</h2>
      <hr></hr>
      <div className='aboutDivLeft'>
        <img src={twoMechanics}></img>
      </div>
      <div className='aboutDivRight'>
        <p>
          Dallas Car Care is a full service auto repair and auto body shop in East Dallas serving all domestic and import cars, trucks and SUVs. Locally owned and operated since 1976 Dallas Car Care has become a community favorite for all auto repair and preventative maintenance needs. Our ASE certified technicians perform brake repair, engine diagnostics and repair, cooling system repairs and so much more to keep your vehicle running smooth.
        </p>
        <p>
          When you're in need of expert vehicle service in Dallas you can trust the professional and friendly team at Dallas Car Care. Give us a call today at (214) 324-2323 to request a quote or schedule an appointment for quality auto repair in Dallas!
        </p>
      </div>

    </div>
  )
}

export default About