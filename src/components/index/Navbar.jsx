import React from 'react'
import './navbar.css'
import BookNowModal from './BookNowModal'
import { Link,useMatch, useResolvedPath } from 'react-router-dom'



const Navbar = () => {
  let handleLogout = () =>{
    localStorage.clear();
  }
  return (
    <>
    <nav>
        <div className="logo__holder">
            <Link to = '/'><h1>BLUE MOON</h1></Link>
        </div>

        <div className="nav__links">
            <CustomLink to='/'>Home</CustomLink>
            <CustomLink to='/booking.jsx'>Booking</CustomLink>
            <CustomLink to='/rooms.jsx'>Rooms</CustomLink>
            <CustomLink to='/about.jsx'>About</CustomLink>
            <CustomLink to='/contact.jsx'>Contact Us</CustomLink>


            {/* <a href="landing.jsx" className='active'>Home</a>
            <a href="booking.jsx">Booking</a>
            <a href="rooms.jsx">Rooms</a>
            <a href="about.jsx">About</a>
            <a href="gallery.jsx">Gallery</a>
            <a href="contact.jsx">Contact</a> */}
        </div>
    <div className='booknow__user-account'>
    <BookNowModal/>
    {
      localStorage.getItem('currentUser') ? 
      (<div style={{display: 'flex'}}>
      <p style={{fontSize: '15px', color: '#fff', marginTop: '13px'}}>{localStorage.getItem('currentUser').slice(1, -1)}</p>
      <button type='button' style={{marginLeft: '10px', height: '30px', marginTop: '8px', backgroundColor: '#00a5ec', borderRadius: '5px', border: 'none', fontSize: '13px', padding: '5px 10px', color: '#fff'}} onClick={() => { localStorage.clear(); window.location.reload(false);}}>Logout</button>
      </div> )
      :(
        <CustomLink to='./login.jsx'>
        Login
      </CustomLink>
      )
    }

     
    </div>
    </nav>
    </>
  )
}
  function CustomLink({to, children, ...props}){
    // const path = window.location.pathname
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return(
        <Link to={to} className={isActive ? "active" : "" }{...props} >{children}</Link>
      )
  }

export default Navbar


