import React from "react";
import { motion } from "framer-motion";

function About({ darkMode }) {
  const style = {
    padding: "30px",
    backgroundColor: darkMode ? "#111" : "#fff",
    color: darkMode ? "#800020" : "#3a0a0a",
    borderRadius: "12px",
  };

  return (
    <motion.div
      style={style}
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2>About Me</h2>
      <p>
       Aspiring Full Stack Developer / Software Engineer Intern with strong skills in web development and data handling. Experienced in building real-time web applications using HTML, CSS, JavaScript, PHP, and MySQL. Strong interest in IoT integration and data visualization using tools like Tableau. Proven ability to manage end-to-end project development and problem-solving. Enthusiastic about applying technical skills to contribute to impactful solutions in the tech industry.
      </p>
    </motion.div>
  );
}

export default About;
