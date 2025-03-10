import { useForm } from "react-hook-form";
import HomeFooter from "./homeFooter";
import NavBar from "./navBar";
import "./navbar.scss";
import "./navbar.css"
import { IoIosPerson } from "react-icons/io";
import { GiHumanTarget } from "react-icons/gi";
import { MdAttachEmail, MdTitle } from "react-icons/md";
import { FaPhoneVolume, FaWhatsapp } from "react-icons/fa";
import { useRef, useState } from "react";
import { validateYupSchema } from "formik";
import useGetData from "../utility/getFunction";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";





const UserRegister = (() => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isDirty, isValid },
  } = useForm();
  const [stateName, setStateName] = useState("");
  const [lga, setLga] = useState([]);
  const [regData, setRegData] = useState("");
  const [success, setSuccess] = useState(false);
  const [showInvalid, setShowInvalid] = useState(false);
  const [invalidText, setInvalidText] = useState("")
  const [gender, setGender] = useState("");
  const [registerPending, setRegisterPending] = useState(true);

  const password = useRef({});

  const navigate = useNavigate();

  password.current = watch("password", "");




  const handleGetLga = async (e) => {

    const findState = state.find((st) => st.stateId === e.target.value)
    setStateName(findState)
    try {
      const res = await axios.get(`http://localhost:4000/getLocalGovt/${e.target.value}`);
      console.log('Success Data:', res.data);
      setLga(res.data.local_governments);
    } catch (err) {
      console.error('Error fetching LGAs:', err);
    }
  };





  const handleSubmitRegistration = async data => {

    const datas = {
      ...data,
      state: stateName.name,
      gender: gender,
      accessRole: "General"
    }

    setRegisterPending(true)

    console.log("SendingData..", datas)

    await axios
      .post('http://localhost:4000/registration', datas)
      .then(res => {
        console.log('sucessData', res);
        setRegData(res.data)
        setSuccess(true)
        setTimeout(() => {
          navigate("*")
        }, 3000)
        setRegisterPending(false);
      })
      .catch(err => {
        console.log('err', err);
        const response = err?.response?.data
        setInvalidText(response.message)
        setShowInvalid(true);
        setRegisterPending(false);

      });
  };


  const {
    data: state,
    isPending: statePending,
    error: stateError,
  } = useGetData('http://localhost:4000/getAllStates');




  console.log("state>>>", state)




  return (
    <>
      <NavBar />

      <div className="form_wrapper">
        <div className="form_container">
          <div className="title_container">
            <h2>Registration Form</h2>
          </div>
          <div className="row clearfix">
            <div className="">
              <span style={{ color: 'red' }}>*</span> Indicates required question
              <form onSubmit={handleSubmit((data, event) => {
            
                console.log('seedataNow', data);
                handleSubmitRegistration(data);
              })}>


                <div className="row clearfix">
                  <div className="col_half">
                    <label>First name   <span style={{ color: "red" }}>*</span></label>
                    <div className="input_field">

                      <span><i className="mtyTopIcon" ><IoIosPerson size={20} />
                      </i></span>

                      <input type="text" name="name" placeholder="First Name"
                        {...register('firstName', {
                          required: 'First name is required',
                          maxLength: {},
                        })}
                      />

                    </div>
                    <span className="cum-error">{errors.firstName?.message}</span>
                  </div>
                  <div className="col_half">
                    <label>Last name <span style={{ color: "red" }}>*</span></label>
                    <div className="input_field">

                      <span><i aria-hidden="true" className="mtyTopIcon"> <GiHumanTarget size={20} /> </i></span>
                      <input type="text" name="name" placeholder="Last Name"
                        {...register('lastName', {
                          required: 'Last name is required',
                          maxLength: {},
                        })}
                      />

                    </div>
                    <span className="cum-error">{errors.lastName?.message}</span>
                  </div>
                </div>

                <div className="row clearfix">
                  <div className="col_half">
                    <label>Individual title/position</label>


                    <div className="input_field select_option">
                      <select {...register('nameTitle')}>
                      <option disabled>Select title</option>
                        <option>Mr.</option>
                        <option>Mrs.</option>
                        <option>Miss.</option>
                        <option>Master.</option>
                        <option>Prof.</option>
                        <option>Dr.</option>
                        <option>Bar.</option>
                        <option>Chief.</option>
                        <option>Comrade.</option>
                        <option>Engr.</option>
                        <option>Others</option>

                      </select>
                      <div className="select_arrow"></div>
                    </div>
                  
                  </div>
                  <div className="col_half">
                    <label>Email address   <span style={{ color: "red" }}>*</span></label>
                    <div className="input_field">

                      <span><i aria-hidden="true" className="mtyTopIcon"> <MdAttachEmail size={20} /></i></span>
                      <input type="email" name="name" placeholder="Email..."
                        {...register('email', {
                          required: 'Email is required',
                          maxLength: {},
                        })}

                      />

                    </div>
                    <span className="cum-error">{errors.email?.message}</span>
                  </div>
                </div>


                <div className="row clearfix">
                  <div className="col_half">
                    <label>Phone number  <span style={{ color: "red" }}>*</span></label>
                    <div className="input_field">

                      <span><i aria-hidden="true" className="mtyTopIcon">  <FaPhoneVolume size={20} /></i></span>

                      <input type="text" name="number" placeholder="Enter phone number"
                        {...register('phoneNumber', {
                          required: 'Phone number is required',
                          maxLength: {},
                        })}

                      />

                    </div>
                    <span className="cum-error">{errors.phoneNumber?.message}</span>
                  </div>
                  <div className="col_half">
                    <label>WhatsApp number  </label>
                    <div className="input_field">

                      <span><i aria-hidden="true" className="mtyTopIcon" >  <FaWhatsapp size={20} />
                      </i></span>
                      <input type="text" name="name" placeholder="WhatsApp number"
                        {...register('whatsAppNumber')}
                      />
                    </div>
                  </div>
                </div>
                <div className="row clearfix">
                  <div className="col_half">
                    <label>Password  <span style={{ color: "red" }}>*</span></label>
                    <div className="input_field">

                      <span><i aria-hidden="true" className="mtyTopIcon">  <FaPhoneVolume size={20} /></i></span>

                      <input type="password" name="password" placeholder="Password..."
                        {...register('password', {
                          required: 'Password is required',
                          maxLength: {},
                        })}/>

                    </div>
                    <span className="cum-error">{errors.password?.message}</span>
                  </div>
                  <div className="col_half">
                    <label>Confirm Password  </label>
                    <div className="input_field">

                      <span><i aria-hidden="true" className="mtyTopIcon" >  <FaWhatsapp size={20} />
                      </i></span>
                      <input type="password" name="password_repeat" placeholder="Confirm password"
                        {...register("password_repeat", {
                          required: 'Confirm password',
                          validate: value => value === password.current || "The password does not match"
                        })}
                      />
                    </div>
                    <span className="cum-error">{errors.password_repeat?.message}</span>
                  </div>
                </div>


                <div className="row clearfix">
                  <div className="col_half">
                    <label>State   <span style={{ color: "red" }}>*</span></label>
                    <div className="input_field select_option">
                      <select onChange={handleGetLga} >

                        {
                          state && state.map((state) => (
                            <option value={state.stateId}> {state.name} </option>

                          ))
                        }
                        {/* <option >Select State</option>
                  <option>Option 1</option>
                  <option>Option 2</option> */}
                      </select>
                      <div className="select_arrow"></div>
                    </div>
                  </div>
                  <div className="col_half">
                    <label>Local government  <span style={{ color: "red" }}>*</span></label>
                    <div className="input_field select_option">
                      <select {...register('lga')}>
                        <option>Select Local government</option>
                        {
                          lga && lga.map((lg) => (
                            <option> {lg.name} </option>
                          ))
                        }


                      </select>
                      <div className="select_arrow"></div>
                    </div>
                  </div>
                </div>
                <div className="row clearfix">
                  <div className="col_half">
                    <label>Select ward  <span style={{ color: "red" }}>*</span></label>
                    <div className="input_field select_option">
                      <select {...register('ward')}>
                        <option>Select ward</option>
                        <option>Option 1</option>
                        <option>Option 2</option>
                      </select>
                      <div className="select_arrow"></div>
                    </div>
                  </div>
                  <div className="col_half">
                    <label>Select town  </label>
                    <div className="input_field select_option">
                      <select {...register('town')}>
                        <option>Select town</option>
                        <option>Option 1</option>
                        <option>Option 2</option>
                      </select>
                      <div className="select_arrow"></div>
                    </div>
                  </div>
                </div>
                <div className="input_field radio_option">
                <p>Selected Gender: {gender}</p>
      <input
        type="radio"
        name="radiogroup1"
        id="rd1"
        value="Male"
        checked={gender === "Male"}
        onChange={(e) => setGender(e.target.value)}
      />
      <label htmlFor="rd1"> Male </label>

      <input
        type="radio"
        name="radiogroup1"
        id="rd2"
        value="Female"
        checked={gender === "Female"}
        onChange={(e) => setGender(e.target.value)}
      />
      <label htmlFor="rd2"> Female </label>

      
    </div>

                {/* <div className="input_field checkbox_option">
                  <input type="checkbox" id="cb1" />
                  <label for="cb1">I agree with terms and conditions</label>
                </div> */}

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
                  success && <label className="w-100">
                    <input type="checkbox" class="alertCheckbox" autocomplete="off" />
                    <div className="alert success">
                      <span className="alertClose">X</span>
                      <span className="alertText">User registered successfully <br />
                        <Link to="*"> Login</Link>
                        <br className="clear" /></span>
                    </div>
                  </label>
                }
{/* {
  registerPending ? <span className="loader"></span> :  */}
  
  <input className="button" type="submit" value="Register" />
{/* } */}
                  

                
              </form>
            </div>
          </div>
        </div>
      </div>


      <HomeFooter />
    </>
  )
})

export default UserRegister