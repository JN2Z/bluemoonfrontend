import React from 'react'
import Sidebar from './Sidebar'
import './dashboard.css'
import Navbar from './Navbar'
import DashboardCard from './DashboardCard'
import BookingDetails from './BookingDetails'
import BookingReport from './BookingReport'

const Dashboard = () => {
  return (
    <div className='dashboard__container'>
        <Sidebar/>
        <div className="dashboard__main-content">
          <Navbar/>
          <DashboardCard/>
          <BookingDetails/>
          <BookingReport/>

        </div>
    </div>
  )
}

export default Dashboard