import React from 'react'
import StarRating from './StarRating'
import CustomerReview from './CustomerReview'

function HomeReviews() {
  return (
    <div className='customerReviews'>
        <h1>Customer Reviews</h1>
        <CustomerReview 
            stars={5}
            name={"Phillip Terry"}
            review={"Good service, good guys, good mechanics, fair pricing, no gouging or up selling. If they find other things your car needs they're doing their jobs as mechanics and maintenance experts! It's your call whether to get it done. These guys know and love cars, so do I. Been taking our cars there for many years, have confidence in their work and their character."}
        ></CustomerReview>
        <CustomerReview 
            stars={5}
            name={"Betty Rivera"}
            review={"Very professional, and my vehicle was completed in a timely fashion. They honored their time commitment . I highly recommend them to anyone that is looking for honest, and professional services."}
        ></CustomerReview>
        <CustomerReview 
            stars={5}
            name={"Casey O'Connor"}
            review={"Super helpful and knowledgeable. Thank you!"}
        ></CustomerReview>
    </div>
  )
}

export default HomeReviews