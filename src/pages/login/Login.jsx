import React, { useState } from 'react'
import './login.css'
import logo from '../../asset/logo.png'

const Login = () => {

  const [signState,setsignState] = useState("Sign In")
  return (
    <>
      <div className="login">
        <img src={logo} className="login-logo" alt="" />
        <div className="login-form">
          <h1>{signState}</h1>
          <form>
            {signState === "Sign Up" ?<input type="text" placeholder='Your Name' />:<></>}
            <input type="email" placeholder='Your Email' />
            <input type="password" placeholder='Your Password' />
            <button>{signState}</button>
            <div className="form-help">
              <div className="remember">
                <input type="checkbox" />
                <label> Remember me</label>
              </div>
            <p>Need Help?</p>
            </div>
          </form>
          <div className="form-switch">
            {signState === "Sign In" ? <p>New to Netflix? <span onClick={()=>{setsignState("Sign Up")}}> Sign Up Now</span></p>: <p>Already have account? <span onClick={()=>{setsignState("Sign In")}}>Sign In Now</span></p>}
           
           
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
