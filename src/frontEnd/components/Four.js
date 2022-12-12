import React, { useState } from "react";
import { motion } from "framer-motion";

export const Four = () => {
  const [isToggled, setToggle] = useState(false);
  const toggle = {
    borderRadius: 30,
    width: 100,
    height: 100,
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    cursor: "pointer",
  };

  const variants = {
    active: {
      opacity: 1,
      background: "#7fffd4",
      x: "-50px",
      scale: 1.5,
      color: "#333",
    },
    unActive: {
      opacity: 1,
      background: "#f95c5c",
      x: "50px",
      scale: 1,
      color: "white",
    },
  };
  return (
    <div>
      <motion.div
        onClick={() => setToggle(!isToggled)}
        style={toggle}
        animate={isToggled ? "active" : "unActive"}
        variants={variants}>
        <span>{isToggled ? "on" : "off"}</span>
      </motion.div>
    </div>
  );
};


