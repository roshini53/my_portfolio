import React from "react";
import { motion } from "framer-motion";

function Home({ darkMode }) {
  const containerStyle = {
    padding: "40px",
    borderRadius: "12px",
    backgroundColor: darkMode ? "#111" : "#fff",
    color: darkMode ? "#800020" : "#3a0a0a",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
  };

  return (
    <motion.div
      style={containerStyle}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1>Welcome to My Portfolio</h1>
      <p>I’m <b>Roshini Priya</b>, <br></br>B Tech computer science and medical engineer (AI and DA)</p>
    </motion.div>
  );
}

export default Home;
