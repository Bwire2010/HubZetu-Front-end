import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Home from "./Home";
import HubForm from "./HubForm";
import Hubs from "./Hubs";
import Login from "./Login";
import NavBarHome from "./NavBarHome";
import ProtectedRoute from "./ProtectedRoute";
import Signup from "./Signup";
import HubDetails from "../components/HubDetails";


export default function Navigation() {
  const [hubs, setHubs] = useState([]);

  useEffect(() => {
    fetch("/hubs")
      .then((r) => r.json())
      .then(setHubs);
  }, []);

  function handleAddHub(addedHub) {
    setHubs((hubs) => [...hubs, addedHub]);
  }

  return (
    <Router>
      <NavBarHome />
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route
            path="/hubs/new"
            element={<HubForm onAddHub={handleAddHub} />}
          />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hubs" element={<Hubs />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/hubs/:id" element={<HubDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}
