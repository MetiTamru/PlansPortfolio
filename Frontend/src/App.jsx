// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import Pricing from "./Pages/Pricing";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="bg-custom-gradient min-h-screen text-white"
   
   >
    <Router>
       <Navbar />
       <div className="bg-inherit bg-[#141414]">
      <Routes >
       
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* Fallback route for undefined paths */}
        <Route path="*" element={<Services />} />
        <Route path="*" element={<Pricing />} />
        <Route path="/pricing" element={<Pricing />} />
       
      </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
