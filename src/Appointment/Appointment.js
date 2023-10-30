import React from 'react'
import "./Appointment.css"

function Appointment({title, title2}) {
    
    
    return (
        <div className='pageOuter'>
            <div className='pageInner'>
                <h1>{title || "Contact Us"}</h1>
                <h3>{title2 || "Fill out the form and we will be in touch as soon as possible."}</h3>
                <h3>Or email us today at Contact@OcalaAutoCare.com</h3>
                <div className='form'>
                    <h3>Contact Information</h3>
                    <div className='inputArea'>
                        <input placeholder={"Name"}></input>
                        <input placeholder={"Email"}></input>
                        <input placeholder={"Phone"}></input>
                    </div>
                </div>
                <div className='form'>
                    <h3>Date and Car Information</h3>
                    <div className='inputArea'>
                        <input placeholder={"Drop Off Day"} type='date'></input>
                        <select>
                            <option>Dropping Off</option>
                            <option>Waiting</option>
                        </select>
                    </div>
                </div>
                <div className='form'>
                    <h3>Vehicle</h3>
                    <div className='inputArea'>
                        <input placeholder={"Year"}></input>
                        <input placeholder={"Make"}></input>
                        <input placeholder={"Model"}></input>
                    </div>
                </div>
                <div className='submitButtonArea'>
                    <button>Clear</button>
                    <button>Submit</button>
                </div>
            </div>
        </div>
    )
  }
export default Appointment