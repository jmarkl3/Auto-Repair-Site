import React from 'react'

function Footer() {
  return (
    <div className='footer'>
      <div>
        <a className='footerLink'>
          Ocala Auto Care
        </a>
        <a className='footerLink'>
          (352) 469 - 6049
        </a>
        <a className='footerLink'>
          Contact@OcalaAutoCare.com
        </a>
        <a className='footerLink'>
          2437 E Fort King St, Ocala, FL 34471
        </a>
        {/* <a className='footerLink'>
          Warranty
        </a> */}
      </div>
      <div className='footerText'>
        Serving The Ocala and North Florida area
      </div>
      <div className='footerText footerSubText'>
        Site Developed by Ready Power Market
      </div>
    </div>
  )
}

export default Footer