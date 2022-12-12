import React from "react";
import { motion } from "framer-motion";

export const Two = () => {
  const styles = {
    background: "blue",
    borderRadius: 30,
    width: 150,
    height: 150,
    margin: "auto",
  };

  return (
    <div>
      <motion.div
        style={styles}
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 160, 270, 360, 0],
          borderRadius: ["20%", "50%", "20%", "50%", "20%"],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 1,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};
