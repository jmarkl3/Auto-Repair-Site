import React from 'react'

function Services() {
  console.log(`10 Minute Oil Change
          Air Conditioning
          Alignments
          Auto Body & Paint Repair
          Auto Electric Repair
          Batteries
          Belts & Hoses
          Brake Service & Repair
          Check Engine Light Diagnosis
          Classic Car Maintenance
          Computer Diagnostics
          Customer Shuttle
          Drive Train
          Electrical`.split("\n"))
  return (
    <div className='services'>
      <h1>QUALITY AUTOMOTIVE SERVICES </h1>
      <hr></hr>
      <ul className='columnList'>
        {`10 Minute Oil Change
          Air Conditioning
          Alignments
          Auto Body & Paint Repair
          Auto Electric Repair
          Batteries
          Belts & Hoses
          Brake Service & Repair
          Check Engine Light Diagnosis
          Classic Car Maintenance
          Computer Diagnostics
          Drive Train
          Electrical`.split("\n").map(string => (<li>{string}</li>))
        }
      </ul>
      <ul className='columnList'>
        {`Emissions Testing
          Trailer Hitch Installation
          Engine and Transmission Mounts
          Engine Replacement
          Factory Scheduled Maintenance
          Fenders & Bumpers Replacement
          Fleet Maintenance
          Fluid Flushes
          Fuel and Fuel Injection Systems
          Headlights, Taillights & Mirrors
          Lighting
          Off Road Vehicle Repair
          30K, 60K, 90K Services`.split("\n").map(string => (<li>{string}</li>))
        }
      </ul>
      <ul className='columnList'>
        {`Oil & Lube Service
          Transmissions
          Pre-Purchase Check up
          Radiators
          Suspension, Shocks, Struts
          Texas State Inspections
          Timing Chains and Belts
          Tire Balance, Repair, Rotation
          Towing Available
          Transmission Service and Repair
          Tune Ups
          Water Pumps
          And More...`.split("\n").map(string => (<li>{string}</li>))
        }
      </ul>
    </div>
  )
}

export default Services