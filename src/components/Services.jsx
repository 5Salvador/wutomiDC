import React from "react";
import Picture11 from "../assets/Picture11.jpg";
import Picture14 from "../assets/Picture14.jpg";
import Nutritiion from "../assets/nutrition.jpg"
import Apples from "../assets/Apples.jpg";
import Cosmetics from "../assets/Cosmeticos.jpg";

const Services = () => {
  return (
    <>
      <section className="w-full min-h-screen">
        <div className="max-w-7xl mx-auto p-4 flex flex-col">
          <div className="flex flex-col space-y-4 text-center py-8">
            <span className="text-primary text-xl">Nossos Serviços</span>
            <h2 className="text-3xl md:text-5xl font-bold">O Que Fazemos</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {/* First Card*/}
            <div className="group flex flex-col md:flex-row w-full  md:h-54 bg-primary border border-gray-200 hover:border-primary/50 shadow-sm hover:shadow-xl rounded-3xl overflow-hidden transition-all duration-300">
              <div className="w-full md:w-2/5 h-52 md:h-auto overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                <img
                  src={Picture11}
                  alt="Agricultura"
                  className="w-full h-full rounded-2xl object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col justify-center p-6 w-full md:w-3/5 space-y-3 relative bg-primary">
                <h3 className="text-2xl text-white font-bold  group-hover:text-primary transition-colors duration-300">
                  Agricultura
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Cultivamos produtos vegetais com práticas sustentáveis,
                  garantindo qualidade e respeito à natureza.
                </p>
              </div>
            </div>
            {/* Second Card*/}
            <div className="group flex flex-col md:flex-row w-full  md:h-54 bg-primary/40 border border-gray-200 hover:border-primary/50 shadow-sm hover:shadow-xl rounded-3xl overflow-hidden transition-all duration-300">
              <div className="w-full md:w-2/5 h-52 md:h-auto overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                <img
                  src={Picture14}
                  alt="Pecuária"
                  className="w-full h-full rounded-2xl object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col justify-center p-6 w-full md:w-3/5 space-y-3 relative">
                <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                  Pecuária
                </h3>
                <p className="text-white text-sm leading-relaxed">
                  Cultivamos produtos vegetais com práticas sustentáveis,
                  garantindo qualidade e respeito à natureza.
                </p>
              </div>
            </div>
            {/*Third Card */}
            <div className="group flex flex-col md:flex-row-reverse md:h-54 w-full bg-primary/20 border border-gray-200 hover:border-primary/50 shadow-sm hover:shadow-xl rounded-3xl overflow-hidden transition-all duration-300">
              <div className="w-full md:w-2/5 h-52 md:h-auto overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                <img
                  src={Nutritiion}
                  alt="Nutrição"
                  className="w-full h-full rounded-2xl object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col justify-center p-6 w-full md:w-3/5 space-y-3 relative">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                  Nutrição{" "}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Promovemos uma alimentação saudável, nutritiva e segura para
                  pessoas e comunidades.
                </p>
              </div>
            </div>
            {/*Fourth Card*/}
            <div className="group flex flex-col md:flex-row-reverse  md:h-54 w-full bg-secondary/50 border border-gray-200 hover:border-primary/50 shadow-sm hover:shadow-xl rounded-3xl overflow-hidden transition-all duration-300">
              <div className="w-full md:w-2/5 h-52 md:h-auto overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                <img
                  src={Apples}
                  alt="Processamento e Transformação"
                  className="w-full h-full rounded-2xl object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col justify-center p-6 w-full md:w-3/5 space-y-3 relative">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                  Processamento e Transformação{" "}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Transformamos produtos agrícolas em alimentos, cosméticos e
                  outros produtos, mantendo qualidade e segurança.
                </p>
              </div>
            </div>
            {/*Fifth Card*/}

            <div className="group flex flex-col md:flex-row w-full  md:h-54 bg-primary border border-gray-200 hover:border-primary/50 shadow-sm hover:shadow-xl rounded-3xl overflow-hidden transition-all duration-300">
              <div className="w-full md:w-2/5 h-52 md:h-auto overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                <img
                  src={Cosmetics}
                  alt="Cosmeticos"
                  className="w-full h-full rounded-2xl object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col justify-center p-6 w-full md:w-3/5 space-y-3 relative bg-primary">
                <h3 className="text-2xl text-white font-bold  group-hover:text-primary transition-colors duration-300">
                  Cosméticos Naturais 
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Cultivamos produtos vegetais com práticas sustentáveis,
                  garantindo qualidade e respeito à natureza.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
