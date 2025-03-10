
import "./navbar.css"
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



const NavBar = (()=>{

    const [isNavActive, setIsNavActive] = useState(false);

    const toggleNav = () => {
      setIsNavActive(!isNavActive);
    };
const navigate = useNavigate();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


const userInfo = localStorage.getItem("agentUserInfo");
const userData = JSON.parse(userInfo);

const handleLogOut = (()=>{
  navigate("*")
    localStorage.removeItem("agentUserInfo")
    handleClose();
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
     <nav >
       <Link to="*"  style={{cursor:"pointer", textDecoration:"none"}}> <div className="logo">  WARD AGENT  </div></Link> 
        <input type="checkbox" id="checkbox"/>
        <label for="checkbox" id="icon">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
        <ul>
            <li style={{cursor:"pointer"}}><Link to="*"><a  className="">Home</a> </Link></li>
            {/* <li><a >About</a></li> */}
            {
                !userData ?  <li><Link to="/user-registration">Register</Link> </li>: <li onClick={handleShow}> <Link>   Logout  </Link>  </li>
            }

            {
                userData &&  <li ><Link to="user-profile">My Account</Link> </li>
            }
           
         
            {/* <li><a href="#">Contact</a></li> */}
        </ul>
    </nav> 

       <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Logout</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to logout?</Modal.Body>
        <Modal.Footer>
          <Button style={{background:"grey", color:"white"}} onClick={handleClose}>
            Cancel
          </Button>
          <Button style={{background:"red", color:"white"}} onClick={handleLogOut}>
            Proceed Logout
          </Button>
        </Modal.Footer>
      </Modal>
    

        
        
        </>
    )
})

export default NavBar