import React from 'react'
import './dashboardcard.css'
import NewBooking from '../../assets/newbooking.png'
import AvailableRooms from '../../assets/availableroom.png'
import CheckIn from '../../assets/checkin.png'

const data = [
  {
    id : 1,
    number: 100,
    icon : NewBooking,
    desc: 'New Booking'
  },
    {
    id : 1,
    number: 20,
    icon : AvailableRooms,
    desc: 'Available Rooms'
  },
    {
    id : 1,
    number: 100,
    icon : CheckIn,
    desc: 'Check In',
  },
  
]
const DashboardCard = () => {
  return (
    <div className="card__container">
    {data.map(({id, number, icon, desc})=>{
      return(
        <div key={id} className="card">
        <div className="number__description-holder">
          <h1 className="number">{number}</h1>
          <p className="description">{desc}</p>
        </div>
        <div className="card__icon-holder">
          <img src={icon} className='card__icon' />
        </div>
      </div>
      )
    })}
      
    </div>
  )
}

export default DashboardCard