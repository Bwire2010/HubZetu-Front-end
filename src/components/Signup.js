import React, { useState } from "react";
import "../Css/Signup.css"
import { NavLink } from 'react-router-dom';

function Signup({ onLogin}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
      "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
     }),
    })
    .then((r) => r.json())
    .then();
  }


  return (
    <div className="signup-content">
        <div className ="signup">   
          <h1>Create Free Account </h1>
          <form className='signup-form' onSubmit={handleSubmit}>
          <div className="top-row">
            <div className="field-wrap">
              <label className="label">
                Name<span className="req">*</span>
              </label>
              <input type="text" id="name" value={name}  onChange={(e) => setName(e.target.value)}/>
            </div>
          </div>
          <div className="field-wrap">
            <label className="label">
              Email Address<span className="req">*</span>
            </label>
            <input type="email" id="email"  value={email}   onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="field-wrap">
            <label className="label">
              Set A Password<span className="req">*</span>
            </label>
            <input type="password" id="password"  value={password}   onChange={(e) => setPassword(e.target.value)}/>
          </div>
          </form>
          <div className='signup-btn'>
            <NavLink to="/login" className="button-block" >Get Started</NavLink>
          </div>
         </div>  
         </div>
  )
}

export default Signup