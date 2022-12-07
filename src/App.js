import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import Signup from './components/Signup';
import {Routes,Route } from "react-router-dom";
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <NavBar/>
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
