import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Css/Login.css"

function Login (onLogin) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

      function handleSubmit(e) {
          e.preventDefault();
          setIsLoading(true);
            fetch("/login", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify({ name }),
           })
           .then((r) => {
            setIsLoading(false);
            if (r.ok) {
              r.json().then((user) => onLogin(user));
            } else {
              r.json().then((err) => setErrors(err.errors));
            }
          });
        }

    return(
        <div className='log-in-container'>
        <div className='box'>
         <form className='login-form' onSubmit={handleSubmit}>
          <div className='field text-black'>
              <input id='username'  type='text'
              placeholder='name'  value={name} onChange={(e) => setName(e.target.value)}/>
              <label htmlFor="username">Name </label>
          </div>    
          <div className='field text-black'>  
              <input id='password' type='password'
              placeholder='password'  value={password} onChange={(e) => setPassword(e.target.value)} />
              <label htmlFor="password">Password</label>
          </div>
          <NavLink to ='/hubs'className='login-button' title='login'>Log in</NavLink>
          <div className='separator'>
            <div className='line'></div>
                    <p>OR</p>
            <div className='line'></div>        
          </div>
          <div className='other'>
            <a className='forgot-password'>Forgot password</a>
         </div>
         </form>
          <div className='boxacc'>
            <p>Don't have an account?
              <NavLink to ='/signup' className='signup'>Sign Up</NavLink> 
              </p>
          </div>  
        </div>               
        </div>
    )
}

export default Login;