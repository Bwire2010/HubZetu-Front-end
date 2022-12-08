import React from "react";
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import Signup from './components/Signup';
import { Routes, Route } from "react-router-dom";
import Login from './components/Login';

function App() {
  /*const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;
*/
  return (
    <div className="App">
      <NavBar />
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
