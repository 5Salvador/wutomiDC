import React from 'react'
import heroImage from "../assets/Hero.png"
import { motion } from "framer-motion"
import { ArrowRight, Leaf, Sprout } from "lucide-react"

const Hero = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="relative w-full min-h-[600px] md:min-h-[700px] lg:min-h-[800px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Hero" 
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="relative h-full min-h-[600px] md:min-h-[700px] lg:min-h-[800px]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className='flex flex-col justify-center h-full py-20 md:py-24'
          >
            {/* Badge */}
            <motion.div 
              variants={scaleIn}
              className="mb-6 inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 w-fit"
            >
              <Leaf className="text-primary" size={18} />
              <span className="text-white text-sm font-medium">Agricultura Sustentável</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div 
              variants={fadeInUp}
              className="mb-4"
            >
              <h1 className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight'>
                <span className='text-primary'>Wutomi</span>
                <span className='text-secondary'>DC</span>
              </h1>
            </motion.div>

            {/* Tagline */}
            <motion.p 
              variants={fadeInUp}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-3xl"
            >
              Onde a natureza 
              <span className="italic text-secondary"> gera Vida</span>
            </motion.p>

            {/* Description */}
            <motion.p 
              variants={fadeInUp}
              className="text-gray-200 text-base md:text-lg lg:text-xl max-w-2xl mb-8 leading-relaxed"
            >
              Transformando a agricultura moçambicana através da inovação, sustentabilidade e compromisso com o desenvolvimento rural.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={fadeInLeft}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="group bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105">
                <span>Explorar Produtos</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </button>
              
              <button className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 border border-white/30 hover:border-white/50">
                <Sprout size={20} />
                <span>Nossos Serviços</span>
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              variants={fadeInUp}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 md:mt-16"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <p className="text-3xl md:text-4xl font-bold text-primary mb-1">500+</p>
                <p className="text-white text-sm md:text-base">Agricultores</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <p className="text-3xl md:text-4xl font-bold text-primary mb-1">1000+</p>
                <p className="text-white text-sm md:text-base">Hectares</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <p className="text-3xl md:text-4xl font-bold text-secondary mb-1">50+</p>
                <p className="text-white text-sm md:text-base">Produtos</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <p className="text-3xl md:text-4xl font-bold text-secondary mb-1">100%</p>
                <p className="text-white text-sm md:text-base">Orgânico</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-white text-sm font-medium">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
          </div>
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 opacity-20 hidden lg:block">
        <Leaf size={100} className="text-primary animate-pulse" />
      </div>
      <div className="absolute bottom-20 right-20 opacity-20 hidden lg:block">
        <Sprout size={80} className="text-secondary animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
    </section>
  )
}

export default Hero