import { useState } from "react";
import "./navbar.css"
import { Link } from "react-router-dom";

const NavBar = (()=>{

    const [isNavActive, setIsNavActive] = useState(false);

    const toggleNav = () => {
      setIsNavActive(!isNavActive);
    };
    return(


        <>
        <nav>
       <Link to="*"  style={{cursor:"pointer", textDecoration:"none"}}> <div className="logo">  WARD AGENT  </div></Link> 
        <input type="checkbox" id="checkbox"/>
        <label for="checkbox" id="icon">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
        <ul>
            <li><a href="#" className="active">Home</a></li>
            <li><a href="#">About</a></li>
            <li><Link to="/user-registration">Register</Link> </li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
        
        
        </>
    )
})

export default NavBar