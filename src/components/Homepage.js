import React, { useEffect, useState } from "react";
import NavBarHome from "./NavBarHome";
import Home from './Home';
import Signup from './Signup';
import { Routes, Route } from "react-router-dom";
import Login from './Login';

function Homepage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <div className="App">
      <NavBarHome user={user} setUser={setUser} />
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
        </Routes>
    </div>
  );
}

export default Homepage;
