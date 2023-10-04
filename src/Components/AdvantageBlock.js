import React from 'react'
import clipboardIcon from "../Images/clipboardIcon.png"
import userCheckIcon from "../Images/userCheckIcon.png"
import toolsIcon from "../Images/toolsIcon.png"

function AdvantageBlock() {
  return (
    <div className='advantageBox'>
        <div className='advantageBoxColumn'>
            <div className='advantageBoxColumnImgContainer'>
                <img src={userCheckIcon} className='advantageBoxColumnImg'></img>
            </div>
            <h3>Certified Mechanics</h3>
            <div>With a team of ASE Certified technicians you can trust us to handle your vehicle with the utmost professionalism, no matter what service we are providing.</div>
        </div>
        <div className='advantageBoxColumn'>
            <div className='advantageBoxColumnImgContainer'>                    
                <img src={clipboardIcon} className='advantageBoxColumnImg'></img>
            </div>
            <div>
                <h3>Complete Auto Repair</h3>
                <div>Regardless of the model and make of your vehicle, our experienced Dallas Auto Repair Shop can provide it with a full garage service.</div>

            </div>
        </div>
        <div className='advantageBoxColumn'>
            <div className='advantageBoxColumnImgContainer'>                    
                <img src={toolsIcon} className='advantageBoxColumnImg'></img>
            </div>
            <h3>Domestic & Foreign</h3>
            <div>We are a full service and performance auto repair facility located in Dallas, TX. We service foreign, domestic & light trucks.</div>
        </div>        
    </div>
  )
}

export default AdvantageBlock