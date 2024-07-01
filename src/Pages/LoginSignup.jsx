import React from 'react'
import './CSS/LoginSighup.css'

const LoginSignup = () => {
  return (
    <div className='login-signup'>
      <div className="form-container">
        <h1>Sign Up</h1>
        <div className="form-group">
          <input type="text" placeholder='Your Name' />
        </div>
        <div className="form-group">
          <input type="email" placeholder='Email Address' />
        </div>
        <div className="form-group">
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className='login-link'>Already have an account? <span>Login here</span></p>
        <div className="terms-checkbox">
          <input type="checkbox" name='' id='' />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup
