import React from 'react'
import './aroundhotel.css'
import loungeBar from '../../assets/lounge-bar.jpg'
import swimmingPools from '../../assets/swimming-pools.jpg'
import Restaurant from '../../assets/restaurant.jpg'



const data=[
{
  id :1,
  title: 'Lounge Bar',
  image : loungeBar,
  description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit blanditiis itaque non odio, maiores sunt ea quam modi et tempore.'
},
{
  id :1,
  title:'Swimming Pools',
  image : swimmingPools,
  description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis obcaecati hic natus molestiae ipsa voluptatem itaque dignissimos quod. Libero, facere?'
},
{
  id :1,
  title:'Restaurant',
  image : Restaurant,
  description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt facere excepturi suscipit repudiandae ullam tenetur earum a consequuntur dolorum. Enim.'
}]
const AroundHotel = () => {
  return (
    <section id='around__the-hotel'>
        <h1 className='header__text'>Around the Hotel</h1>
        <p className='header__subtext'>In the surrounding area, there are plenty of activities and attractions to keep you busy from<br/> water sports and beach games to local festivals and events.</p>
      <div className="card">
        {
          data.map(({id,image,description,title})=>{
            return(
                <div className="card__item">
                <img src={image}  style={{width:'100%'}}/>
                <div className="title__overlay">
                  <h3 className='activity__title'>{title}</h3>
                  <p className='activity_content'>{description}</p>
                </div>
                </div>

            )
          })
        }
        
      </div>
    </section>
  )
}

export default AroundHotel
