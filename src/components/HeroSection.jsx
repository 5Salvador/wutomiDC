import React from 'react'
import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { Link } from "react-router-dom"
import Banner from "../assets/BannnerImpacto.jpeg"

const HeroSection = ({ 
  title = "Projetos & Impacto", 
  subtitle = "Impacto e Projetos", 
  buttonText = "Home", 
  buttonLink = "/",
  imageSrc = Banner,
  height = "h-[300px]"
}) => {
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
      {/* Hero Section */}
      <section className={`relative w-full ${height}`}>
        <img
          src={imageSrc}
          alt="Hero"
          className="w-full h-full object-cover opacity-80"
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col shadow-lg text-center w-full px-4 space-y-4 items-center"
        >
          <motion.p
            variants={fadeInUp}
            className="text-2xl md:text-6xl font-bold text-center text-white"
          >
            {title}
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="text-lg font-bold text-center text-white"
          >
            {subtitle}
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Link to={buttonLink}>
              <Button variant="outline" size="sm">
                {buttonText}
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}

export default HeroSection