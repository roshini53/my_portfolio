import React from "react";
import { motion } from "framer-motion";

function Contact({ darkMode }) {
  const style = {
    padding: "30px",
    backgroundColor: darkMode ? "#111" : "#fff",
    color: darkMode ? "#800020" : "#3a0a0a",
    borderRadius: "12px",
  };

  return (
    <motion.div
      style={style}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2>Contact Me</h2>
      <p>Email: roshini@gmail.com</p>
      <p>Phone: +91 9876543210</p>
    </motion.div>
  );
}

export default Contact;
