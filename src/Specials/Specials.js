import React from 'react'
import "./Specials.css"
import special1 from "../Images/special1new.png"
import special2 from "../Images/special2new.png"
import AdvantageBlock from '../Components/AdvantageBlock'

function Specials() {
  return (
    <div className='pageOUter'>
        <div className='pageInner'>
            <div className='specialsPage'>
                <div className='special'>
                    <img src={special1}></img>
                </div>
                <div className='special'>
                    <img src={special2}></img>
                </div>
            </div>
            <AdvantageBlock></AdvantageBlock>
        </div>
    </div>
  )
}

export default Specials