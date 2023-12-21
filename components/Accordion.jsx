import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Accordion = ({ i, expanded, setExpanded, title, description }) => {
  const isOpen = i === expanded;

  return (
    <>
      <motion.div
        initial={false}
        animate={{
          backgroundColor: isOpen ? "white" : "white",
        }}
        onClick={() => setExpanded(isOpen ? false : i)}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        //   padding: "1rem 1rem",
          cursor: "pointer",
          borderBottom: "2px solid #000000",
          width: "100%",
        }}
      >
        {/* Add title here */}
        <h3 className='dayTitle'>{title}</h3>
      </motion.div>


      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            // Add animations for the accordion content
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            style={{
              backgroundColor: "white",
              padding: "0 2rem",
            }}
          >
            {/* Add description here */}
            {description}
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export default Accordion;