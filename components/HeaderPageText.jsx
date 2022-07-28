import React from 'react';
import { motion } from 'framer-motion';
const HeaderPageText = () => {
  const list = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.8,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: 'afterChildren',
      },
    },
  };

  const animatedTitle = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      y: -30,
    },
  };

  return (
    <div className="w-full flex max-w-[700px] mx-auto h-[255px] my-10">
      {/*Title container*/}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={list}
        className="flex-1 text-7xl text-indigo-200 font-medium flex flex-col justify-between"
      >
        <motion.h1 variants={animatedTitle}>Developer.</motion.h1>
        <motion.h2 variants={animatedTitle}>UI Designer.</motion.h2>
        <motion.h2 variants={animatedTitle}>Engineer.</motion.h2>
      </motion.div>
      <div>
        <img
          src="/img/tite2.png"
          alt="Enrique Alvarado"
          className="w-[200px] rounded-sm"
        />
      </div>
    </div>
  );
};

export default HeaderPageText;
