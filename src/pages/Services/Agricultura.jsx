import React from "react";
import HeroSection from "../../components/HeroSection";
import Banner from "../../assets/BannerAgricultura.jpg";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Catalogo from "../../components/Catalogo";
const Agricultura = () => {
  return (
    <>
      <HeroSection
        title="Agricultura"
        buttonText="Home"
        buttonLink="/"
        imageSrc={Banner}
      />
      {/* First Section*/}
      <section className="w-full py-6 px-4 md:py-8 md:px-8 my-4 min-h-screen bg-secondary/10 -mt-2 flex items-center justify-center">
        <div className="max-w-7xl mx-auto mt-6 md:mt-10 flex flex-col md:flex-row gap-6 md:gap-8">
          {/*Column 1 */}
          <div className="w-full md:w-1/2 flex flex-col space-y-4">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
              Agricultura na <span className="text-primary">Wutomi</span>
              <span className="text-secondary">DC</span>
            </h1>
            <p className="text-sm md:text-base text-gray-600 font-pt-serif leading-relaxed">
              Na WutomiDC, cultivamos produtos agrícolas com práticas
              sustentáveis e respeito à natureza, garantindo qualidade e saúde
              para toda a comunidade. Nossa abordagem une tradição e inovação
              para transformar o cultivo em uma experiência com propósito
            </p>
            <div>
              <Button variant="default" size="lg">
                <Link to="/contact">Contacte-nos</Link>
              </Button>
            </div>
          </div>
          {/*Column 2  youtube video*/}
          <div className="w-full md:w-1/2">
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/85kTHwJ1Ju8"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/*Second Section Nossos Processos */}
      <section className="w-full min-h-[70vh] mt-10 bg-gray-400/10 py-16 md:-mt-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          {/*Texto Desc */}
          <motion.div
            className="md:w-1/2 space-y-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary text-lg font-medium tracking-[0.2em] uppercase font-lora">
              Nossos Processos- <span>Wutomi</span>
              <span className="text-secondary">DC</span>
            </h2>
            <span className="text-3xl font-bold text-secondary/70 md:text-5xl mt-6 font-lora">
              Como trabalhamos
            </span>
            <p className="mt-8 md:w-80 mb-8 font-pt-serif text-lg text-justify">
              Na WutomiDC seguimos práticas sustentáveis e inovadoras para
              cultivar produtos de qualidade, capacitar comunidades e gerar
              impacto positivo.
            </p>

            <Button variant="default" size="lg" className="font-quincy text-lg">
              Saber mais
            </Button>
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
                  Realizamos a preparação das machambas e áreas de cultivo
                  utilizando técnicas sustentáveis, garantindo solo fértil e
                  saudável para cada plantio.
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
                  Selecionamos sementes de qualidade e realizamos o plantio de
                  forma estratégica, monitorando o crescimento e aplicando boas
                  práticas agrícolas.
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
                  Após a colheita, os produtos são cuidadosamente processados,
                  transformados e preparados para consumo ou comercialização,
                  garantindo qualidade e segurança alimentar.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Third Section */}
      <section className="w-full py-6 px-4 md:py-8 md:px-8 my-4 min-h-screen bg-secondary/10 -mt-2 flex items-center justify-center flex flex-col p-8">
        <div className="max-w-7xl mx-auto mt-6 md:mt-10 flex flex-col md:flex-row gap-6 md:gap-8">
          
          {/*Column 1 youtube video*/}
          <div className="w-full md:w-1/2">
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/85kTHwJ1Ju8"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          {/*Column 2 */}
          <div className="w-full md:w-1/2 flex flex-col space-y-4">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
             No que acreditamos
            </h1>
            <p className="text-sm md:text-base text-gray-600 font-pt-serif leading-relaxed">
              Na WutomiDC, acreditamos que a agricultura é muito mais do que produzir alimentos: é um ato de cuidado, respeito e transformação. Trabalhamos com práticas sustentáveis que respeitam a natureza, promovem saúde e fortalecem a comunidade. Cada semente plantada é um passo para uma vida mais equilibrada e conectada com o propósito que Deus nos deu.
            </p>
            {/* <div>
              <Button variant="default" size="lg">
                <Link to="/contact">Contacte-nos</Link>
              </Button>
            </div> */}
          </div>
        </div>
        <div className="max-w-7xl mt-16 mx-auto py-10 px-6">
           <div className="text-center mb-8">
              <p className="text-primary text-lg font-medium tracking-[0.2em] uppercase font-lora">
                O que fazemos
              </p>
            </div>
          
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
                
                <h3 className="font-bold font-lora text-xl mb-2 text-gray-900">Produção agrícola sustentável</h3>
                <p className="text-primary font-pt-serif text-justify text-gray-700 leading-relaxed">
                  Cultivo de produtos vegetais usando técnicas que preservam o solo e aumentam a produtividade.
                </p>
              </div>
          
              {/* Card 2 */}
              <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
                
                <h3 className="font-bold font-lora text-xl mb-2 text-gray-900">Gestão de machambas e plantações</h3>
                <p className="text-primary font-pt-serif text-justify text-gray-700 leading-relaxed">
                  Planejamento e acompanhamento de todas as etapas, garantindo qualidade e eficiência.
                </p>
              </div>
          
              {/* Card 3 */}
              <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
               
                <h3 className="font-bold font-lora text-xl mb-2 text-gray-900">Consultoria agrícola</h3>
                <p className="text-primary font-pt-serif text-justify text-gray-700 leading-relaxed">
                  Orientação especializada para agricultores e comunidades sobre boas práticas, rotação de culturas e técnicas modernas.
                </p>
              </div>
              {/* Card 4 */}
              <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
               
                <h3 className="font-bold font-lora text-xl mb-2 text-gray-900">Transformação e aproveitamento de produtos</h3>
                <p className="text-primary font-pt-serif text-justify text-gray-700 leading-relaxed">
                 Parte da produção é processada em alimentos saudáveis, aumentando o valor agregado.
                </p>
              </div>
            </div>
        </div>
      </section>
      {/*Fourth Section Nossa Filosofia*/}
      <section className="w-full min-h-[20vh] py-8 px-4 md:py-10 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-primary text-lg font-medium tracking-[0.2em] uppercase font-lora">
              Nossa Filosofia
            </p>
            <span>“Acreditamos que cuidar da terra é cuidar da vida. Por isso, nossas práticas agrícolas unem sustentabilidade, fé e tecnologia, promovendo alimento, saúde e esperança para todos.”</span>
          </div>
        </div>
      </section>
      {/*Fifth Section Amamos Voluntarios*/}
      <section className="w-full min-h-[20vh] py-8 px-4 md:py-10 md:px-8 bg-secondary/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 md:gap-8">
          <div className="w-full md:w-1/2">
            <p className="text-primary text-2xl md:text-6xl font-medium  uppercase font-lora">
              Amamos Voluntários
            </p>
          </div>
          <div className="w-full md:w-1/2 space-y-3">
            <p className="text-primary font-pt-serif text-justify text-gray-700 leading-relaxed">
             As Machambas estão abertas a voluntários nas Sextas-feiras das 9h-12h 
            </p>
            <Button variant="default" size="lg">
              <Link to="/contact">Saiba mais</Link>
            </Button>
          </div>
        </div>
      </section>
      {/* Sixth Section Catalogo, nossos Servicos */}
      <Catalogo />

      
    </>
  );
};
export default Agricultura;
