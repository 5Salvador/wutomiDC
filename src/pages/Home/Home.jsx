import React from "react";
import Hero from "../../components/Hero";
import { GiPlantWatering } from "react-icons/gi";
import { RiUserCommunityFill } from "react-icons/ri";
import { FaCross } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa6";
import { PiCowFill } from "react-icons/pi";
import Picture1 from "../../assets/Picture1.jpg"
import Picture2 from "../../assets/Picture2.jpg"
import Picture4 from "../../assets/Picture4.jpg"
import Picture5 from "../../assets/Picture5.jpg"
import Picture6 from "../../assets/Picture8.jpg"
import Picture7 from "../../assets/Picture9.jpg"
import { Button } from "../../components/ui/button";
import Gallery from "../../components/Gallery";


const Home = () => {
  return (
    <>
      <Hero />
      {/*Mission, Vision & images*/}
      <section className="w-ful min-h-screen">
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
            <img src={Picture2} alt="" className="hover:scale-110 transition duration-300 hover:inset-0" />
          </div>
          {/*Third Column*/}
          <div className="w-full md:w-1/3">
            <img src={Picture1} alt="" className="hover:scale-110 transition duration-300 hover:inset-0" />
          </div>
        </div>
      </section>
      {/*Who we are ?*/}
      <section className="w-full min-h-screen mt-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row">
          {/* First Side Content */}
          <div className="md:w-1/2">
            <img src={Picture4} alt="" className="rounded-l-[100px] rounded-br-[350px] rounded-tr-[90px] md:h-[600px]" />
          </div>
          {/* Second Side Content */}
          <div className="md:w-1/2">
            <div className="flex flex-col space-y-3 p-8">
              <h2 className="text-3xl md:text-3xl font-bold text-primary">Quem Somos?</h2>
              <span className="text-4xl md:text-5xl font-bold text-secondary/70">Nós somos a <span className="text-primary">Wutomi</span><spn>DC</spn></span>
              <span className="text-gray-600">“A WutomiDC é uma iniciativa que une agricultura, nutrição, tecnologia e fé para promover uma vida saudável, sustentável e com propósito. Inspiramos e capacitamos pessoas a viverem com saúde, conexão com a natureza e valores sólidos.”</span>
              {/* Description icons */}
              <div className="flex flex-col md:flex-row items-center gap-2 space-y-4 mt-8">

                <div className="flex flex-row gap-2 w-96">
                  <img src={Picture6} alt="" className="h-16 rounded-full" />
                  <div className="flex flex-col space-y-2">
                    <span className="text-2xl font-bold text-black/70">100% Vida Sustentável</span>
                    <span>Somos a melhor agricultura biológica</span>
                  </div>
                </div>

                <div className="flex flex-row gap-2 w-96">
                  <img src={Picture7} alt="" className="h-16 rounded-full" />
                  <div className="flex flex-col space-y-2">
                    <span className="text-2xl font-bold text-black/70">Transformando Vidas</span>
                    <span>Perfeito para vegetais, frutas, flores e agricultura orgânica.</span>
                  </div>
                </div>

              </div>
              {/* Latest text description */}
              <div className="md:border-l-2 border-primary">
                <p className="ml-5">A WutomiDC promove vida, saúde e sustentabilidade, unindo agricultura, nutrição e tecnologia para transformar comunidades e inspirar pessoas a viverem com propósito.</p>
              </div>
            </div>
            <div className="md:ml-8">
              <Button variant="default" size="lg">Saber mais</Button>
            </div>
          </div>
        </div>

      </section>

      {/* Nossos Processos */}
      <section className="w-full min-h-[70vh] mt-10 bg-gray-400/10 py-16">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">

          {/*Texto Desc */}
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-2xl font-semibold text-primary">Nossos Processos- <span>Wutomi</span><span className="text-secondary">DC</span></h2>
            <span className="text-3xl font-bold text-secondary/70 md:text-5xl mt-6">How We Work</span>
            <p className="mt-8 md:w-80 mb-8">Na WutomiDC seguimos práticas sustentáveis e inovadoras para cultivar produtos de qualidade, capacitar comunidades e gerar impacto positivo.</p>

            <Button variant="default" size="lg">Saber mais</Button>
          </div>

          {/*Description de processos*/}
          <div className="md:w-full flex flex-col md:flex-row gap-3">
            <div className="md:w-64 bg-secondary/70 flex flex-col rounded-4xl  p-4 h-96">
              <span className="text-5xl">01</span>
              <div className="flex flex-col gap-2 mt-36 md:mt-16">
                <span className="text-2xl font-semibold">Preparação da Terra</span>
                <p className="italic text-gray-600">Realizamos a preparação das machambas e áreas de cultivo utilizando técnicas sustentáveis, garantindo solo fértil e saudável para cada plantio.</p>
              </div>
            </div>

            <div className="md:w-64 bg-primary/15 flex flex-col rounded-4xl  p-4 h-96">
              <span className="text-5xl">02</span>
              <div className="flex flex-col gap-2 mt-28 md:mt-16">
                <span className="text-2xl font-semibold">Plantio e Cultivo de Sementes</span>
                <p className="italic text-gray-600">Selecionamos sementes de qualidade e realizamos o plantio de forma estratégica, monitorando o crescimento e aplicando boas práticas agrícolas</p>
              </div>
            </div>

            <div className="md:w-64 bg-primary/90 flex flex-col rounded-4xl p-4 h-96">
              <span className="text-5xl text-white">03</span>
              <div className="flex flex-col gap-2 mt-32 md:mt-16">
                <span className="text-2xl text-white font-semibold">Colheita e Processamento</span>
                <p className="italic text-white">Após a colheita, os produtos são cuidadosamente processados, transformados e preparados para consumo ou comercialização, garantindo qualidade e segurança alimentar.</p>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* Galleria */}
      <Gallery />
    </>
  );
};

export default Home;
