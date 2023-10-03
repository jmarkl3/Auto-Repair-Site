import React from 'react'

function StarRating({stars}) {
    function starsFunction(){
        let elements = []
        for (let i = 0; i < stars; i++) {
            elements.push(
                <div className='star'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/2/2c/Star-icon.png'></img>
                </div>
            )
        } 
        return elements 
    }
  return (
    <div className='starsContainer'>
        {starsFunction()}
    </div>
  )
}

export default StarRating