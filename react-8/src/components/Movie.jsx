import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const Movie = ({ title, backdrop_path }) => {
  return (
    <motion.div
      layout
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 1 }}
      exit={{ opacity: 1, scale: 0 }}
      transition={{duration:0.5}}
      className=" text-center"
    >
      <AnimatePresence>
        <h1 className=" text-lg">{title}</h1>
        <img
          className=" rounded-md"
          src={`https://image.tmdb.org/t/p/w300${backdrop_path}`}
          alt=""
        />
      </AnimatePresence>
    </motion.div>
  );
};

export default Movie;
