import { useEffect } from "react";
import NavBar from "../navBar";
import PersonalInfoCards from "./personalInfoCards";
import "./userLayout.css";
import { useNavigate } from "react-router-dom";



const UserLayout = (()=>{

    const userInfo = localStorage.getItem("agentUserInfo");
    const userData = JSON.parse(userInfo);

    const navigate = useNavigate();

    console.log("userData >>>", userData )

    useEffect(()=>{
     if(!userData)
      navigate("*")
    },[userData])

    return(

        <>

        <NavBar/>
        <div className="control-all">
        <div className="control1 container">
            <div className="control-inner">
             <span style={{color:"white"}}> Now Open</span>
           <div  className="inf-control">
            <h1 className="incfav">Unlock Information, Stay Connected – Your Community, Your Access!</h1>
            <p className="incfavP">Welcome to <span style={{color:"#0075FF", fontWeight:"bold"}}>Ward Agent</span>, where access to information is tailored to your community level. From Kindred to State, your subscription ensures you see only what matters to you. With secure, structured access and admin-managed data, 
                we empower you to stay informed while keeping information safe and organized.</p>
          </div>
          <div>
            <span className="focuStext">Your Access, Your Community, Your Control.</span>
          </div>
          </div>
        </div>  
      
            
        </div>

       <PersonalInfoCards/>
  

  


        
        
        </>
    )
})

export default UserLayout