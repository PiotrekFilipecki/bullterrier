import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Accordion = ({ i, expanded, setExpanded, title, description, description2, practice }) => {
  const isOpen = i === expanded;

  return (
    <>
      <motion.div
        initial={false}
        animate={{
          backgroundColor: isOpen ? "transparent" : "transparent",
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
            className='daySection'
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            style={{
              padding: "0 2rem",
            }}
          >
            {/* Add description here */}
            {description && (
                <div className='theoryWrapper'>
                    <h4>Teoria</h4>
            {description.map((d, index) => {
                return (
                    <p key={index}>{d}</p>
                )
            })}
                </div>
            )}

{description2 && (
                <div className='theoryWrapper'>
                    <h4>Teoria</h4>
            {description2.map((d, index) => {
                return (
                    <p key={index}>{d}</p>
                )
            })}
                </div>
            )}
                        {practice && (
                <div className='theoryWrapper'>
                    <h4>Praktyka</h4>
            {practice.map((d, index) => {
                return (
                    <p key={index}>{d}</p>
                )
            })}
                </div>
            )}
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export default Accordion;