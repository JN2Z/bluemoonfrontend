import React from 'react'
import './newsletter.css'

const Newsletter = () => {
  return (
    <section id='newsletter'>
        <h1 className='header__text'>Subscribe and Get Special Discount!</h1>
        <p className="header__subtext">Don’t wanna miss somethings? Subscribe right now and get  <br />
        the special discount and monthly newsletter.</p>

        <div className="newsletter__input-section">
            <div className='input__holder'>
            <form action="">
            <input type="text" className='newsletter__input' placeholder='Enter your email address...' />
            <input type="submit" className='subscribe__btn' value='Subscribe'/>
            </form>
            </div>
        </div>
    </section>
  )
}

export default Newsletter
