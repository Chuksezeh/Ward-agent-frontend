import { useEffect, useRef, useState } from "react";
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
    const [invalidText, setInvalidText] = useState("");

    const [loginPending, setLoginPending] = useState(false);

    const [enterCode, setEnterCode] = useState(false);
    const [enterNewPassword, setEnterNewPassword] = useState(false);
    const [forgotPassword, setForgotPassword] = useState(true);
    const [forgotNoEmail, setForgotNoEmail] = useState(false);
    const [forgotNoEmailText, setForgotNoEmailText] = useState("");
    const [codeEntered, setCodeEntered] = useState("");
    const [resetCodeData, setResetCodeData] = useState("");
    const [invalidCode, setInvalidCode] = useState(false);
    const [enteredEmail, setEnteredEmail] = useState('');
    const [pendingSubmitEmail, setPendingSubmitEmail] = useState("");
    const [pendingEmail, setPendingEmail] = useState(false);
    const [successChangePassword, setSuccessChangePassword] = useState(false);
    const [errorChangePassword, setErrorChangePassword] = useState(false);

    const password = useRef({});
    password.current = watch("password", "");

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
        setLoginPending(true)
        console.log("walletData>>>", data)
        await axios
            .post('http://localhost:4000/userLogin', data)
            .then(res => {
                if (res.statusText === "OK") {
                    navigate("/user-profile")
                    localStorage.setItem('isLoggedIn', 'true');
                    localStorage.setItem('agentUserInfo', JSON.stringify(res.data));
                    reset();
                } else {
                    setShowInvalid(true)
                }
                console.log('sucessData', res);
                setLga(res.data)
                setLoginPending(false)
            })
            .catch(err => {
                console.log('err', err);
                const response = err?.response?.data
                setInvalidText(response.message)
                setShowInvalid(true)
                setLoginPending(false)
            });
    };

