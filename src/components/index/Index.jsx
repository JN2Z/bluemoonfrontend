import React from 'react'
import './index.css'
// import Navbar from './Navbar'
import DatePicker from './DateRange'
import CustomerCountPicker from './CustomerCountPicker'
import RoomTypePicker from './RoomTypePicker'
import PopularRooms from './PopularRooms'
import ExclusiveOffers from './ExclusiveOffers'
import AroundHotel from './AroundHotel'
import Testimonials from './Testimonials'
import Newsletter from './Newsletter'
import Footer from './Footer'
import GotoUp from './GotoUp'
import Navbarv2 from './Navbarv2'
import Navbar from './Navbar'


const Index = () => {
  return (
    <>
    <Navbar/>
    <GotoUp />

    <div id='landing__description'>

      <div className='landing__header-text' >
        <h1 className='index__header-text'>Enjoy your<br/>dream stay-cation</h1>
        <p className='landing__slogan-text'>The Shot-Silug Hotel is the right choice for visitors who are searching <br/>
        for a combination of charm, peace and, comfort.</p>

        <div className="landing__booking-section">
          <div className="booking__section">

            <div className="checkin__checkout-picker">
              <label>Check In - Check Out</label>
              <DatePicker/>
            </div>

            <div className="person__count-picker">
              <label>Person</label>
              <CustomerCountPicker/>
              <label>Children</label>
              <CustomerCountPicker/>
            </div>

            <div className="room__type-picker">
              <label>Room Type</label>
              <RoomTypePicker/>
            </div>

          <button className='search-btn'><i class="fa-solid fa-magnifying-glass"></i></button>

          </div>
        </div>
      </div>


    </div>
    <PopularRooms/>
    <ExclusiveOffers/>
    {/* <AroundHotel/> */}
    <Testimonials/>
    <Newsletter/>
    <Footer/>



    </>
  )
}

export default Index
