import React, { useState } from "react";
import "../Css/Login.css"

function Login (onLogin) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  

  function handleSubmit(e) {
    e.preventDefault();
    e.target.reset();
    fetch("/login", {
      method: "POST",
      headers: {
      "Content-Type": "application/json",
        Application: "application/json"
      },
      body: JSON.stringify({
        name,
        password,
     }),
    })
    .then((res) => res.json())
      .then((data) => console.log(data))
      .catch(console.error);
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
          <button id="btn" type="submit" >
              Log in
            </button>
         </form> 
        </div>               
        </div>
    )
}

export default Login;