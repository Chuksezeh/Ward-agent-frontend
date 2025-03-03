
import "./homeFooter.css";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";



const HomeFooter = (()=>{




    return(


        <>
        <footer className="footer-footer-secHome">
    <div className="main">
      
      
      <div className="logo row fIRTText">
        <div className="footer-header">
          <img  src="https://st2.depositphotos.com/1768926/7866/v/450/depositphotos_78666192-stock-illustration-a-logo-sample-logo-for.jpg" className="manik" alt=""/>
        </div>
        <div className="logo-des">
          
            crediting the source and author(s) appropriately and releasing copies/improvements under the same freedom to others. The license conditions of each
            <p className="" style={{fontSize:"15px"}}>Unlike traditional media repositories, Wikimedia Commons is free. Everyone is allowed to copy, use and modify any files here freely as long a
            s they follow the terms specified by the author; this often means</p>
        </div>
        
        
      </div>
      
      
      
      <div className="office row">
        <div className="footer-header">
          <h3> Address</h3>
        </div>
        <div className="office-des">
          <p> 3c Durban Street<br/>Wuse 2 Abuja</p>
          
         <a href="#">wardagent78@gmail.com</a>
          
          <p className = "num">08020877777</p>
       
      </div>
      </div>
     
    
      
      
      <div className="link_FFoter row">
        <div className="footer-header">
          <h3>Links</h3>
        </div>
        
        <div className="link-des">
          <a href="#" className="footer-links">Home</a>
          <a href="#" className="footer-links">About</a>
          <a href="#" className="footer-links">Services</a>
          <a href="#" className="footer-links">Galary</a>
          <a href="#" className="footer-links">Contact</a>
        </div>
        
      </div>
      
      
      <div className="newsletter row">
        <div className="footer-header">
          <h3>Ward Agent</h3>
        </div>
        <div className="newsletter-des">
          <div className="subcribe"><i className="sub-icon ri-mail-check-fill"></i>
            {/* <input type="mail" placeholder = "Enter Email ID" required/>
            <i className="sub-icon ri-arrow-right-line"></i> */}
            Reach Us Via:
        
          </div>
      
          <div className="icons">
           <i className="social-icon"> <FaFacebookSquare size={30} /> </i>
            <i className="social-icon fa fa-instagram"><FaInstagramSquare size={30}/>  </i>
           <i className="social-icon ri-linkedin-fill"><AiFillTikTok size={30}/>
            </i>
            <i className="social-icon ri-github-line"> <FaXTwitter size={30} />
            </i>
            
          </div>
        </div>
      </div>
      
      
    </div>
    <div className="copyright">
    <hr/>
    
    <p>© Copyright 2025.</p>
    </div>
  </footer> 
        
        </>
    )
})

export default HomeFooter