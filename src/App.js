import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import HubCreateForm from './components/HubCreateForm';
import ReviewCreateForm from './components/ReviewCreateForm';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <HubCreateForm/>
      <ReviewCreateForm/>
      <Footer/>
    </div>
  );
}

export default App;
