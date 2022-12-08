// import "../index.css"
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import HubItem from './components/HubItem';
import {Routes,Route } from "react-router-dom";
import HubForm from './components/HubForm';
import { useState, useEffect } from "react";
import HubDetails from './components/HubDetails';

function App() {


  const [hubs, setHubs] = useState([]);

  useEffect(() => {
    fetch("/hubs")
      .then((r) => r.json())
      .then(setHubs);
  }, []);

  function handleAddHub(addedHub) {
    setHubs((hubs) => [...hubs, addedHub]);
  }

  function handleDeleteHub(deletedHub) {
    setHubs((hubs) =>
      hubs.filter((hub) => hub.id !== deletedHub.id)
    );
  }

  return (
    <div className="App">
      <NavBar/>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/hubs/:id' element={<HubDetails/>} />
        <Route path='/hubs/new' element={<HubForm onAddHub={handleAddHub} />} />
  
        <Route path='/hubs' element={hubs.map((hub) => (
            <HubItem
              key={hub.id}
              hub={hub}
              onDeleteHub={handleDeleteHub}
            />
          ))} />
        </Routes>
        
      <Footer/>
    </div>
  );
}

export default App;
