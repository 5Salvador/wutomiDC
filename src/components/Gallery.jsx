import React from 'react'
import { motion } from "framer-motion";
import Picture10 from "../assets/Picture10.jpg"
import Picture11 from "../assets/conceito-de-pomar-e-fazenda-com-salada.jpg"
import Picture12 from "../assets/variedade-de-vegetais-verdes-organicos-frescos-a-venda-no-mercado-local.jpg"
import Picture13 from "../assets/Picture13.jpg"
import { Button } from "../components/ui/button";

const Gallery = () => {
  return (
    <>
    <section className='w-full min-h-screen'>
        {/* Images gallery */}
        <div className='max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-20'>
          {/*Texto */}
          <motion.div
            className='md:w-80 md:h-80 flex flex-col space-y-2'
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
          <span className='text-primary text-lg font-medium tracking-[0.2em] uppercase font-lora'>Nossa Galeria</span>
          <h2 className='text-2xl md:text-5xl font-bold font-lora mt-4'>Com cuidado e amor tudo cresce</h2>
          <p className='text-primary font-semibold text-3xl font-lora'>Wutomi<span className='text-secondary'>DC</span></p>
          <div className='w-96 mt-8'>
            <Button variant="default" size="lg" className="font-quincy text-lg">Galeria</Button>
          </div>
           
          </motion.div>
         


          {/* Imagens */}
          <div className='md:w-4xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
            <motion.img 
              src={Picture10} 
              alt="" 
              className='rounded-2xl md:rounded-tl-[100px]'
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            />
            <motion.img 
              src={Picture11} 
              alt="" 
              className='rounded-2xl md:rounded-tr-[100px]'
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            />
            <motion.img 
              src={Picture12} 
              alt="" 
              className='rounded-2xl md:rounded-bl-[100px] md:h-[500px] w-96'
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            />
            <motion.img 
              src={Picture13} 
              alt="" 
              className='rounded-2xl md:h-[400px] w-96 md:rounded-br-[100px]'
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            />
           
          </div>
        </div>

    </section>
    </>
  )
}

export default Gallery