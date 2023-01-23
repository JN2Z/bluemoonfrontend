// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import './popularroomswiper.css'
import standardRoom from '../../assets/standard-room.jpg'
import doubleRoom from '../../assets/double-room.jpg'
import studioRoom from '../../assets/studio-room.jpg'
import deluxeRoom from '../../assets/deluxe-room.jpg'
import withViewRoom from '../../assets/withview-room.jpg'
import suitesRoom from '../../assets/suite-room.jpg'
import presidentialRoom from '../../assets/presidential-room.jpg'

const data =[
  {
    id : 1,
    image : standardRoom,
    roomName : 'Standard Room',
    roomSize : '52 ',
    bed: '1 ',
    bathroom: '1 ',
    price: '1000'
  },
  {
    id : 1,
    image : doubleRoom,
    roomName : 'Double Room',
    roomSize : '65 ',
    bed: '1 ',
    bathroom: '1 ',
    price: '2000'
  },
  {
    id : 1,
    image : studioRoom,
    roomName : 'Studio Room',
    roomSize : '90 ',
    bed: '2 ',
    bathroom: '1 ',
    price: '2500'
  },
  {
    id : 1,
    image : deluxeRoom,
    roomName : 'Deluxe Room',
    roomSize : '110 ',
    bed: '2 ',
    bathroom: '1 ',
    price: '3500'
  },
  {
    id : 1,
    image : withViewRoom,
    roomName : 'With a View Room',
    roomSize : '110 ',
    bed: '2 ',
    bathroom: '1 ',
    price: '4000'
    
  },
  {
    id : 1,
    image : suitesRoom,
    roomName : 'Suite Room',
    roomSize : '120 ',
    bed: '2 ',
    bathroom: '2 ',
    price: '5000'
  },
  {
    id : 1,
    image : presidentialRoom,
    roomName : 'Presidential Room',
    roomSize : '130 ',
    bed: '2 ',
    bathroom: '2 ',
    price: '7500'
  },
]
const myStyle = {
        width : "440px",
        height: "520px",
        overflow : 'hidden'
    }

export default () => {
  return (

    <Swiper
      loop = 'true'
      spaceBetween={20}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints = {{
        0:{
            slidesPerView: 0,
            spaceBetween: 10,
        },
        480:{
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768:{
            slidesPerView:2,
            spaceBetween:15,
        },
        1024:{
            slidesPerView:3,
            spaceBetween:15,
        },
        1280:{
            slidesPerView:4,
            spaceBetween:15,
        },
        1680:{
          slidesPerView:5,
          spaceBetween:12
        },
        1920:{
          slidesPerView:5,
          spaceBetween:12
        }
      }}
    >
      {
        data.map(({id,image,roomName,roomSize,bed,bathroom,price})=>{
        return(
        <SwiperSlide key={id} style={myStyle}>
      
        <div className="roomtype__img-holder">
          <img src={image} style={{width:'100%',height:'100%',borderRadius:'30px'}}/>
        </div>
        <a href=""><h3 className='room__title'>{roomName}</h3></a>
        <ul className='room__features'>
          <li><i class="fa-solid fa-maximize"></i>&nbsp;&nbsp;{roomSize}sqm</li>
          <li><i class="fa-solid fa-bed"></i>&nbsp;&nbsp;{bed}Bed</li>
          <li><i class="fa-solid fa-shower"></i>&nbsp;&nbsp;{bathroom} Bathroom</li>
        </ul>

        <div className='room__details'>
            <div className='price__holder'>
              <p className='room__price'>₱ {price} &nbsp;</p>
              <p className='per__night'>/ Night</p>
            </div>
            <a href=""><button className='details__btn'>Room details</button></a>
        </div>

  
      </SwiperSlide>
          )
        })
      }
      

    </Swiper>
  );

};