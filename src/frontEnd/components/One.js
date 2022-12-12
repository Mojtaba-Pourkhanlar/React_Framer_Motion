import React from "react";
import { motion } from "framer-motion";

export const One = () => {
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
        animate={{ rotate: 360 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />
    </div>
  );
};


