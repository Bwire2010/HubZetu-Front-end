
// import "../index.css"
import Footer from './components/Footer';
import HubItem from './components/HubItem';
import {Routes,Route } from "react-router-dom";
import HubForm from './components/HubForm';
import { useState, useEffect } from "react";
import HubDetails from './components/HubDetails';
import React from "react";
import Homepage from "./components/Homepage";



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
      <Homepage/>
        <Routes>
        
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