import React,{useEffect} from "react";
import { motion } from "framer-motion";
import Hero from "../../components/Hero";
import { GiPlantWatering } from "react-icons/gi";
import { RiUserCommunityFill } from "react-icons/ri";
import { FaCross } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa6";
import { PiCowFill } from "react-icons/pi";
import Picture4 from "../../assets/Picture4.jpg"
import Picture6 from "../../assets/Picture8.jpg"
import Picture7 from "../../assets/Picture9.jpg"
import { Button } from "../../components/ui/button";
import Gallery from "../../components/Gallery";
import Services from "../../components/Services";
import Slider from "../../components/Slider";
import MissionVisionSection from "../../components/MissionVisionSection";


const Home = () => {

  //Scroll page from Top
  useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
  
  return (
    <>
      <Hero />
      {/*Mission, Vision & images*/}
      

      <MissionVisionSection />

      {/*Who we are ?*/}
      <section className="w-full min-h-screen mt-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row">
          {/* First Side Content */}
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img src={Picture4} alt="" className="rounded-l-[100px] rounded-br-[350px] rounded-tr-[90px] md:h-[600px]" />
          </motion.div>
          {/* Second Side Content */}
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col space-y-3 p-8">
              <h2 className="text-lg text-primary font-medium tracking-[0.2em] uppercase font-lora">Quem Somos?</h2>
              <span className="text-4xl md:text-5xl font-bold text-secondary/70 font-lora">Nós somos a <span className="text-primary">Wutomi</span><spn>DC</spn></span>
              <span className="text-gray-600 font-pt-serif text-lg text-justify">“A WutomiDC é uma iniciativa que une agricultura, nutrição, pecuária, tecnologia e fé para promover uma vida saudável, sustentável e com propósito. Inspiramos e capacitamos pessoas a viverem com saúde, conexão com a natureza e valores sólidos.”</span>
              {/* Description icons */}
              <div className="flex flex-col md:flex-row items-center gap-2 space-y-4 mt-8">

                <div className="flex flex-row gap-2 w-96">
                  <img src={Picture6} alt="" className="h-16 rounded-full" />
                  <div className="flex flex-col space-y-2">
                    <span className="text-2xl font-bold text-black/70 font-lora">100% Vida Sustentável</span>
                    <span className="font-pt-serif">Mais do que agricultura, cultivamos vida</span>
                  </div>
                </div>

                <div className="flex flex-row gap-2 w-96">
                  <img src={Picture7} alt="" className="h-16 rounded-full" />
                  <div className="flex flex-col space-y-2">
                    <span className="text-2xl font-bold text-black/70 font-lora">Transformando Vidas</span>
                    <span className="font-pt-serif">Perfeito para vegetais, frutas, flores e agricultura orgânica.</span>
                  </div>
                </div>

              </div>
              {/* Latest text description */}
              <div className="md:border-l-2 border-primary">
                <p className="ml-5 font-pt-serif text-lg">A WutomiDC promove vida, saúde e sustentabilidade, unindo agricultura, nutrição e tecnologia para transformar comunidades e inspirar pessoas a viverem com propósito.</p>
              </div>
            </div>
            <div className="md:ml-8">
              <Button variant="default" size="lg" className="font-quincy text-lg">Saber mais</Button>
            </div>
          </motion.div>
        </div>

      </section>
      {/* Nossos Servicos */}
      <Services />

      {/* Nossos Processos */}
      <section className="w-full min-h-[70vh] mt-10 bg-gray-400/10 py-16">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">

          {/*Texto Desc */}
          <motion.div 
            className="md:w-1/2 space-y-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary text-lg font-medium tracking-[0.2em] uppercase font-lora">Nossos Processos- <span>Wutomi</span><span className="text-secondary">DC</span></h2>
            <span className="text-3xl font-bold text-secondary/70 md:text-5xl mt-6 font-lora">Como trabalhamos</span>
            <p className="mt-8 md:w-80 mb-8 font-pt-serif text-lg text-justify">Na WutomiDC seguimos práticas sustentáveis e inovadoras para cultivar produtos de qualidade, capacitar comunidades e gerar impacto positivo.</p>

            <Button variant="default" size="lg" className="font-quincy text-lg">Saber mais</Button>
          </motion.div>

          {/*Description de processos*/}
          <div className="flex flex-col md:flex-row justify-center gap-6 w-full">
  {/* Card 01 */}
  <motion.div
    className="w-full sm:w-80 md:w-72 bg-secondary/70 flex flex-col rounded-3xl p-6 min-h-[22rem] shadow-md hover:shadow-lg transition-shadow duration-300"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    viewport={{ once: true }}
  >
    <span className="text-5xl font-bold text-gray-800">01</span>
    <div className="flex flex-col gap-3 mt-10">
      <span className="text-2xl font-semibold font-lora text-gray-900 text-center md:text-left">
        Preparação da Terra
      </span>
      <p className="italic text-gray-700 font-pt-serif text-lg text-justify leading-relaxed">
        Realizamos a preparação das machambas e áreas de cultivo utilizando técnicas sustentáveis, garantindo solo fértil e saudável para cada plantio.
      </p>
    </div>
  </motion.div>

  {/* Card 02 */}
  <motion.div
    className="w-full sm:w-80 md:w-72 bg-primary/15 flex flex-col rounded-3xl p-6 min-h-[22rem] shadow-md hover:shadow-lg transition-shadow duration-300"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.4 }}
    viewport={{ once: true }}
  >
    <span className="text-5xl font-bold text-gray-800">02</span>
    <div className="flex flex-col gap-3 mt-10">
      <span className="text-2xl font-semibold font-lora text-gray-900 text-center md:text-left">
        Plantio e Cultivo de Sementes
      </span>
      <p className="italic text-gray-700 font-pt-serif text-lg text-justify leading-relaxed">
        Selecionamos sementes de qualidade e realizamos o plantio de forma estratégica, monitorando o crescimento e aplicando boas práticas agrícolas.
      </p>
    </div>
  </motion.div>

  {/* Card 03 */}
  <motion.div
    className="w-full sm:w-80 md:w-72 bg-primary/90 flex flex-col rounded-3xl p-6 min-h-[22rem] shadow-md hover:shadow-lg transition-shadow duration-300"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.6 }}
    viewport={{ once: true }}
  >
    <span className="text-5xl font-bold text-white">03</span>
    <div className="flex flex-col gap-3 mt-10">
      <span className="text-2xl text-white font-semibold font-lora text-center md:text-left">
        Colheita e Processamento
      </span>
      <p className="italic text-white font-pt-serif text-lg text-justify leading-relaxed">
        Após a colheita, os produtos são cuidadosamente processados, transformados e preparados para consumo ou comercialização, garantindo qualidade e segurança alimentar.
      </p>
    </div>
  </motion.div>
</div>


        </div>

      </section>
      
      {/* Galleria */}
      <Gallery />
      {/* Slider */}
      <Slider />
    </>
  );
};

export default Home;
