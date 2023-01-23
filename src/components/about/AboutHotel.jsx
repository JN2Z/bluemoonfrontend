import React from 'react'
import './abouthotel.css'
import Hotel1 from '../../assets/bluemoon.jpg'

const AboutHotel = () => {
  return (
    <>
    <div className="about__hotel-container">
        <img src={Hotel1} alt=""/>

        <div className="about__hotel">
            <h1>Blue Moon Hotel</h1>
            <p>At the Blue Moon, we take pride in our dedicated and friendly staff who are committed to ensuring that our guests have a truly memorable stay. Our team members are carefully selected and trained to provide the highest level of service and hospitality. From the front desk to housekeeping, and from the restaurant to the spa, each member of our team is passionate about making your experience at the Blue Moon an unforgettable one. Whether you need assistance with arranging activities or have a special request, our team is always happy to help. So, whether you're here for a romantic getaway or a family vacation, rest assured that you'll be in good hands with the Blue Moon team.</p>
        </div>
    </div>
    </>
  )
}

export default AboutHotel