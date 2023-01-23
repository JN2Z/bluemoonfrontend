import React from 'react'
import './testimonials.css'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";

const data =[
{
    name : 'Juan Dela Cruz',
    content : 'The rooms were clean, very comfortable, and the staff was amazing. They went over and beyond to help make our stay enjoyable. I highly recommend this hotel for anyone visiting downtown. '
},
{
    name : 'Maria Clara',
    content : 'The rooms were clean, very comfortable, and the staff was amazing. They went over and beyond to help make our stay enjoyable. I highly recommend this hotel for anyone visiting downtown. '
},
{
    name : 'John Doe',
    content : 'The rooms were clean, very comfortable, and the staff was amazing. They went over and beyond to help make our stay enjoyable. I highly recommend this hotel for anyone visiting downtown. '
},
]
const Testimonials = () => {
  return (
    <section id='testimonial'>
        {/* <h1 className='title'>Feedback from our Guests</h1> */}
        <h1 className='testimonial__title'>Feedback from out Guests</h1>
        <p className="qoute"><i class="fa-solid fa-quote-left"></i></p>
         
        <Swiper loop = 'true' navigation={true} modules={[Navigation]} className="mySwiper" >
        {
        data.map(({name,content})=>{
        return(
        <SwiperSlide>
            <div className="testimonial__content">
                <p><em>{content}</em> </p>
                <p className="testimonial__customer-name">
                    {name}
                </p>
            </div>
        </SwiperSlide>
                )
            })
        }
       
      </Swiper>
    </section>
  )
}

export default Testimonials
