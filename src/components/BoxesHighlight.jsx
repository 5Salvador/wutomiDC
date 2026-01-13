import React from "react";
import { Box, Leaf, Home, Apple, HeartPulse } from "lucide-react";

const BoxesHighlight = () => {
  const features = [
    {
      icon: <Home className="w-8 h-8 text-green-700" />,
      title: "Entrega Direta e Prática",
      description:
        "Produtos frescos e selecionados da nossa produção, entregues diretamente na sua casa com praticidade e cuidado.",
    },
    {
      icon: <Box className="w-8 h-8 text-amber-600" />,
      title: "Caixas Temáticas da Estação",
      description:
        "Caixas sazonais com variedade de frutas e vegetais frescos, garantindo sabor, frescor e nutrientes naturais.",
    },
    {
      icon: <Apple className="w-8 h-8 text-red-600" />,
      title: "Consumo Saudável e Conveniente",
      description:
        "Uma forma simples, conveniente e saudável de consumir produtos agrícolas frescos sem sair de casa.",
    },
    {
      icon: <HeartPulse className="w-8 h-8 text-emerald-600" />,
      title: "Ideal para Famílias e Empresas",
      description:
        "Perfeito para famílias, empresas ou instituições que valorizam alimentação natural, nutritiva e de qualidade regular.",
    },
  ];

  return (
    <section className="py-16  from-green-50 to-emerald-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-xl md:text-xl font-bold font-lora text-gray-900 mb-4">
          Caixas Frescas e Saudáveis Entregues à Sua Porta
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-12">
          Descubra a praticidade das nossas caixas de produtos agrícolas — frescos, sazonais e cultivados com dedicação, direto da horta para a sua mesa.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg p-6 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoxesHighlight;
