import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import './navbarv2.css';

const Navbarv2 = () => {
  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<h3>Blue Moon</h3>
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">Rooms</a>
				<a href="/#">About Us</a>
				<a href="/#">Contact Us</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
  )
}

export default Navbarv2