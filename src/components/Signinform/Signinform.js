import './signinform.css';
// import '../../Components/Forgetpass/Forgetpass';
import interact from "../../images/Signinimage/Vector.png";
import Google from "../../images/Signinimage/google.png";
import Hubspot from "../../images/Signinimage/Hub.png";
import React, { useState } from 'react';
import Ellipse1 from "../../images/Signinimage/Ellipse 12.png";
import Ellipse2 from "../../images/Signinimage/Ellipse 11.png";
import SignUp from '../../components/SignUp/SignUp'
import Forgetpass from '../../components/Forgetpass/Forgetpass'

export default function Signinform(props) {

  const [inputType, setinputType] = useState("password");
  const [hide, sethide] = useState(false);
  function showhidedata() {
    if (inputType === "password") {
      setinputType("text");
      sethide(true);
    } else {
      setinputType("password");
      sethide(false);
    }
  }

  const [popup, setPop] = useState(false)
  const handleClickOpen = () => {
    setPop(!popup)
  };
  const closePopup = () => {
    setPop(false)
  };

  const [signUpPage, setSignUpPage] = useState(false)
    const signUpPageOpen = () => {
      setSignUpPage(!signUpPage)
    }
    const closeSignUpPage = () => {
      setSignUpPage(false)
    };



  return (
    <>
     <div className=''>
                    {popup ? <Forgetpass data={closePopup} /> : null}
                  </div>
                  {signUpPage ? <SignUp signupPage={closeSignUpPage}/> : null}

      <div className='container-fluid singinform-hiden'>
        <div className='row signinrow'>
          <div className='col-md-5 col-12 maininteract pr-4 pb-3'>
            <div className='row mt-3 ml-4 logoimg'>
              <img src={interact} className="lblogo p-1" alt="" />
            </div>
            <div className='row interactdes text-white ml-4'>
              <h2 className='interactdes-title mr-2 pr-3'>Create your account in easy way</h2>
              <p className='interactdes-text mt-3 pr-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut . </p>
              <a href='#'><button onClick={signUpPageOpen} type="button" class="btn btn-light account-btn p-2">CREATE ACCOUNT</button></a>
            </div>
            <img src={Ellipse1} class="ellipseimage1" alt="" />
          </div>
          <div className='col-md-7 col-12 d-flex justify-content-center'>
            <img src={Ellipse2} class="ellipseimage2" alt="" />
            <div className='row'>

              <form action="/" className='signincol'>
                <h2 className="signintext text-center pb-2"> Sign in</h2>
                <div>
                  <div>
                    <input type="email" id="username" name="username" className="mailspace w-100 pb-2" placeholder="Email Address" required /> <br />
                    <div className='psddiv mt-5'>

                      <input type={inputType} id="psw" name="psw" className="psdspace w-100 pb-2" placeholder="Password" required />
                      {hide == true ?
                        <i class="far fa-eye eye-icon eyepassword d-inline float-right" onClick={showhidedata} id="togglePassword"></i> :
                        <i class="far fa-eye-slash eyepassword d-inline float-right" onClick={showhidedata} id="togglePassword"></i>}
                    </div>
                  </div>
                  <div className='termsin mt-3'>
                    <input type="checkbox" id="scales" name="scales" required />
                    <label for="scales" className='termtext ml-2'> I have read and agree to the Terms of Service</label>
                  </div>
                  <div className='text-center mt-2 createbtn'>
                    <a href='#'><button onClick={signUpPageOpen} type="button" class="btn w-100 p-2" >Sign In</button></a>
                  </div>
                  <div className='forgetdata mt-2'>
                    <span className=''>No account?<a className='text-primary btn btn-sm py-0' onClick={signUpPageOpen}>Sign up now</a></span>
                    <p className='forget float-right text-decoration-none btn btn-sm py-0' onClick={handleClickOpen} ><a >Forgot password?</a></p>
                  </div>
                 

                  <br />
                  <p className='text-center ordevide'>- OR -</p>
                  <div className="row btn-section mt-3">
                    <div className="col-md-6 col-12 g-section">
                      <a href="#"><button className="google btn btn-light"><img class="" src={Google}></img>Sign up with Google</button></a>
                    </div>
                    <div className="col-md-6 col-12 h-section ">
                      <a href="#"><button className="hubspot btn btn-light"><img class="" src={Hubspot}></img>Sign up with hubspot</button></a>
                    </div>
                  </div>
                </div>
              </form>

            </div>
          </div>

        </div>


      </div>
    </>
  )
}


