import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/Navbar';
import Home from './Pages/Home';
import AvailableEvents from './Pages/AvailableEvents';
import AboutUs from './Pages/AboutUs';


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<AvailableEvents />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;