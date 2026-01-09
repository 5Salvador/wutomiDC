import React from "react";
import { motion } from "framer-motion";
import Picture11 from "../assets/Picture11.jpg";
import Picture14 from "../assets/Picture14.jpg";
import Nutritiion from "../assets/nutrition.jpg"
import Apples from "../assets/Apples.jpg";
import Picture16 from "../assets/cosmeticos.jpg"
import Picture17 from "../assets/Picture17.jpeg"

const Services = () => {
  return (
    <>
      <section className="w-full min-h-screen">
        <div className="max-w-7xl mx-auto p-4 flex flex-col">
          <motion.div 
            className="flex flex-col space-y-4 text-center py-8"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-primary text-lg font-medium tracking-[0.2em] uppercase font-lora">Nossos Serviços</span>
            <h2 className="text-3xl md:text-5xl font-bold font-lora">O Que Fazemos</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {/* First Card*/}
            <motion.div 
              className="group flex flex-col md:flex-row w-full  md:h-54 bg-primary border border-gray-200 hover:border-primary/50 shadow-sm hover:shadow-xl rounded-3xl overflow-hidden transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-full md:w-2/5 h-52 md:h-auto overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                <img
                  src={Picture11}
                  alt="Agricultura"
                  className="w-full h-full rounded-2xl object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col justify-center p-6 w-full md:w-3/5 space-y-3 relative bg-primary">
                <h3 className="text-2xl text-white font-bold  group-hover:text-secondary transition-colors duration-300 font-lora">
                  Agricultura
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed font-pt-serif">
                  Cultivamos produtos vegetais com práticas sustentáveis,
                  garantindo qualidade e respeito à natureza.
                </p>
              </div>
            </motion.div>
            {/* Second Card*/}
            <motion.div 
              className="group flex flex-col md:flex-row w-full  md:h-54 bg-primary/40 border border-gray-200 hover:border-primary/50 shadow-sm hover:shadow-xl rounded-3xl overflow-hidden transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-full md:w-2/5 h-52 md:h-auto overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                <img
                  src={Picture14}
                  alt="Pecuária"
                  className="w-full h-full rounded-2xl object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col justify-center p-6 w-full md:w-3/5 space-y-3 relative">
                <h3 className="text-2xl font-bold text-white group-hover:text-secondary transition-colors duration-300 font-lora">
                  Pecuária
                </h3>
                <p className="text-white text-lg leading-relaxed font-pt-serif">
                  Criamos animais de forma ética e sustentável, oferecendo nutrição adequada e cuidado no manejo.
                </p>
              </div>
            </motion.div>
            {/*Third Card */}
            <motion.div 
              className="group flex flex-col md:flex-row-reverse md:h-54 w-full bg-primary/20 border border-gray-200 hover:border-primary/50 shadow-sm hover:shadow-xl rounded-3xl overflow-hidden transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-full md:w-2/5 h-52 md:h-auto overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                <img
                  src={Nutritiion}
                  alt="Nutrição"
                  className="w-full h-full rounded-2xl object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col justify-center p-6 w-full md:w-3/5 space-y-3 relative">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-secondary transition-colors duration-300 font-lora">
                  Nutrição{" "}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed font-pt-serif">
                  Promovemos uma alimentação saudável, nutritiva e segura para
                  pessoas e comunidades.
                </p>
              </div>
            </motion.div>
            {/*Fourth Card*/}
            <motion.div 
              className="group flex flex-col md:flex-row-reverse  md:h-54 w-full bg-secondary/50 border border-gray-200 hover:border-primary/50 shadow-sm hover:shadow-xl rounded-3xl overflow-hidden transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="w-full md:w-2/5 h-52 md:h-auto overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                <img
                  src={Apples}
                  alt="Processamento e Transformação"
                  className="w-full h-full rounded-2xl object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col justify-center p-6 w-full md:w-3/5 space-y-3 relative">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-secondary transition-colors duration-300 font-lora">
                  Processamento e Transformação{" "}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed font-pt-serif">
                  Transformamos produtos agrícolas em alimentos, cosméticos e
                  outros produtos, mantendo qualidade e segurança.
                </p>
              </div>
            </motion.div>
            {/*Fifth Card*/}

            <motion.div 
              className="group flex flex-col md:flex-row w-full  md:h-54 bg-primary border border-gray-200 hover:border-primary/50 shadow-sm hover:shadow-xl rounded-3xl overflow-hidden transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-full md:w-2/5 h-52 md:h-auto overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                <img
                  src={Picture16}
                  alt="Cosmeticos"
                  className="w-full h-full rounded-2xl object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col justify-center p-6 w-full md:w-3/5 space-y-3 relative bg-primary">
                <h3 className="text-2xl text-white font-bold  group-hover:text-secondary transition-colors duration-300 font-lora">
                  Cosméticos Naturais 
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed font-pt-serif">
                 Produzimos cosméticos naturais, valorizando ingredientes da terra e práticas sustentáveis.
                </p>
              </div>
            </motion.div>
            {/* Sixth Card*/}
            <motion.div 
              className="group flex flex-col md:flex-row w-full  md:h-54 bg-primary/40 border border-gray-200 hover:border-primary/50 shadow-sm hover:shadow-xl rounded-3xl overflow-hidden transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-full md:w-2/5 h-52 md:h-auto overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                <img
                  src={Picture17}
                  alt="Importação e exportação"
                  className="w-full h-full rounded-2xl object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col justify-center p-6 w-full md:w-3/5 space-y-3 relative">
                <h3 className="text-2xl font-bold text-white group-hover:text-secondary transition-colors duration-300 font-lora">
                  Importação e exportação
                </h3>
                <p className="text-white text-lg leading-relaxed font-pt-serif">
                  Importação e exportação-Levamos produtos da terra além-fronteiras, promovendo o comércio sustentável e o desenvolvimento comunitário.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
