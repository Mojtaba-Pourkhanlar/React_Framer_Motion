import { motion } from "framer-motion";

export const Five = () => {
  const demo = {
    backgroundColor: "black",
    borderRadius: "30px",
    width: "150px",
    height: "150px",
    textAlign: "center",
    color: "#fff",
    paddingTop: "50px",
  };

  return (
    <div>
      <motion.div
        style={demo}
        whileHover={{
          rotate: [0, 0, 270, 270, 0],
          scale: 1.1,
          transition: { duration: 1 },
        }}>
        Hover
      </motion.div>
    </div>
  );
};
