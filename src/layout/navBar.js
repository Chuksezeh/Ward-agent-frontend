
import "./navbar.css"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";


const NavBar = (()=>{

    const [isNavActive, setIsNavActive] = useState(false);

    const toggleNav = () => {
      setIsNavActive(!isNavActive);
    };

const userInfo = localStorage.getItem("agentUserInfo");
const userData = JSON.parse(userInfo);

const handleLogOut = (()=>{
    localStorage.removeItem("agentUserInfo")
})

const [menuActive, setMenuActive] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY >= 85);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
    return(


        <>
     <nav>
       <Link to="*"  style={{cursor:"pointer", textDecoration:"none"}}> <div className="logo">  WARD AGENT  </div></Link> 
        <input type="checkbox" id="checkbox"/>
        <label for="checkbox" id="icon">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
        <ul>
            <li style={{cursor:"pointer"}}><Link to="*"><a  className="">Home</a> </Link></li>
            {/* <li><a >About</a></li> */}
            {
                !userData ?  <li><Link to="/user-registration">Register</Link> </li>:  <li onClick={handleLogOut}><Link to="*">Logout</Link> </li>
            }

            {
                userData &&  <li ><Link to="user-profile">My Account</Link> </li>
            }
           
         
            <li><a href="#">Contact</a></li>
        </ul>
    </nav> 


    

        
        
        </>
    )
})

export default NavBar