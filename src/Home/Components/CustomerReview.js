import React from 'react'
import StarRating from './StarRating'

function CustomerReview({stars, review, name}) {
  return (
    <div className='customerReview'>
        <StarRating stars={stars}></StarRating>
        <div className='reviewText'>
            {review}
        </div>
        <div className='reviewName'>{name}</div>
    </div>
  )
}

export default CustomerReview