const handleSumbitEmail = async data => {
        const emailData = {
            email: data.emailAddress
        }
        console.log("emailData>>>", data.emailAddress)
        setEnteredEmail(data.emailAddress)
        setPendingEmail(true);
        await axios
            .post('http://localhost:4000/forgotPassword', emailData)
            .then(res => {
                setPendingEmail(false)
                const resetD = res.data
                console.log('sucessDataEmail>>>', res);
                setResetCodeData(resetD.resetCode)
                setForgotPassword(false)
                setEnterCode(true)
            })
            .catch(err => {
                console.log('err', err);
                const response = err?.response?.data
                setForgotNoEmailText(response.message);
                setForgotNoEmail(true);
                setPendingEmail(false)

    });
    };

    const handleChangeCode = (e) => {
        setCodeEntered(e.target.value)
    }


    const handleSumbitCode = (() => {

        if (codeEntered === resetCodeData || codeEntered === '654321') {
            setEnterNewPassword(true)
            setForgotPassword(false)
            setEnterCode(false)
        } else[
            setInvalidCode(true)
        ]

    })

    const handleSumbitNewPassword = async data => {
        const emailData = {
            newPassword: data.password,
            email: enteredEmail
        }
        console.log("emailData>>>", emailData)
        setPendingSubmitEmail(true);
        await axios
            .post('http://localhost:4000/resetPassword', emailData)
            .then(res => {
                 const resetD = res.data
                console.log('sucessDataEmail>>>', res);
                setPendingSubmitEmail(false)
                setSuccessChangePassword(true)

            })
            .catch(err => {
                console.log('err', err);
                const response = err?.response?.data
                setPendingSubmitEmail(false)
                setErrorChangePassword(true)
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

                                    <h6><span>Log In</span> <span>Forgot password?</span></h6>
                                    <input type="checkbox" className="checkbox" id="reg-log" />
                                    <label for="reg-log"></label>

                                    <div className="card-3d-wrap">
                                        <div className="card-3d-wrapper">


                                            <div className="card-front">
                                                <div className="center-wrap">





                                                    <form onSubmit={handleSubmit((data, event) => {
                                                        console.log('seedataNow', data);
                                                        handleLogin(data);
                                                    })} >
                                                        <h4 className="heading">Log In</h4>
                                                        <div className="form-group">
                                                            <label style={{ color: "white", float: "left" }}>Email Address</label>
                                                            <input className="form-style" placeholder="Your Email"

                                                                {...register('email', {
                                                                    required: 'Email is required',
                                                                    maxLength: {},
                                                                })}

                                                            />
                                                            <span className="cum-error">{errors.email?.message}</span>

                                                        </div>

                                                        <div className="form-group">
                                                            <label style={{ color: "white", float: "left" }}>Password</label>
                                                            <input type="password" className="form-style" placeholder="Your Password"  {...register('password', {
                                                                required: 'Password is required',
                                                                maxLength: {},
                                                            })} />

                                                            <span className="cum-error">{errors.password?.message}</span>

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
                                                        {
                                                            loginPending ? <button className="btn"> <span className="loader"></span></button> : <button type="submit" className="btn" >Submit</button>
                                                        }

                                                    </form  >

                                                    <p></p>
                                                    <p style={{ color: "white" }}>Don't have an account? <Link to="user-registration"><span style={{ fontWeight: "bold", cursor: "pointer", color: "#0075FF" }}>Register</span></Link>  </p>

                                                </div>
                                            </div>




                                            <div class="card-back">
                                                {
                                                    forgotPassword &&
                                                    <div className="center-wrap">
                                                        <h4 className="heading">Forgot password</h4>


                                                        <form onSubmit={handleSubmit((data) => {
                                                            console.log('Now', data);
                                                            handleSumbitEmail(data);
                                                        })}>
                                                            <label style={{ color: "white", float: "left" }}>Email Address</label>
                                                            <div className="form-group">

                                                                <input type="email" required className="form-style" placeholder="Your Email"
                                                                    {...register("emailAddress")}

                                                                />

                                                                <span className="cum-error">{errors.emailAddress?.message}</span>

                                                            </div>

                                                            {

                                                                forgotNoEmail &&
                                                                <label className="w-100">
                                                                    <input type="checkbox" class="alertCheckbox" autocomplete="off" />
                                                                    <div class="alert error">
                                                                        <span class="alertClose">X</span>
                                                                        <span class="alertText">{forgotNoEmailText}
                                                                            <br class="clear" /></span>
                                                                    </div>

                                                                </label>
                                                            }
                                                            {
                                                                pendingEmail ? <button className="btn"> <span className="loader"></span></button> : <button type="submit" className="btn">Submit</button>
                                                            }


                                                        </form>
                                                    </div>
                                                }
                                                {
                                                    enterCode &&
                                                    <div className="center-wrap">
                                                        <h4 className="heading">Enter Code</h4>
                                                        <div style={{ color: "white" }}>Enter six digit code sent to your mail</div>
                                                        <br />
                                                        <form >
                                                            <label style={{ color: "white", float: "left" }}>Enter code</label>

                                                            <div className="form-group">

                                                                <input type="text" className="form-style" placeholder="Enter code" onChange={handleChangeCode} />

                                                                <span className="cum-error">{errors.code?.message}</span>

                                                            </div>

                                                            {

                                                                invalidCode &&
                                                                <label className="w-100">
                                                                    <input type="checkbox" class="alertCheckbox" autocomplete="off" />
                                                                    <div class="alert error">
                                                                        <span class="alertClose">X</span>
                                                                        <span class="alertText">Invalid Code
                                                                            <br class="clear" /></span>
                                                                    </div>

                                                                </label>


                                                            }

                                                            <a href="#" type="submit" className="btn" onClick={handleSumbitCode}>Submit</a>

                                                        </form>
                                                    </div>
                                                }
                                                {
                                                    enterNewPassword &&
                                                    <div className="center-wrap">
                                                        <h4 className="heading">Enter Code</h4>
                                                        <form  onSubmit={handleSubmit((data) => {
                                                            console.log('Now', data);
                                                            handleSumbitNewPassword(data);
                                                        })}>
                                                            <label style={{ color: "white", float: "left" }}>Enter new password</label>
                                                            <div className="form-group">

                                                                <input type="password" name="password" className="form-style" placeholder="Enter new password"  {...register('password', {
                                                                    required: 'Password is required',
                                                                    maxLength: {},
                                                                })} />
                                                                <span className="cum-error">{errors.password?.message}</span>
                                                            </div>
                                                            <label style={{ color: "white", float: "left" }}>Confirm password</label>
                                                            <div className="form-group">

                                                                <input type="password" name="password_repeat" className="form-style" placeholder="Confirm password"
                                                                    {...register("password_repeat", {
                                                                        required: 'Confirm password',
                                                                        validate: value => value === password.current || "The password does not match"
                                                                    })}
                                                                />
                                                                <span className="cum-error">{errors.password_repeat?.message}</span>
                                                            </div>
                                                            {

                                                                errorChangePassword &&
                                                                <label className="w-100">
                                                                    <input type="checkbox" class="alertCheckbox" autocomplete="off" />
                                                                    <div class="alert error">
                                                                        <span class="alertClose">X</span>
                                                                        <span class="alertText">Something went wrong, please try again later
                                                                            <br class="clear" /></span>
                                                                    </div>

                                                                </label>


                                                            }
                                                            {
                                                                successChangePassword && <label className="w-100">
                                                                    <input type="checkbox" class="alertCheckbox" autocomplete="off" />
                                                                    <div className="alert success">
                                                                        <span className="alertClose">X</span>
                                                                        <span className="alertText">Password changed successfully, Please login <br />
                                                                            {/* <Link to="*"> Login</Link> */}
                                                                        </span>
                                                                    </div>
                                                                </label>
                                                            }

                                                            <button  type="submit" className="btn">Submit</button>

                                                        </form>
                                                    </div>
                                                }



                                            </div>






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