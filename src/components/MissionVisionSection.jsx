import React from 'react'
import { motion } from 'framer-motion'
import { GiPlantWatering } from "react-icons/gi"
import { RiUserCommunityFill } from "react-icons/ri"
import { FaCross, FaGraduationCap } from "react-icons/fa"
import { IoFastFood } from "react-icons/io5"
import { PiCowFill } from "react-icons/pi"
import Picture1 from "../assets/Picture1.jpg" // Update with your actual path
import Picture2 from "../assets/Picture2.jpg" // Update with your actual path

const MissionVisionSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const values = [
    {
      icon: <GiPlantWatering size={20} />,
      label: "Sustentabilidade"
    },
    {
      icon: <RiUserCommunityFill size={20} />,
      label: "Comunidade"
    },
    {
      icon: <FaCross size={20} />,
      label: "Fé e propósito"
    },
    {
      icon: <IoFastFood size={20} />,
      label: "Nutrição e saúde"
    },
    {
      icon: <FaGraduationCap size={20} />,
      label: "Educação e capacitação"
    },
    {
      icon: <PiCowFill size={20} />,
      label: "Respeito à produção agrícola e animal"
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Quem <span className="text-primary">Somos</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Nossos princípios e valores que guiam cada passo da nossa jornada
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* First Column - Mission, Vision & Values */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="lg:col-span-1 flex flex-col gap-6"
          >
            
            {/* Mission Card */}
            <motion.div 
              variants={fadeInLeft}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
            >
              <div className="p-8 relative overflow-hidden">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <GiPlantWatering className="text-primary group-hover:text-white transition-colors" size={24} />
                    </div>
                    <h3 className="font-bold text-2xl text-primary group-hover:text-primary/90 transition-colors">
                      Missão
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed font-pt-serif">
                    "Promover vida, bem-estar e desenvolvimento sustentável, capacitando pessoas e comunidades através da agricultura, educação, nutrição e fé."
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div 
              variants={fadeInLeft}
              className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-primary/20"
            >
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-white rounded-xl shadow-md">
                    <FaGraduationCap className="text-primary" size={24} />
                  </div>
                  <h3 className="font-bold text-2xl text-primary">
                    Visão
                  </h3>
                </div>
                <p className="text-gray-800 leading-relaxed font-pt-serif">
                  "Ser referência em sustentabilidade, educação agroalimentar e desenvolvimento comunitário, inspirando vidas e fortalecendo a conexão com a natureza e utilizando o que Deus nos ofereceu para gerar vida."
                </p>
              </div>
            </motion.div>

            {/* Values Card */}
            <motion.div 
              variants={fadeInLeft}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-l-4 border-primary"
            >
              <div className="p-8 bg-gradient-to-br from-secondary/10 to-transparent">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary rounded-xl shadow-md">
                    <RiUserCommunityFill className="text-white" size={24} />
                  </div>
                  <h3 className="font-bold text-2xl text-primary">
                    Valores
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {values.map((value, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="group flex items-center gap-3 p-3 rounded-xl hover:bg-primary/5 transition-all duration-300 cursor-default"
                    >
                      <div className="p-2.5 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                        <span className="text-primary group-hover:text-white transition-colors">
                          {value.icon}
                        </span>
                      </div>
                      <span className="text-gray-800 font-medium font-pt-serif group-hover:text-primary transition-colors">
                        {value.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

          </motion.div>

          {/* Second Column - Image 1 */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="lg:col-span-1 h-full"
          >
            <div className="relative h-full min-h-[400px] lg:min-h-[800px] rounded-2xl overflow-hidden shadow-lg group">
              <img 
                src={Picture2} 
                alt="Agricultura sustentável" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-8 left-8 right-8">
                  <h4 className="text-white text-2xl font-bold mb-2">Nossa Agricultura</h4>
                  <p className="text-white/90 text-sm">Práticas sustentáveis que respeitam a natureza</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Third Column - Image 2 */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
            className="lg:col-span-1 h-full"
          >
            <div className="relative h-full min-h-[400px] lg:min-h-[800px] rounded-2xl overflow-hidden shadow-lg group">
              <img 
                src={Picture1} 
                alt="Comunidade e desenvolvimento" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-8 left-8 right-8">
                  <h4 className="text-white text-2xl font-bold mb-2">Nossa Comunidade</h4>
                  <p className="text-white/90 text-sm">Desenvolvimento e capacitação para todos</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default MissionVisionSection