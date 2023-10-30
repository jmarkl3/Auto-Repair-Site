import React from 'react'
import About from './About'
import { useParams } from 'react-router-dom'

function Services() {
  const {serviceName} = useParams()
  return (
    <div>
        <About startingPage={(serviceName || "All Services")}></About>
    </div>
  )
}

export default Services