import React from 'react'
import { Button } from '../../components/ui/button';
import { motion } from "framer-motion";
import Picture20 from "../../assets/Picture20.jpg"
import Picture21 from "../../assets/Picture21.jpg"
import Picture22 from "../../assets/Vigne-Riesling-86453-1.jpg"

const ProjectosImpact = () => {

    const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <>
    {/*Hero Section */}
     <section className="relative w-full h-[300px]">
        <img
          src={Picture20}
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
            Projetos & Impacto 
            
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="text-lg font-bold text-center text-white"
          >
            Impacto e Projetos
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Button variant="outline" size="sm">
              Home
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/*First Section */}
      <section className='w-full min-h-screen -mt-8 bg-primary/5'>
        <div className='max-w-7xl mx-auto md:py-18 py-4 flex flex-col md:flex-row gap-4 my-8 px-4'>
          <div className='md:w-1/2'>
           <div className='space-y-4 text-lg'>
             <p className='text-2xl md:text-4xl font-semibold'>
                Na WutomiDC, acreditamos que impacto verdadeiro começa com intenção, planeamento e compromisso.
            </p>
            
           </div>

           <img src={Picture22} alt="" className="md:w-[350px] md:h-[500px] object-cover object-center md:mt-20 md:ml-42"/>
          </div>
          <div className='md:w-1/2'>
            <div>
                <img src={Picture21} alt="" className="md:w-[500px] md:h-[600px] object-cover object-center"/>
            </div>
            <div className='md:mt-20'>
                <p className='text-secondary/90 text-lg'>
                As áreas abaixo representam onde desejamos atuar e investir esforços para gerar transformação sustentável, promovendo vida, saúde e bem-estar para pessoas e comunidades.
            </p>
            </div>
          </div>
        </div>
      </section>

      {/*Second Section */}
       <section className="w-full min-h-[50vh] my-8 md:my-16 -mt-10 md:-mt-1 bg-secondary py-8">
        <div className="max-w-7xl mx-auto py-4 flex flex-col  my-8 px-4 space-y-6">
          <div className="text-center">
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-lg mb-4">
              Projectos e impacto social{" "}
            </p>
          </div>
          <div className="text-justify flex flex-col md:flex-row gap-4 text-lg justify-center">
            <p className='p-8 bg-primary w-96 text-white rounded-2xl hover:bg-tertiary/80 duration-300'>
              Na WutomiDC, acreditamos que a terra, a alimentação e o cuidado com a vida estão profundamente ligados. O nosso compromisso vai além da produção e comercialização de produtos — buscamos transformar mentalidades, fortalecer comunidades e promover uma relação saudável entre o ser humano e a natureza.
            </p>
            <p className='p-8 bg-primary w-96 text-white rounded-2xl hover:bg-tertiary/80 duration-300'>Os nossos projectos e iniciativas são pensados para gerar impacto social, ambiental, económico e espiritual, respeitando os ciclos naturais da vida e valorizando aquilo que Deus já colocou à nossa disposição.</p>
            <p className='p-8 bg-primary w-96 text-white rounded-2xl hover:bg-tertiary/80 duration-300'>
                Mesmo que muitos dos projectos estejam em fase de planeamento e estruturação, eles nascem de uma visão sólida, com objectivos claros e um forte compromisso com o futuro.
            </p>
          </div>
        </div>
      </section>
      {/*Third Section */}
      <section>

      </section>
    </>
  )
}

export default ProjectosImpact