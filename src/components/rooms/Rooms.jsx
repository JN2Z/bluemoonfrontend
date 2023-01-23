import React from 'react'
import './room.css'
import Navbar from '../index/Navbar'
import RoomFilter from './RoomFilter'
import Footer from '../index/Footer'
import Newsletter from '../index/Newsletter'


const Rooms = () => {
  return (
    <>
    <Navbar/>
    <section id='room__page'>

        <div className="page__header">
          <h1>Choose Your Rooms</h1>
          <p>From basic budget rooms to luxurious suites, hotel rooms <br/>offer a comfortable and convenient place to rest during your travels.</p>

        <RoomFilter/>
        </div>
    </section>
    <Newsletter/>
    <Footer/>
    </>
    
  )
}

export default Rooms
