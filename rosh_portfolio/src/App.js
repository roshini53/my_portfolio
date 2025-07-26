import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const appStyle = {
    display: "flex",
    minHeight: "100vh",
    backgroundColor: darkMode ? "#000" : "#800020",
    color: darkMode ? "#800020" : "#fff",
    transition: "all 0.3s ease",
  };

  const contentStyle = {
    flex: 1,
    padding: "40px",
    marginLeft: "220px",
  };

  return (
    <Router>
      <div style={appStyle}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <div style={contentStyle}>
          <Routes>
            <Route path="/" element={<Home darkMode={darkMode} />} />
            <Route path="/about" element={<About darkMode={darkMode} />} />
            <Route path="/projects" element={<Projects darkMode={darkMode} />} />
            <Route path="/contact" element={<Contact darkMode={darkMode} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
