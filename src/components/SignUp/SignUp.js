import React, { useState } from 'react'
import './SignUp.css'
import { Outlet, Link } from "react-router-dom";
import logo from '../../images/SignUp/lb-logo.png'
import lowerImg from '../../images/SignUp/lower.png'
import google from '../../images/SignUp/google.png'
import hubspot from '../../images/SignUp/hubspot.png'
import upperImg from '../../images/SignUp/upper.png'
// import lowerRight from '../../images/SignUp/lowerRight.png'
// import girlImg from '../../images/SignUp/girl.png'
import VerifyAcc from '../VerifyAcc/VerifyAcc'
import SignInPage from '../../components/Signinform/Signinform'

export default function SignUp(props) {

    //   const [inputType, setinputType] = useState("password");
    //   const [button, setButton] = useState("Show password");

    //   function showOrHide() {
    //     if (inputType === "password" && button === "Show password") {
    //       setinputType("text");
    //       setButton("Hide password");
    //     } else if (inputType === "text" && button === "Hide password") {
    //       setinputType("password");
    //       setButton("Show password");
    //     }
    //   }

    const [popup, setVerifyPop] = useState(false)
    const verifyPOpUpOpen = () => {
        setVerifyPop(!popup)
    }
    const closeVerifyPopup = () => {
        setVerifyPop(false)
    }


    const [signInPage, setSignInPage] = useState(false)
    const signInPageOpen = () => {
        setSignInPage(!signInPage)
    }



    const [inputType, setinputType] = useState("password")
    const [show, setshow] = useState(false)
    function showOrHide() {
        if (inputType === "password") {
            setinputType("text");
            setshow(true);
        }
        else {
            setinputType("password");
            setshow(false);
        }
    }

    return (
        <>
            {popup ? <VerifyAcc verifyPopUp={closeVerifyPopup} /> : null}
            {signInPage ? <SignInPage /> : null}

            {/* <div class="input-group has-validation">
                <div class="input-group-prepend">
                    <span class="input-group-text">@</span>
                </div>
                <input type="text" class="form-control" required />
                <div class="invalid-feedback">
                    Please choose a username.
                </div>
            </div> */}
            <div className='container-fluid sign-up'>
                <div className="row">
                    <div className="col-md-5 col-sm-12 left-block">
                        <div className="logo-section">
                            <img className="logo p-1" src={logo}></img>
                        </div>
                        <div className=" text-div ">
                            <p className="head-text big-font">Welcome!</p>
                            <p className="small-font left-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut . </p>
                            <a href="#"><button onClick={signInPageOpen} className="btn btn-light sign-btn">SIGN IN</button></a>
                        </div>
                        <div>
                            <img className="lowerImg" src={lowerImg}></img>
                        </div>
                    </div>
                    <div className="col-md-7 col-sm-12 right-block">
                        <div>
                            <img className="upper" src={upperImg}></img>
                        </div>
                        <div>
                            <div className="right-head">
                                <p className=" text-center">Create Account</p>
                            </div>
                            <div>
                                <div className="form-section">
                                    <form className="has-validation w-50">
                                        {/* <label htmlFor="name">Full Name</label> */}
                                        <input className="mt-4" type="text" id="name" name="name" placeholder='Full Name' required />
                                        <div class="invalid-feedback">
                                            Please choose a username.
                                        </div>
                                        {/* <label htmlFor="email">Email</label> */}
                                        <input className="mt-4" type="email" id="email" name="email" placeholder='Email' required />

                                        {/* <label htmlFor="password">Password</label> */}
                                        <input className="mt-4" type={inputType} name="password" id="id_password" placeholder='Password' required />
                                        {/* <i className="far fa-eye-slash eye-icon" onClick={showOrHide} id="togglePassword"></i> */}

                                        {show == false ?
                                            <i className="far fa-eye-slash eye-icon" onClick={showOrHide} id="togglePassword"></i> :
                                            <i className="far fa-eye eye-icon" onClick={showOrHide} id="togglePassword"></i>
                                        }

                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" required />
                                            <label className="form-check-label small-font" htmlFor="inlineCheckbox1">I have read and agree to the Terms of Service</label>
                                        </div>
                                        <div className="mt-4">
                                            <a href="#"><button onClick={verifyPOpUpOpen} className="small-font button btn w-100">Create Account</button></a>
                                        </div>

                                    </form>
                                </div>
                                <div className="text-center">
                                    <div>
                                        <p className="small-font mt-1">Already have an account?<span onClick={setSignInPage} className='text-primary btn btn-sm py-0'>Log in</span></p>
                                    </div>
                                    <div>
                                        <p className="or mt-2">-OR-</p>
                                    </div>
                                </div>
                                <div className="row btn-section mt-3">
                                    <div className="col-12 col-md-6 g-section ">
                                        <a href="#"><button className="google btn btn-light"><img className="" src={google}></img>Sign up with Google</button></a>
                                    </div>
                                    <div className="col-12 col-md-6 h-section">
                                        <a href="#"><button className="hubspot btn btn-light"><img className="" src={hubspot}></img>Sign up with hubspot</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}
