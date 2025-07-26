import React from "react";
import { motion } from "framer-motion";

function Projects({ darkMode }) {
  const style = {
    padding: "30px",
    backgroundColor: darkMode ? "#111" : "#fff",
    color: darkMode ? "#800020" : "#3a0a0a",
    borderRadius: "12px",
  };

  return (
    <motion.div
      style={style}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2>Projects</h2>
      <p>
        <h3><b>School Management System using MySQL</b></h3><br></br>
Designed and implemented a backend system to manage school data, ensuring efficient storage and retrieval of student and staff information.

<h3><b>Frontend Development (Cloned SRET Website)</b></h3><br></br>
Developed a responsive website clone using HTML, CSS, Bootstrap, and PHP for layout replication and UI design.

<h3><b>Ecommerce Sales Dashboard using Tableau</b></h3><br></br>
Built an interactive sales dashboard to visualize and analyze ecommerce data using Tableau, aiding in decision-making.

<h3><b>Gravity Simulation using JavaScript</b></h3><br></br>
Created a physics-based simulation to represent gravity behavior using JavaScript, enhancing visual and interactive learning.

<h3><b>Predictive Model for Disease Detection</b></h3><br></br>
Developed a predictive model using Python and Scikit-learn to detect diseases based on patient symptoms and historical health data with high accuracy.

<h3><b>kidney stone Segmentation using Deep Learning</b></h3><br></br>
Implemented deep learning-based medical kidney stone segmentation using image J to identify and segment kidney stones from CT scan images.

<h3><b>Mitotic Cell Classification using CNN</b></h3><br></br>
Designed and trained a Convolutional Neural Network (CNN) to classify mitotic vs non-mitotic cells from histopathology images using image preprocessing, augmentation, and Keras/TensorFlow framework

</p>
    </motion.div>
  );
}

export default Projects;
