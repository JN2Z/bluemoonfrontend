import React from 'react'
import './popularrooms.css'
import PopularRoomsSwiper from './PopularRoomsSwiper'

const PopularRooms = () => {
  return (
    <>
    <section className='popularROoms'>
        <h1 className='header__text'>Our Most Popular Rooms</h1>
        <PopularRoomsSwiper/>
    </section>
    </>
  )
}

export default PopularRooms
