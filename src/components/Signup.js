import React from 'react'
import { Nav } from 'react-bootstrap';
import "../Css/Signup.css"

function Signup() {
  function handleSubmit(e) {
    // e.preventDefault();
    // fetch("http://127.0.0.1:4000/signup", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     username,
    //     password,
    //     password_confirmation: passwordConfirmation,
    //   }),
    // })
    //   .then((r) => r.json())
    //   .then();
  }
  return (
    <div className="signup-content">
        <div className ="signup">   
          <h1>Sign Up </h1>
          <form className='signup-form' onSubmit={handleSubmit}>
          <div class="top-row">
            <div className="field-wrap">
              <label>
                Name<span class="req">*</span>
              </label>
              <input type="text"required autocomplete="off"/>
            </div>
          </div>
          <div class="field-wrap">
            <label>
              Email Address<span class="req">*</span>
            </label>
            <input type="email"required autocomplete="off"/>
          </div>
          <div class="field-wrap">
            <label>
              Set A Password<span class="req">*</span>
            </label>
            <input type="password"required autocomplete="off"/>
          </div>
          </form>
          <div className='signup-btn'>
            <Nav.Link to="/login" className="button-block" >Get Started</Nav.Link>
          </div>
         </div>  
         </div>
  )
}

export default Signup