import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import HeroSection from "../../components/HeroSection";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";

const faqData = [
  {
    id: 1,
    question: "O que é a WutomiDC?",
    answer:
      "A WutomiDC é uma iniciativa que atua nas áreas de agricultura sustentável, nutrição, processamento natural, educação e impacto social, promovendo uma vida saudável e consciente a partir do que a natureza nos oferece.",
  },
  {
    id: 2,
    question: "A WutomiDC trabalha apenas com agricultura?",
    answer:
      "Não. Embora a agricultura seja uma das bases do nosso trabalho, a WutomiDC também atua em nutrição, processamento e transformação de produtos naturais, cosméticos naturais, educação, tecnologia e projetos comunitários.",
  },
  {
    id: 3,
    question: "Os produtos da WutomiDC são naturais?",
    answer:
      "Sim. Trabalhamos com produtos naturais e priorizamos processos sem aditivos químicos e conservantes artificiais, sempre que possível, valorizando a saúde, a sustentabilidade e o meio ambiente.",
  },
  {
    id: 4,
    question: "A WutomiDC vende produtos online?",
    answer:
      "Sim. Através da nossa loja física e virtual, disponibilizamos produtos agrícolas, sementes, plantas, insumos, produtos transformados e outros artigos ligados à nutrição e à vida sustentável.",
  },
  {
    id: 5,
    question: "A WutomiDC realiza formações e workshops?",
    answer:
      "Sim. Organizamos workshops, formações e treinamentos nas áreas de agricultura, nutrição, empreendedorismo, sustentabilidade e desenvolvimento comunitário, com apoio de profissionais especializados.",
  },
  {
    id: 6,
    question: "Como posso fazer parte dos projetos da WutomiDC?",
    answer:
      "Podes participar como voluntário, parceiro, agricultor, formador ou patrocinador de projetos. Basta entrar em contacto connosco através da página de contactos.",
  },
  {
    id: 7,
    question: "A WutomiDC trabalha com comunidades?",
    answer:
      "Sim. O impacto social e comunitário é um dos pilares da WutomiDC. Desenvolvemos ações voltadas ao fortalecimento comunitário, educação alimentar, agricultura como fonte de renda e preservação ambiental.",
  },
  {
    id: 8,
    question: "A WutomiDC trabalha com importação e exportação?",
    answer:
      "Sim. Atuamos na importação e exportação de produtos agrícolas e naturais, conectando a produção local a novos mercados de forma responsável e sustentável.",
  },
  {
    id: 9,
    question: "Onde a WutomiDC está localizada?",
    answer:
      "Estamos localizados em Maputo, Matola – Beluluane, Rua do Círculo, atuando também em outras regiões através de projetos e plataformas digitais.",
  },
  {
    id: 10,
    question: "Como posso entrar em contacto com a WutomiDC?",
    answer:
      "Podes falar connosco através do formulário de contacto no site, email corporativo ou redes sociais oficiais.",
  },
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState([1]); // Primeiro item aberto por padrão

  const toggleItem = (id) => {
    setOpenItems(
      (prev) =>
        prev.includes(id)
          ? [] // Close the current item
          : [id] // Open only the clicked item, closing all others
    );
  };

  const leftColumn = faqData.filter((_, index) => index % 2 === 0);
  const rightColumn = faqData.filter((_, index) => index % 2 !== 0);

  return (
    <>
      <HeroSection
        title="Perguntas Frequentes"
        subtitle="Encontre respostas para suas dúvidas"
        buttonText="Início"
        buttonLink="/"
      />

      <section className="w-full py-8 px-8 my-4 min-h-screen bg-primary/5 -mt-2">
        <div className="max-w-7xl mx-auto mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Coluna Esquerda */}
            <div className="space-y-4">
              {leftColumn.map((item, index) => (
                <FaqItemCard
                  key={item.id}
                  item={item}
                  isOpen={openItems.includes(item.id)}
                  onToggle={() => toggleItem(item.id)}
                  delay={index * 0.1}
                />
              ))}
            </div>

            {/* Coluna Direita */}
            <div className="space-y-4">
              {rightColumn.map((item, index) => (
                <FaqItemCard
                  key={item.id}
                  item={item}
                  isOpen={openItems.includes(item.id)}
                  onToggle={() => toggleItem(item.id)}
                  delay={index * 0.1 + 0.05}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="w-full h-full flex items-center justify-center mt-16">
          <img src="/WutomiDC.png" alt="" className="object-contain"/>
        </div>
      </section>
      {/* Form section , send us a message */}
      <section className="w-full py-8 px-8 flex items-center justify-center my-8">
        <div className="w-[900px] flex flex-col bg-primary rounded-lg shadow-lg p-8 md:p-12 md:mx-4 items-center space-y-8">
          <div className="flex flex-col space-y-4 text-center">
            <span className="text-xl text-secondary/80">Faca uma pergunta</span>
            <h1 className="text-white text-3xl md:text-5xl font-semibold">
              Ainda tem mais perguntas?
            </h1>
            <span className="text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
          </div>

          <div className="">
            <Button variant="ghost" size="lg">
              <Link to="/contact">Contacte-nos</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

const FaqItemCard = ({ item, isOpen, onToggle, delay }) => {
  return (
    <>
      <div
        className="faq-item bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all duration-500 ease-in-out hover:scale-[1.01]"
        data-state={isOpen ? "open" : "closed"}
      >
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-between gap-4 p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg"
          aria-expanded={isOpen}
        >
          <span className="font-heading text-lg font-medium text-primary leading-snug pr-4">
            {item.question}
          </span>
          <span className="faq-icon shrink-0">
            {isOpen ? (
              <div className="bg-secondary text-white p-1.5 rounded-md transition-all duration-500 ease-in-out">
                <Minus className="w-4 h-4" strokeWidth={2.5} />
              </div>
            ) : (
              <div className="bg-primary text-white p-1.5 rounded-md transition-all duration-500 ease-in-out">
                <Plus className="w-4 h-4" strokeWidth={2.5} />
              </div>
            )}
          </span>
        </button>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-5 pb-5 pt-2">
            <p className="text-primary/80 leading-relaxed text-[15px]">
              {item.answer}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
