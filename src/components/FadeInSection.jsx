import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from "framer-motion";

const FadeInSection = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
//   const slideControls= useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    //   slideControls.start("visible");
    }
  }, [controls,sInView]);

  return (
    <div ref={ref} className='relative over'>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 3 }}
      >
        {children}
      </motion.div>
      {/* <motion.div
        variants={{
            hidden:{left:0}, 
            visible: {left:"100%"},
        }}
        initial="hidden"
        animate={slideControls}
        transition={{duration:0.5, ease:"easeIn"}}
        style={{
            position:"absolute",
            top:4,
            bottom:4,
            left:0,
            right:0,
            background:"orange",
            zIndex:20,
        }}
      /> */}
    </div>
  );
};

export default FadeInSection;
