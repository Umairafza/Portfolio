import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-10`}
      >
        <motion.div 
          className='flex flex-col justify-center items-center mt-28 md:mt-5 lg:5'
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <motion.div 
            className='w-5 h-5 rounded-full bg-[#915EFF]'
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [1, 0.8, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </motion.div>

        <div className="mt-28 md:mt-5 lg:5">
          <motion.h1 
            className={`${styles.heroHeadText} text-white`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              delay: 0.2
            }}
          >
            Hi, I'm <motion.span 
              className='text-[#915EFF]'
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                textShadow: "0 0 8px rgb(145, 94, 255)"
              }}
              transition={{ 
                duration: 0.8,
                delay: 0.5,
                type: "spring",
                stiffness: 200
              }}
              whileHover={{ 
                scale: 1.1,
                textShadow: "0 0 20px rgb(145, 94, 255)",
                transition: { duration: 0.3 }
              }}
            >Umair</motion.span>
          </motion.h1>
          <motion.p 
            className={`${styles.heroSubText} mt-2 text-white-100`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              delay: 0.8
            }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              Transforming ideas into responsive,
            </motion.span>
            <br/>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              real-world web & Android solutions.
            </motion.span>
            <motion.span
              className="inline-block w-[2px] h-[1em] bg-[#915EFF] ml-1 align-middle"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatDelay: 0.5,
                delay: 2
              }}
            />
          </motion.p>
        </div>
      </div>

      <ComputersCanvas />

      <motion.div 
        className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <a href='#about' className='cursor-pointer'>
          <motion.div 
            className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
