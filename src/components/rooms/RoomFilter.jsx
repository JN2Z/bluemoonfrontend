import React from 'react'
import './roomfilter.css'
import standardRoom from '../../assets/standard-room.jpg'
import doubleRoom from '../../assets/double-room.jpg'
import studioRoom from '../../assets/studio-room.jpg'
import deluxeRoom from '../../assets/deluxe-room.jpg'
import withViewRoom from '../../assets/withview-room.jpg'
import suitesRoom from '../../assets/suite-room.jpg'
import presidentialRoom from '../../assets/presidential-room.jpg'
import { Link } from 'react-router-dom'


const data =[
  {
    id : 1,
    image : standardRoom,
    roomName : 'Standard Room',
    roomSize : '52 ',
    bed: '1 ',
    bathroom: '1 ',
    price: '1000',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia inventore illum natus tempore voluptatem nulla, quidem rem laboriosam fuga! Laborum.'
  },
  {
    id : 1,
    image : doubleRoom,
    roomName : 'Double Room',
    roomSize : '65 ',
    bed: '1 ',
    bathroom: '1 ',
    price: '2000',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia inventore illum natus tempore voluptatem nulla, quidem rem laboriosam fuga! Laborum.'
  },
  {
    id : 1,
    image : studioRoom,
    roomName : 'Studio Room',
    roomSize : '90 ',
    bed: '2 ',
    bathroom: '1 ',
    price: '2500',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia inventore illum natus tempore voluptatem nulla, quidem rem laboriosam fuga! Laborum.'
  },
  {
    id : 1,
    image : deluxeRoom,
    roomName : 'Deluxe Room',
    roomSize : '110 ',
    bed: '2 ',
    bathroom: '1 ',
    price: '3500',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia inventore illum natus tempore voluptatem nulla, quidem rem laboriosam fuga! Laborum.'
  },
  {
    id : 1,
    image : withViewRoom,
    roomName : 'With a View Room',
    roomSize : '110 ',
    bed: '2 ',
    bathroom: '1 ',
    price: '4000',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia inventore illum natus tempore voluptatem nulla, quidem rem laboriosam fuga! Laborum.'
    
  },
  {
    id : 1,
    image : suitesRoom,
    roomName : 'Suite Room',
    roomSize : '120 ',
    bed: '2 ',
    bathroom: '2 ',
    price: '5000',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia inventore illum natus tempore voluptatem nulla, quidem rem laboriosam fuga! Laborum.'
  },
  {
    id : 1,
    image : presidentialRoom,
    roomName : 'Presidential Room',
    roomSize : '130 ',
    bed: '2 ',
    bathroom: '2 ',
    price: '7500',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia inventore illum natus tempore voluptatem nulla, quidem rem laboriosam fuga! Laborum.'
  },
]

const RoomFilter = () => {
    const buttonName = ['All','Standard','Double','Studio','Deluxe','With View','Suites','Presidential'];
  return (
    <div className='room__filter-section'>
    
        <div className="filter__btn-holder">
        {buttonName.map((name)=>{
            return(
                <button className='filter__btn'>{name}</button>
            )})}
        </div>

        <div className="room__card-holder">

            {data.map((test)=>{
                return(
                <div key={test.id} className="room__card">

                <div className="room__card-img-holder">
                    <img src={test.image} className='room__card-img' />
                </div>
            
                <div className="room__features-pill">
                    <ul className='room__features-holder'>
                        <li><i class="fa-solid fa-maximize"></i>&nbsp;&nbsp;{test.roomSize}sqm</li>
                        <li><i class="fa-solid fa-bed"></i>&nbsp;&nbsp;{test.bed}Bed</li>
                        <li><i class="fa-solid fa-shower"></i>&nbsp;&nbsp;{test.bathroom} Bathroom</li>
                    </ul>
                </div>

                <div className="room__name-description">
                  <h1 className='room__name'><Link to='./roomdetails.jsx'>{test.roomName}</Link></h1>
                  <p className='room__description'>{test.desc}</p>
                </div>

                <div className='room__details-price-holder'>
                    <div className='price__holder'>
                      <p className='room__price'>₱ {test.price} &nbsp;</p>
                      <p className='per__night'>/ Night</p>
                    </div>
                    <a href=""><button className='room__booknow-btn'>Book Now</button></a>
                </div>

            </div>
                )
            })}
 
        </div>
    </div>
  )
}

export default RoomFilter
