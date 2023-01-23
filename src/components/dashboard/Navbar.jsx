import React from 'react'
import './navbar.css'
import Avatar1 from '../../assets/avatar1.png'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <h3>Dashboard</h3>
      </div>
      <div className="notifaction__user-holder">
        <i class="fa-solid fa-bell"></i>
        
        <div className="user__holder">
          <div className="user__avatar">
            <img src={Avatar1} alt="..." className='avatar'/>
          </div>
          <div className="user__name">
            <p className="name">Juan Dela Cruz</p>
            <p className="position">Admin1</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar