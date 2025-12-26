import React from "react";
import AboutImage from "../../assets/about.jpg";
import { Button } from "../../components/ui/button.jsx";
import { motion } from "framer-motion";
import { CircleCheckBig } from "lucide-react";
import { GiPlantWatering } from "react-icons/gi";
import { RiUserCommunityFill } from "react-icons/ri";
import { FaCross } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa6";
import { PiCowFill } from "react-icons/pi";
import Logo from "/wDC.png";
import Picture1 from "../../assets/Picture1.jpg";
import Picture2 from "../../assets/Picture2.jpg";
import Picture15 from "../../assets/Picture15.jpg";
import Farm1 from "../../assets/farm-16.png";
import Farm2 from "../../assets/farm-17.png";

const About = () => {
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
      <section className="relative w-full h-[300px]">
        <img
          src={AboutImage}
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
            Sobre a{" "}
            <span className="text-primary">
              Wutomi<span className="text-secondary">DC</span>
            </span>
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="text-lg font-bold text-center text-white"
          >
            Onde a natureza gera Vida
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Button variant="outline" size="sm">
              Home
            </Button>
          </motion.div>
        </motion.div>
      </section>
      {/*First Section */}
      <section className="max-w-7xl mx-auto py-4 flex flex-col md:flex-row gap-4 my-8 px-4">
        <div className="md:w-1/2 flex flex-col space-y-5">
          <p className="text-primary text-lg font-medium tracking-[0.2em] uppercase">
            Sobre a{" "}
            <span className="text-primary">
              Wutomi<span className="text-secondary">DC</span>
            </span>
          </p>
          <h2 className="text-2xl md:text-5xl font-medium font-sans">
            Cultivamos mais do que a terra - cultivamos princípios
          </h2>
        </div>
        <div className="md:w-1/2 flex flex-col space-y-5 justify-center">
          <div className="flex flex-row gap-2 ">
            <div className="">
              <CircleCheckBig className="text-primary" size={16} />
            </div>
            <p className="text-gray-600">
              Na WutomiDC, a agricultura é apenas o começo. Trabalhamos com
              valores que respeitam a natureza, promovem a vida e fortalecem
              comunidades e uma vida saudavel. Cada semente plantada carrega
              propósito, cuidado e responsabilidade com aquilo que nos foi
              confiado.
            </p>
          </div>
          <div className="flex flex-row gap-2 ">
            <div className="">
              <CircleCheckBig className="text-primary" size={16} />
            </div>
            <p className="text-gray-600">
              Acreditamos que, ao cultivar a terra com consciência, cultivamos
              também pessoas, esperança e um futuro sustentável.
            </p>
          </div>
        </div>
      </section>

      {/*Second Section */}
      <section className="w-full min-h-[600px] bg-primary/5 py-4">
        <div className="max-w-7xl mx-auto py-4 flex flex-col md:flex-row gap-4 my-8 px-4">
          {/*First Column */}
          <div className="md:w-1/2 flex flex-col">
            <div>
              <img src={Logo} alt="" className="h-18 object-contain" />
            </div>
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-lg mb-4">
              Conheça-nos Melhor
            </p>
            <h2 className="text-2xl md:text-5xl font-semibold">
              Comercializamos Produtos de Alta Qualidade
            </h2>

            <p className="text-xl text-primary my-10">
              Somos uma referência no setor agrícola
            </p>

            <p>
              Atuamos na promoção da agricultura sustentável, na valorização da
              produção local e no fornecimento de produtos e soluções que geram
              impacto positivo nas comunidades.
            </p>
            <div className="my-4">
              <p className="font-bold">Comercializamos Produtos:</p>
            </div>
            <div className="flex flex-col md:flex-row gap-2 mt-4">
              {/*First Row */}
              <div>
                <div>
                  <img
                    src={Farm1}
                    alt=""
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <div>
                  <p className="font-bold">De Qualidade</p>

                  <p>
                    Promovemos uma agricultura que valoriza a natureza, a
                    comunidade e o desenvolvimento sustentável.
                  </p>
                </div>
              </div>
              {/*Second Row */}
              <div>
                <div>
                  <img
                    src={Farm2}
                    alt=""
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <div>
                  <p className="font-bold">Naturais </p>
                  <p>
                    Cultivamos e selecionamos produtos naturais com cuidado,
                    respeitando a terra e promovendo uma vida saudável.
                  </p>
                </div>
              </div>
              {/*Third Row */}
              <div>
                <div>
                  <img
                    src={Farm2}
                    alt=""
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <div>
                  <p className="font-bold">Saudáveis </p>

                  <p className="">
                    Apoiamos uma alimentação nutritiva, segura e produzida de
                    forma responsável para o bem-estar das pessoas e das
                    comunidades.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/*Second Column */}
          <div className="md:w-1/2">
            <img
              src={Picture15}
              alt=""
              className="w-full md:h-[450px] object-cover"
            />
          </div>
        </div>
      </section>
      {/*Third Section   Mission, Values, Values */}
      <section className="w-ful min-h-screen my-8 md:my-16">
        <div className="my-10 text-center">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-lg mb-4">
            Missão, Visão e Valores
          </p>
          <h2 className="text-2xl md:text-5xl font-semibold">Nossos valores</h2>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row  justify-center gap-2 md:gap-0">
          {/*First Column*/}
          <div className="w-full md:w-1/3 flex flex-col">
            <div className="group flex flex-col justify-center bg-gray-300/40 p-4 px-8 py-4 hover:bg-primary/80 transition duration-300 hover:text-white">
              <span className="text-start font-medium text-2xl text-primary group-hover:text-white">
                Missão
              </span>
              <p>
                “Promover vida, bem-estar e desenvolvimento sustentável,
                capacitando pessoas e comunidades através da agricultura,
                educação, nutrição e fé.”
              </p>
            </div>

            <div className="flex flex-col justify-center bg-primary/20 p-4 px-8 py-4">
              <span className="text-start font-medium text-2xl text-primary">
                Visão
              </span>
              <p>
                “Ser referência em sustentabilidade, educação agroalimentar e
                desenvolvimento comunitário, inspirando vidas e fortalecendo a
                conexão com a natureza e utilizando o que Deus nos ofereceu para
                gerar vida.”
              </p>
            </div>

            <div className="flex flex-col justify-center  px-8 py-4 space-y-3 bg-secondary/45 border-l-[5px] border-primary rounded-bl-3xl">
              <span className="text-start font-medium text-2xl text-primary">
                Valores
              </span>
              <div className="flex flex-col space-y-2">
                <div className="flex flex-row items-center gap-2">
                  <div className="p-2 bg-primary/20 rounded-full">
                    <GiPlantWatering size={20} className="text-primary" />
                  </div>
                  <span>Sustentabilidade</span>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <div className="p-2 bg-primary/20 rounded-full">
                    <RiUserCommunityFill size={20} className="text-primary" />
                  </div>
                  <span>Communidade</span>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <div className="p-2 bg-primary/20 rounded-full">
                    <FaCross size={20} className="text-primary" />
                  </div>
                  <span>Fé e propósito</span>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <div className="p-2 bg-primary/20 rounded-full">
                    <IoFastFood size={20} className="text-primary" />
                  </div>
                  <span>Nutrição e saúde</span>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <div className="p-2 bg-primary/20 rounded-full">
                    <FaGraduationCap size={20} className="text-primary" />
                  </div>
                  <span>Educação e capacitação</span>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <div className="p-2 bg-primary/20 rounded-full">
                    <PiCowFill size={20} className="text-primary" />
                  </div>
                  <span>Respeito à produção agrícola e animal</span>
                </div>
              </div>
            </div>
          </div>

          {/*Second Column*/}
          <div className="w-full md:w-1/3">
            <img
              src={Picture2}
              alt=""
              className="hover:scale-110 transition duration-300 hover:inset-0"
            />
          </div>
          {/*Third Column*/}
          <div className="w-full md:w-1/3">
            <img
              src={Picture1}
              alt=""
              className="hover:scale-110 transition duration-300 hover:inset-0"
            />
          </div>
        </div>
      </section>

      {/*Fourth Section O que fazemos...*/}
      <section className="w-full min-h-[50vh] my-8 md:my-16 bg-secondary py-8">
        <div className="max-w-7xl mx-auto py-4 flex flex-col  my-8 px-4 space-y-6">
          <div className="text-center">
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-lg mb-4">
              O Que Fazemos & Atuação{" "}
            </p>
            <h2 className="text-2xl md:text-5xl font-semibold">
              Agricultura, pecuária, processamento
            </h2>
          </div>
          <div className="text-center text-lg">
            <p>
              Na WutomiDC, cada ação é uma semente plantada para gerar vida.
              Atuamos com compromisso, sustentabilidade e propósito, promovendo
              bem-estar para pessoas, comunidades e o meio ambiente.
            </p>
          </div>
        </div>
      </section>
      {/*Fifth Section*/}
      <section className="relative w-full h-[70vh] my-8 md:my-16 overflow-hidden">
        {/* Video Background */}
        <iframe
          className="absolute top-1/2 left-1/2 w-[300%] h-[300%] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
          src="https://www.youtube.com/embed/TPMW5SGe2JE?autoplay=1&mute=1&loop=1&playlist=TPMW5SGe2JE&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1&iv_load_policy=3" 
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        {/* Overlay to darken video for text readability */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Text Content */}
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-6xl font-bold text-secondary leading-tight">
            Cultivando um futuro mais verde e sustentável
          </h2>
          <p className="text-white/90 text-lg md:text-2xl max-w-3xl">
            Através da inovação e do respeito pela terra, trabalhamos dia após dia para garantir alimentos saudáveis e acessíveis para todos.
          </p>
          <Button variant="default" size="lg" className="mt-8  text-white border-white hover:bg-white hover:text-primary transition-colors duration-300">
            Junte-se a Nós
          </Button>
        </div>
      </section>
    </>
  );
};

export default About;
