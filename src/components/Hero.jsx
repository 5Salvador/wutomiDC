import React from 'react'
import heroImage from "../assets/Hero.png"
import { motion } from "framer-motion"

const Hero = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <>
    <section className="relative w-full h-[600px]">
        <img src={heroImage} alt="Hero" className="w-full h-full object-cover opacity-80" />
        <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className='absolute top-1/2 left-1/2 md:left-1/3 transform -translate-x-1/2 -translate-y-1/2  flex flex-col shadow-lg'
        >
            <motion.span variants={fadeInUp} className='text-2xl md:text-6xl font-bold  text-primary'>Wutomi<span className='text-secondary'>DC</span></motion.span>
            <motion.p variants={fadeInUp} className="text-2xl md:text-5xl font-bold text-center  text-white italic">Onde a natureza gera Vida</motion.p>
        </motion.div>
    </section>
    </>
  )
}

export default Hero