import React from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="top">
            <Link to ="/" className="logo">Blue Moon</Link>
            <i class="fa-solid fa-bars hamburger__icon"></i>
        </div>
        <div className="center">
            <ul>
                <li className='menu-active'><i class="fa-solid fa-house"></i><a href=""> Dashboard</a></li>
                <li><i class="fa-solid fa-key"></i><a href=""> Rooms</a></li>
                <li><i class="fa-regular fa-calendar"></i><a href=""> Booking</a></li>
                <li><i class="fa-solid fa-gear"></i><a href=""> Settings</a></li>
                <li> <i class="fa-solid fa-arrow-right-from-bracket"></i><a href=""> Logout</a></li>
            </ul>
        </div>
        
    </div>
  )
}

export default Sidebar