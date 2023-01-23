import React from 'react'
import './bookingreport.css'

const data = [
{
    orderNo : 1,
    name : 'Juan Dela Cruz',
    checkIn : '01-16-2023',
    checkOut : '01-19-2023',
    roomType: 'Standard',
    mobileNo: '	0912-345-6789',
    email: '	juandelacruz@email.com'
},
{
    orderNo : 2,
    name : 'John Doe',
    checkIn : '01-16-2023',
    checkOut : '01-19-2023',
    roomType: 'Standard',
    mobileNo: '	0912-345-6789',
    email: '	juandelacruz@email.com'
},
{
    orderNo : 3,
    name : 'John Doe',
    checkIn : '01-16-2023',
    checkOut : '01-19-2023',
    roomType: 'Standard',
    mobileNo: '	0912-345-6789',
    email: '	juandelacruz@email.com'
}
]

const BookingReport = () => {
  return (
    <div className="booking__details-wrapper">
        <div className="booking__details">
        <h4>Booking Report</h4>
        <hr />
       <table>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Check In</th>
                <th>Check Out</th>
                <th>Room Type</th>
                <th>Mobile No.</th>
                <th>Email Address</th>
                <th>Status</th>
             </tr>
             {data.map(({orderNo,name,checkIn,checkOut,roomType,mobileNo,email})=>{
                return(
                <tr>
                    <td>{orderNo}</td>
                    <td>{name}</td>
                    <td>{checkIn}</td>
                    <td>{checkOut}</td>
                    <td>{roomType}</td>
                    <td>{mobileNo}</td>
                    <td>{email}</td>
                    <td><i class="fa-solid fa-circle-check paid"></i></td>
                </tr>
                )
             })}

        </table>
        </div>
    </div>
  )
}

export default BookingReport