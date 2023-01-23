import React from 'react'
import './footer.css'

const Footer = () => {
  return (
   <footer id='footer'>
    <div className="footer__logo-section">
        <h1>LOGO</h1>
        <p className='footer__logo-subtext'>Lorem ipsum dolor sit amet, consectetur elit<br/>adipiscing , sed do eiusmod tempor incididunt<br/>ut labore et dolore magna aliqua.</p>
        <div className='store__btn-holder'>
        <a href="https://play.google.com/store/apps" target='_blank'><button className='store__btn'><i class="fa-brands fa-google-play"></i>&nbsp;&nbsp;PlayStore</button></a>
        <a href="https://www.apple.com/ph/app-store/" target='_blank'><button className='store__btn'><i class="fa-brands fa-app-store-ios"></i>&nbsp;&nbsp;AppleStore</button></a>
        </div>
    </div>
    <div className="footer__company-section">
        <h3>Company</h3>
        <ul>
            <li><a href="">About us</a></li>
            <li><a href="">Legal Information</a></li>
            <li><a href="">Contact Us</a></li>
            <li><a href="">Blogs</a></li>
        </ul>
    </div>
    <div className="footer__help-section">
        <h3>Help Center</h3>
        <ul>
            <li><a href="">Find a room</a></li>
            <li><a href="">Awesome Rooms</a></li>
            <li><a href="">Why us?</a></li>
            <li><a href="">FAQs</a></li>
            <li><a href="">Booking Guides</a></li>
        </ul>
    </div>
    <div className="footer__contact-section">
        <h3>Contact Info</h3>
        <ul>
            <li><a href=""><i class="fa-solid fa-street-view"></i>139-B Aurora Boulevard Calaan Beach San Juan, El Nido, Palawan </a></li>
            <li><a href=""><i class="fa-solid fa-phone-volume"></i>+63-932-555-7931</a>
            <a href=""><i class="fa-solid fa-mobile-screen-button"></i>(052) 481-0589</a></li>
            <li><a href=""><i class="fa-solid fa-paper-plane"></i>bluemoonhotel@gmail.com</a></li>
        </ul>
    </div>
   </footer>
  )
}

export default Footer
