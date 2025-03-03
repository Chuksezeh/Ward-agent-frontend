import { useEffect, useState } from "react";
import "./home.css"
import { GiHamburgerMenu } from "react-icons/gi";
import NavBar from "./layout/navBar";
import { Link, useNavigate } from "react-router-dom";
import HomeFooter from "./layout/homeFooter";
import axios from "axios";
import { useForm } from "react-hook-form";



const LandingPage = (() => {

    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors, isDirty, isValid },
    } = useForm();

    const [showInvalid, setShowInvalid] = useState(false);
    const [invalidText, setInvalidText] = useState("")

    const scrolltop = (() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"

        });
    })

    useEffect(() => {

        scrolltop();
    })


    const navigate = useNavigate();

    const handleLogin = async data => {

        console.log("walletData>>>", data)
        await axios
            .post('http://localhost:4000/userLogin', data)
            .then(res => {
                if (res.statusText === "OK") {
                    navigate("/user-profile")
                    localStorage.setItem('isLoggedIn', 'true');
                    localStorage.setItem('agentUserInfo', JSON.stringify(res.data));
                } else {
                    setShowInvalid(true)
                }
                console.log('sucessData', res);
                setLga(res.data)
            })
            .catch(err => {
                console.log('err', err);
                const response = err?.response?.data
                setInvalidText(response.message)
                setShowInvalid(true)
            });
    };



    return (

        <>

          <NavBar />

                <section>
                <div className="container">
                    <div className="row full-screen align-items-center">
                        <div className="left">
                            <span className="line"></span>
                            <h2>Welcome to Ward Agent <br /></h2>
                            <h4 style={{ fontWeight: "bold" }}>Your access to information is tailored to your user level</h4>
                            <p>We ensure that you get access to
                                information tailored to your user level, providing a secure and personalized experience.</p>
                            <a href="#" className="btn">Contact</a>

                            <div className="social-media">
                                <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                <a href="#"><i className="fa-brands fa-youtube"></i></a>
                                <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div className="right">
                            <div className="form">
                                <div className="text-center">
                                    {/* <h6><span>Log In</span> <span>Sign Up</span></h6>
                            <input type="checkbox" className="checkbox" id="reg-log"/>
                            <label for="reg-log"></label> */}
                                    <div className="card-3d-wrap">
                                        <div className="card-3d-wrapper">
                                            <form onSubmit={handleSubmit((data, event) => {
                                                console.log('seedataNow', data);
                                                handleLogin(data);
                                            })}>
                                                <div className="card-front">
                                                    <div className="center-wrap">
                                                        <h4 className="heading">Log In</h4>
                                                        <div className="form-group">
                                                            <label style={{ color: "white", float: "left" }}>Email Address</label>
                                                            <input type="email" className="form-style" placeholder="Your Email" autocomplete="off" {...register("email")} />

                                                        </div>

                                                        <div className="form-group">
                                                            <label style={{ color: "white", float: "left" }}>Password</label>
                                                            <input type="password" className="form-style" placeholder="Your Password" autocomplete="off"  {...register("password")} />

                                                        </div>
                                                               {

                                                           showInvalid &&  
                                                           <label className="w-100">
                                                           <input type="checkbox" class="alertCheckbox" autocomplete="off" />
                                                           <div class="alert error">
                                                               <span class="alertClose">X</span>
                                                               <span class="alertText">{invalidText}
                                                                   <br class="clear" /></span>
                                                           </div>
                                                      
                                                            </label>
                                                               }  
                                                       

                                                        <button type="submit" className="btn">Submit</button>
                                                        <p style={{ color: "white" }}>Don't have an account? <Link to="user-registration"><span style={{ fontWeight: "bold", cursor: "pointer", color: "#0075FF" }}>Register</span></Link>  </p>
                                                        <p className="text-center"><a href="#" className="link">Forgot your password?</a></p>
                                                    </div>
                                                </div>
                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <HomeFooter />

        </>
    )
})

export default LandingPage