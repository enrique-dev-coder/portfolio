import React from 'react';
import { useProvider } from '../context/ContextProvider';
import { AnimatePresence, motion } from 'framer-motion';
import Section from './Section';
const ThemeButton = () => {
  const { dark, setDark } = useProvider();
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      {dark ? (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.2 }}
          key={1}
          className={`bg-indigo-100 p-1 rounded-md transition duration-300 ease-in-out cursor-pointer`}
          onClick={() => setDark(!dark)}
        >
          <img
            src="/img/sun_icon.svg"
            alt="toogle color theme"
            className="w-[25px] h-[25px]"
          />
        </motion.div>
      ) : (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.2 }}
          key={2}
          className={`bg-indigo-800 p-1 rounded-md transition duration-300 ease-in-out cursor-pointer`}
          onClick={() => setDark(!dark)}
        >
          <img
            src={'/img/moon_icon.svg'}
            alt="toogle color theme"
            className="w-[25px] h-[25px]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ThemeButton;
