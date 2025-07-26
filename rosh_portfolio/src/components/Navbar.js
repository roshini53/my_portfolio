import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar({ darkMode, setDarkMode }) {
  const location = useLocation();

  const navbarStyle = {
    width: "220px",
    height: "100vh",
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: darkMode ? "#111" : "#3a0a0a",
    padding: "40px 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    transition: "0.3s ease",
  };

  const navListStyle = {
    listStyle: "none",
    padding: 0,
    marginTop: "40px",
    width: "100%",
  };

  const linkStyle = (path) => ({
    display: "block",
    padding: "10px 20px",
    margin: "8px 0",
    textDecoration: "none",
    fontWeight: "bold",
    backgroundColor: location.pathname === path ? "#d9a6a6" : "transparent",
    color: darkMode ? "#800020" : "#fff",
    borderRadius: "8px",
    transition: "0.3s",
  });

  const toggleStyle = {
    marginTop: "20px",
    marginBottom: "20px",
    padding: "10px 20px",
    backgroundColor: darkMode ? "#800020" : "#fff",
    color: darkMode ? "#fff" : "#800020",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer",
    fontWeight: "bold",
  };

  return (
    <nav style={navbarStyle}>
      <h2 style={{ color: darkMode ? "#800020" : "#fff", marginBottom: "10px" }}>
        Roshini Priya
      </h2>
      <button onClick={() => setDarkMode(!darkMode)} style={toggleStyle}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <ul style={navListStyle}>
        {["/", "/about", "/projects", "/contact"].map((path, i) => {
          const labels = ["Home", "About", "Projects", "Contact"];
          return (
            <li key={path}>
              <Link to={path} style={linkStyle(path)}>
                {labels[i]}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
