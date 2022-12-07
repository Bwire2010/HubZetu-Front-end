import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <Signup/>
      <Footer/>
    </div>
  );
}

export default App;
