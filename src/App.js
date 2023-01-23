
import './App.css';
import Index from './components/index/Index';
import {Route, Routes} from 'react-router-dom'
import Booking from './components/booking/Booking';
import Rooms from './components/rooms/Rooms';
import About from './components/about/About'
import Gallery from './components/gallery/Gallery'
import Contact from './components/contact/Contact'
import RoomDetails from './components/rooms/RoomDetails';
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/user/Login';
import Signup from './components/user/Signup';

function App() {
  return (
  <Routes>
    <Route path='/' element={<Index/>} />
    <Route path='/booking.jsx' element={<Booking/>}/>
    <Route path='/rooms.jsx' element={<Rooms/>}/>
    <Route path='/gallery.jsx' element={<Gallery/>}/>
    <Route path='/about.jsx' element={<About/>}/>
    <Route path='/contact.jsx' element={<Contact/>}/>
    <Route path='/roomdetails.jsx' element={<RoomDetails/>}/>
    <Route path='/dashboard.jsx' element={<Dashboard/>}/>
    <Route path='/login.jsx' element={<Login/>}/>
    <Route path='/signup.jsx' element={<Signup/>}/>
  </Routes>
  )
}
export default App;
