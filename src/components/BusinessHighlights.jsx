import React from "react";
import {
  Leaf,
  ShoppingBasket,
  Truck,
  Sprout,
  Repeat,
} from "lucide-react";

const BusinessHighlights = () => {
  const highlights = [
    {
      icon: <Leaf className="w-8 h-8 text-green-600" />,
      title: "Produtos Frescos e Saudáveis",
      description:
        "Comercialização de produtos frescos, saudáveis e de qualidade, diretamente dos produtores locais.",
    },
    {
      icon: <ShoppingBasket className="w-8 h-8 text-primary" />,
      title: "Venda Online e Presencial",
      description:
        "Venda realizada online, em feiras agrícolas e para empresas, organizações e instituições.",
    },
    {
      icon: <Truck className="w-8 h-8 text-yellow-600" />,
      title: "Entrega Direta e Conveniente",
      description:
        "Entrega direta aos clientes ou parceiros, garantindo frescor, pontualidade e conveniência.",
    },
    {
      icon: <Sprout className="w-8 h-8 text-emerald-600" />,
      title: "Produtos Sazonais e Diversificados",
      description:
        "Oferecemos produtos adaptados à época e à demanda, promovendo variedade e sustentabilidade.",
    },
    {
      icon: <Repeat className="w-8 h-8 text-blue-600" />,
      title: "Programas de Fornecimento Contínuo",
      description:
        "Possibilidade de fornecimento regular para clientes corporativos, garantindo abastecimento constante.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-lora text-gray-900 mb-4">
          Comprometidos com a Qualidade e Sustentabilidade
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          Levamos até você produtos cultivados com cuidado, respeitando o meio ambiente e valorizando produtores locais.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg p-6 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
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

export default BusinessHighlights;
