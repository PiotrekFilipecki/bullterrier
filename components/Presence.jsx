'use client';
import { motion, AnimatePresence, AnimateSharedLayout, AnimatePresenceProps } from "framer-motion";
import { useRouter } from 'next/navigation';

const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
  }

export default function AnimateLayout({children}) {
    const router = useRouter();

    return (
        <AnimatePresence 
        mode="wait"
        //exitBeforeEnter
        // initial={false}
        //when="afterChildren"
        //variants={variants}
        //transition={{ type: 'spring', damping: 50, stiffness: 300, when: 'afterChildren' }}
        onExitComplete={() => {
          setTimeout(()=> {
            if (typeof window !== 'undefined') {
              window.scrollTo({ top: 0 })
            }
          },1000)
        }}
        >
        <motion.div
          key={router.asPath}
          initial="initialState"
          animate="animateState"
          exit="exitState"
          transition={{
            duration: 0.75,
          }}
          variants={{
            initialState: {
              opacity: 0,
              
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
              
            },
            animateState: {
              opacity: 1,
            
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
              
              
            },
            exitState: {
              clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
              opacity: 0,
             
            },
          }}
          className="base-page-size"
        >
            {children}
        </motion.div>
        </AnimatePresence> 
    )
}