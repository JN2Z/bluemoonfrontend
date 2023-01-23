import React from 'react'
import './exclusiveoffers.css'

const ExclusiveOffers = () => {
  return (
    <>
    
    <div id='exclusiveOffers__description'>
      <div className='E_offers__container' >
        <h5 className="title">Exclusive Offers</h5>
        <p className="title__description">Enjoy Your Dream Stay-Cation</p>

        <div className='offers__content'>
          <p className='left__content col-6'>3 days & 2 nights with food</p>
          <img src={require('../../assets/linevector.png')} className='linevector'/>
          <p className='right__content col-6'>
            <h6>Only</h6> <br/><p className='price'>₱5,000</p></p>
            <a href="booking.html" className='bookNow'>Book Now</a>

        </div>
      </div>


    </div>
      
    </>
  )
}

export default ExclusiveOffers
