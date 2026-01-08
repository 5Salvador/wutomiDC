import React from "react";
import { Button } from "../../components/ui/button";
import HeroSection from "../../components/HeroSection";
import Picture20 from "../../assets/Picture20.jpg";
import Picture21 from "../../assets/Picture21.jpg";
import Picture22 from "../../assets/Vigne-Riesling-86453-1.jpg";
import Picture23 from "../../assets/Picture23.jpg";
import Picture24 from "../../assets/Picture24.jpg";
import Picture25 from "../../assets/Picture25.jpg";
import Picture26 from "../../assets/Picture26.jpg";
import Picture27 from "../../assets/Picture27.jpg";
import Picture28 from "../../assets/Picture28.jpg";
import Picture29 from "../../assets/Picture29.jpg";
import Picture30 from "../../assets/Picture30.jpg";
import Picture31 from "../../assets/Digital.jpg";
import Picture32 from "../../assets/Picture32.jpg";

const ProjectosImpact = () => {
 
  return (
    <>
      {/*Hero Section */}
       <HeroSection 
     title="Projetos & Impacto"
     subtitle="Impacto e Projetos"
     buttonText="Início"
     buttonLink="/"
   />
      {/*First Section */}
      <section className="w-full min-h-screen -mt-8 bg-primary/5">
        <div className="max-w-7xl mx-auto md:py-18 py-4 flex flex-col md:flex-row gap-4 my-8 px-4">
          <div className="md:w-1/2">
            <div className="space-y-4 text-lg">
              <p className="text-2xl md:text-4xl font-semibold">
                Na WutomiDC, acreditamos que impacto verdadeiro começa com
                intenção, planeamento e compromisso.
              </p>
            </div>

            <img
              src={Picture22}
              alt=""
              className="md:w-[350px] md:h-[500px] object-cover object-center md:mt-20 md:ml-42"
            />
          </div>
          <div className="md:w-1/2">
            <div>
              <img
                src={Picture21}
                alt=""
                className="md:w-[500px] md:h-[600px] object-cover object-center"
              />
            </div>
            <div className="md:mt-20">
              <p className="text-gray-600 text-lg">
                As áreas abaixo representam onde desejamos atuar e investir
                esforços para gerar transformação sustentável, promovendo vida,
                saúde e bem-estar para pessoas e comunidades.
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
            <p className="p-8 bg-primary w-96 text-white rounded-2xl hover:bg-tertiary/80 duration-300">
              Na WutomiDC, acreditamos que a terra, a alimentação e o cuidado
              com a vida estão profundamente ligados. O nosso compromisso vai
              além da produção e comercialização de produtos — buscamos
              transformar mentalidades, fortalecer comunidades e promover uma
              relação saudável entre o ser humano e a natureza.
            </p>
            <p className="p-8 bg-primary w-96 text-white rounded-2xl hover:bg-tertiary/80 duration-300">
              Os nossos projectos e iniciativas são pensados para gerar impacto
              social, ambiental, económico e espiritual, respeitando os ciclos
              naturais da vida e valorizando aquilo que Deus já colocou à nossa
              disposição.
            </p>
            <p className="p-8 bg-primary w-96 text-white rounded-2xl hover:bg-tertiary/80 duration-300">
              Mesmo que muitos dos projectos estejam em fase de planeamento e
              estruturação, eles nascem de uma visão sólida, com objectivos
              claros e um forte compromisso com o futuro.
            </p>
          </div>
        </div>
      </section>
      {/*Third Section */}
      <section className="w-full min-h-screen my-8 md:my-16 -mt-10 md:-mt-16 bg-secondary py-8">
        <div className="text-center">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-lg mb-4">
            Agricultura Sustentável e Orgânica
          </p>
        </div>
        <div className="max-w-7xl mx-auto p-2">
          <img
            src={Picture23}
            alt=""
            className="rounded-3xl w-full h-[50vh] object-cover object-center"
          />
        </div>

        {/*Texto */}
        <div className="max-w-4xl mx-auto mt-6 p-2">
          <p className="text-center text-justify text-lg text-gray-600">
            A agricultura é a base da vida. Acreditamos que a natureza já nos
            oferece tudo o que precisamos para viver de forma saudável e
            equilibrada. O grande desafio do nosso tempo não é a falta de
            recursos, mas sim a forma como os utilizamos.
          </p>

          <p className="text-lg text-gray-600">
            Na WutomiDC, promovemos uma agricultura que:
          </p>

          <ul className="text-lg list-disc ml-5 mt-4 text-gray-600">
            <li>Respeita o solo, a água e os ecossistemas</li>
            <li>Valoriza práticas naturais e sustentáveis </li>
            <li>Reduz a dependência de produtos químicos agressivos</li>
            <li>Preserva a fertilidade da terra para as próximas gerações</li>
          </ul>

          <p className="text-lg text-gray-600 mt-4">
            Encorajamos os agricultores a enxergarem a terra como um bem
            precioso, que precisa ser cuidado e não explorado de forma
            excessiva. A agricultura orgânica não é apenas um método de produção
            — é uma forma de vida, baseada no equilíbrio, na paciência e no
            respeito pelos ciclos naturais.
          </p>
        </div>

        <div className="text-center mt-16">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-lg mb-4">
            Agricultura Sustentável e Orgânica
          </p>
        </div>

        <div className="max-w-7xl mx-auto mt-10 p-2">
          <img
            src={Picture24}
            alt=""
            className="rounded-3xl w-full h-[50vh] object-cover object-center"
          />
        </div>

        <div className="max-w-4xl mx-auto mt-8">
          <p className="text-center text-justify text-lg text-gray-600">
            Cuidar do meio ambiente é um acto de responsabilidade e amor pela
            vida. A WutomiDC entende que não existe desenvolvimento verdadeiro
            se ele não for sustentável.
          </p>
          <p className="text-center text-justify text-lg text-gray-600">
            As nossas iniciativas ambientais focam-se em:
          </p>
          <ul className="text-center text-justify text-lg list-disc ml-5 mt-4 text-gray-600">
            <li>
              Plantio de árvores como forma de regenerar o solo e melhorar a
              qualidade do ar
            </li>
            <li>Educação ambiental para comunidades, jovens e agricultores</li>
            <li>
              Promoção de práticas agrícolas que preservam a biodiversidade
            </li>
            <li>
              Incentivo à redução de resíduos e ao reaproveitamento consciente
              dos recursos naturais
            </li>
          </ul>

          <p className="text-center text-justify text-lg text-gray-600 mt-4">
            A sustentabilidade é um compromisso contínuo. Queremos contribuir
            para um futuro onde o desenvolvimento económico caminhe lado a lado
            com a preservação da natureza.
          </p>
        </div>

        <section className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4">
          {/*Nutricao e Saude*/}
          <div className="md:w-1/2 p-2">
            <div className="text-center mt-16">
              <p className="text-primary font-medium tracking-[0.2em] uppercase text-lg mb-4">
                Nutrição e Saúde
              </p>
            </div>

            <div className="max-w-7xl mx-auto mt-10">
              <img
                src={Picture25}
                alt=""
                className="rounded-3xl w-full h-[50vh] object-cover object-center"
              />
            </div>

            <div className="max-w-4xl mx-auto mt-8">
              <p className="text-center text-justify text-lg text-gray-600">
                Antes de cuidarmos do exterior, precisamos cuidar do nosso
                interior. A alimentação é o combustível que nos permite viver,
                trabalhar, crescer e servir.
              </p>
              <p className="text-center text-justify text-lg text-gray-600">
                Na WutomiDC, acreditamos que uma alimentação saudável:
              </p>
              <ul className="text-center text-justify text-lg list-disc ml-5 mt-4 text-gray-600">
                <li>Fortalece o corpo</li>
                <li>Previne doenças</li>
                <li>Melhora a qualidade de vida</li>
                <li>Impacta directamente o bem-estar físico e emocional</li>
              </ul>

              <p className="text-center text-justify text-lg text-gray-600 mt-4">
                Promovemos a educação nutricional como ferramenta de
                transformação social, ajudando famílias e comunidades a fazerem
                escolhas alimentares mais conscientes, acessíveis e
                equilibradas.
              </p>
            </div>
          </div>

          {/* Nutrição Infantil */}
          <div className="md:w-1/2 p-2">
            <div className="text-center mt-16">
              <p className="text-primary font-medium tracking-[0.2em] uppercase text-lg mb-4">
                Nutrição Infantil
              </p>
            </div>

            <div className="max-w-7xl mx-auto mt-10">
              <img
                src={Picture26}
                alt=""
                className="rounded-3xl w-full h-[50vh] object-cover object-center"
              />
            </div>

            <div className="max-w-4xl mx-auto mt-8">
              <p className="text-center text-justify text-lg text-gray-600">
                A infância é a fase mais importante da formação humana. Os
                hábitos alimentares desenvolvidos nessa etapa influenciam toda a
                vida adulta.
              </p>
              <p className="text-center text-justify text-lg text-gray-600">
                Por isso, damos especial atenção à nutrição infantil,
                promovendo:
              </p>
              <ul className="text-center text-justify text-lg list-disc ml-5 mt-4 text-gray-600">
                <li>Alimentação saudável desde os primeiros anos</li>
                <li>Uso de alimentos naturais e nutritivos</li>
                <li>Conscientização dos pais e cuidadores</li>
                <li>Combate à desnutrição e má alimentação</li>
              </ul>

              <p className="text-center text-justify text-lg text-gray-600 mt-4">
                Crianças bem alimentadas crescem mais fortes, saudáveis e com
                maior capacidade de aprendizagem e desenvolvimento.
              </p>
            </div>
          </div>
        </section>

        {/*Processamento & Transformacao de Alimentos Section */}
        <div className="text-center mt-16">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-lg mb-4">
            Processamento & Transformação de Alimentos
          </p>
        </div>

        <div className="max-w-7xl mx-auto mt-10">
          <img
            src={Picture27}
            alt=""
            className="rounded-3xl w-full h-[50vh] object-cover object-center p-2"
          />
        </div>

        <div className="max-w-4xl mx-auto mt-8 p-4">
          <p className="text-center text-justify text-lg text-gray-600">
            Uma grande parte dos alimentos produzidos no mundo é desperdiçada.
            Na WutomiDC, vemos o processamento como uma solução consciente para
            esse problema.
          </p>
          <p className="text-center text-justify text-lg text-gray-600">
            O nosso processamento consiste em:
          </p>
          <ul className="text-center text-justify text-lg list-disc ml-5 mt-4 text-gray-600">
            <li>
              Transformar produtos naturais em alimentos que possam ser
              conservados por mais tempo
            </li>
            <li>Utilizar métodos simples, naturais e seguros</li>
            <li>
              Evitar aditivos químicos e conservantes artificiais sempre que
              possível
            </li>
            <li>Preservar o máximo de valor nutricional dos alimentos</li>
          </ul>

          <p className="text-center text-justify text-lg text-gray-600 mt-4">
            Este processo permite não só reduzir o desperdício, mas também
            agregar valor à produção agrícola local e garantir alimentos mais
            saudáveis para os consumidores.
          </p>
        </div>
      </section>
      {/*Fourth Section */}
      <section className="w-full min-h-screen p-4">
        {/* Sementes: O Princípio da Vida Section */}
        <div className="text-center mt-16">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-lg mb-4">
            Sementes: O Princípio da Vida
          </p>
        </div>

        <div className="max-w-7xl mx-auto mt-10">
          <img
            src={Picture28}
            alt=""
            className="rounded-3xl w-full h-[50vh] object-cover object-center p-2"
          />
        </div>

        <div className="max-w-4xl mx-auto mt-8 p-2">
          <p className="text-center text-justify text-lg text-gray-600">
            Tudo começa com uma semente. As sementes representam esperança,
            continuidade e futuro.
          </p>
          <p className="text-center text-justify text-lg text-gray-600">
            Trabalhamos para:
          </p>
          <ul className="text-center text-justify text-lg list-disc ml-5 mt-4 text-gray-600">
            <li>Preservar sementes de qualidade</li>
            <li>Promover o uso consciente e responsável</li>
            <li>
              Garantir que agricultores e comunidades tenham acesso a sementes
              viáveis
            </li>
            <li>Incentivar a autonomia alimentar e produtiva</li>
          </ul>

          <p className="text-center text-justify text-lg text-gray-600 mt-4">
            Cuidar das sementes é cuidar da vida, da terra e das próximas
            gerações.
          </p>
        </div>
      </section>
      {/*Fifth Section */}
      <section className="w-full min-h-screen p-4">
        {/* Trabalho Comunitário & Agricultura como Fonte de Renda Section */}
        <div className="text-center mt-16">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-lg mb-4">
            Trabalho Comunitário & Agricultura como Fonte de Renda
          </p>
        </div>

        <div className="max-w-7xl mx-auto mt-10">
          <img
            src={Picture29}
            alt=""
            className="rounded-3xl w-full h-[50vh] object-cover object-center p-2"
          />
        </div>

        <div className="max-w-4xl mx-auto mt-8 p-2">
          <p className="text-center text-justify text-lg text-gray-600">
            Na WutomiDC acreditamos que a agricultura é mais do que produção de
            alimentos — é uma poderosa fonte de renda, dignidade e autonomia
            para famílias e comunidades.
          </p>
          <p className="text-center text-justify text-lg text-gray-600 my-2">
            Por isso, desejamos desenvolver ações comunitárias que promovam a
            agricultura como meio de subsistência e geração de rendimento,
            especialmente para pessoas em situação de vulnerabilidade.
          </p>
          <p className="text-center text-justify text-lg text-gray-600">
            Essas iniciativas incluem:
          </p>
          <ul className="text-center text-justify text-lg list-disc ml-5 mt-4 text-gray-600">
            <li>
              Distribuição de sementes e insumos básicos a famílias e pequenos
              produtores mais necessitados
            </li>
            <li>
              Incentivo à produção agrícola local como fonte de sustento
              económico
            </li>
            <li>
              Formação prática sobre como plantar, cuidar, colher e transformar
              produtos agrícolas
            </li>
            <li>
              Apoio à criação de pequenas hortas familiares e comunitárias
            </li>
            <li>
              Valorização do trabalho agrícola como atividade digna e
              sustentável
            </li>
          </ul>

          <p className="text-center text-justify text-lg text-gray-600 mt-4">
            Acreditamos que, quando uma comunidade tem acesso à terra, sementes
            e conhecimento, ela ganha a capacidade de produzir, vender,
            alimentar-se melhor e construir o próprio futuro.
          </p>
        </div>
        {/*Second Text */}
        <div className="max-w-4xl mx-auto mt-8 p-2">
          <p className="text-center text-justify text-lg text-gray-600">
            O nosso foco não é apenas ajudar no curto prazo, mas criar soluções
            duradouras, onde a agricultura se torna:
          </p>

          <ul className="text-center text-justify text-lg list-disc ml-5 mt-4 text-gray-600">
            <li>uma fonte estável de renda</li>
            <li>um meio de segurança alimentar</li>
            <li>uma ferramenta de transformação social</li>
          </ul>

          <p className="text-center text-justify text-lg text-gray-600 mt-4">
            A WutomiDC acredita que o verdadeiro impacto social acontece quando
            as pessoas ganham ferramentas para caminhar com autonomia.
          </p>
          <p className="text-center text-justify text-lg text-gray-600 my-2">
            Por isso, os nossos projectos comunitários têm como foco:
          </p>

          <ul className="text-center text-justify text-lg list-disc ml-5 mt-4 text-gray-600">
            <li>Promover a agricultura como fonte de renda sustentável</li>
            <li>Apoiar famílias em situação de vulnerabilidade</li>
            <li>Fornecer sementes, insumos e orientação técnica</li>
            <li>Incentivar hortas familiares e comunitárias</li>
          </ul>

          <p className="text-center text-justify text-lg text-gray-600 mt-4">
            A agricultura, quando bem orientada, pode transformar realidades,
            gerar renda, fortalecer a segurança alimentar e devolver dignidade
            às comunidades.
          </p>
        </div>
      </section>
      {/*Sixth Section */}
      <section className="w-full min-h-screen p-4">
        {/* Formação, Cursos & Capacitação Section */}
        <div className="text-center mt-16">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-lg mb-4">
            Formação, Cursos & Capacitação
          </p>
        </div>

        <div className="max-w-7xl mx-auto mt-10">
          <img
            src={Picture30}
            alt=""
            className="rounded-3xl w-full h-[50vh] object-cover object-center p-2"
          />
        </div>

        <div className="max-w-4xl mx-auto mt-8 p-2">
          <p className="text-center text-justify text-lg text-gray-600">
            Vivemos num tempo em que o conhecimento é essencial para a
            sobrevivência e o progresso. A WutomiDC irá investir fortemente na
            formação e capacitação de pessoas.
          </p>

          <p className="text-center text-justify text-lg text-gray-600 mt-2">
            Planeamos oferecer:
          </p>
          <ul className="text-center text-justify text-lg list-disc ml-5 mt-4 text-gray-600">
            <li>Cursos práticos e teóricos</li>
            <li>Treinamentos técnicos</li>
            <li>Workshops e encontros formativos</li>
          </ul>
          <p className="text-center text-justify text-lg text-gray-600 mt-2">
            Nas áreas de:
          </p>
          <ul className="text-center text-justify text-lg list-disc ml-5 mt-4 text-gray-600">
            <li>Agricultura</li>
            <li>Nutrição</li>
            <li>Processamento de alimentos</li>
            <li>Cosméticos naturais</li>
            <li>Empreendedorismo</li>
            <li>Sustentabilidade</li>
          </ul>

          <p className="text-center text-justify text-lg text-gray-600 mt-4">
            Essas formações serão conduzidas por profissionais especializados e
            adaptadas à realidade local.
          </p>
        </div>
      </section>
      {/*Seventh Section */}
      <section className="w-full min-h-screen p-4">
        {/* Plataformas Digitais & Inovação Section */}
        <div className="text-center mt-16">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-lg mb-4">
            Plataformas Digitais & Inovação
          </p>
        </div>

        <div className="max-w-7xl mx-auto mt-10">
          <img
            src={Picture31}
            alt=""
            className="rounded-3xl w-full h-[50vh] object-cover object-center p-2"
          />
        </div>

        <div className="max-w-4xl mx-auto mt-8 p-2">
          <p className="text-center text-justify text-lg text-gray-600 mt-2">
            A tecnologia será uma grande aliada da WutomiDC. Através de
            plataformas digitais, queremos:
          </p>
          <ul className="text-center text-justify text-lg list-disc ml-5 mt-4 text-gray-600">
            <li>Conectar agricultores, parceiros e comunidades</li>
            <li>Partilhar conhecimento</li>
            <li>Expandir o alcance dos nossos projectos</li>
            <li>Criar redes de impacto e colaboração</li>
          </ul>
          <p className="text-center text-justify text-lg text-gray-600 mt-2">
            A inovação será usada como ferramenta para aproximar pessoas e
            soluções.
          </p>
        </div>
      </section>

      {/*Eighth Section */}
      <section className="w-full min-h-screen p-4">
        {/* Plataformas Digitais & Inovação Section */}
        <div className="text-center mt-16">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-lg mb-4">
            Plataformas Digitais & Inovação
          </p>
        </div>

        <div className="max-w-7xl mx-auto mt-10">
          <img
            src={Picture32}
            alt=""
            className="rounded-3xl w-full h-[50vh] object-cover object-center p-2"
          />
        </div>

        <div className="max-w-4xl mx-auto mt-8 p-2">
          <p className="text-center text-justify text-lg text-gray-600 mt-2">
            Nenhum grande impacto é feito sozinho. A WutomiDC está aberta a
            parcerias com:
          </p>
          <ul className="text-center text-justify text-lg list-disc ml-5 mt-4 text-gray-600">
            <li>Empresas</li>
            <li>Organizações</li>
            <li>Instituições</li>
            <li>Igrejas</li>
            <li>Pessoas que partilhem da mesma visão</li>
          </ul>
          <p className="text-center text-justify text-lg text-gray-600 mt-2">
            Os parceiros poderão apoiar projectos específicos, contribuindo
            directamente para o desenvolvimento social, ambiental e comunitário.
          </p>
        </div>
      </section>
      {/* Button and text */}
      <section className="w-full min-h-[20vh] p-2">
        <div className="max-w-7xl mx-auto flex flex-col space-y-6 items-center justify-center">
          <div className="w-auto">
            <Button variant="default" size="lg">Fale Conosco</Button>
          </div>
          <p className="text-center text-justify text-lg text-gray-600 mt-2">
            ✨ A WutomiDC existe para cultivar vida, princípios e esperança — da terra ao coração das pessoa
          </p>
        </div>

      </section>
    </>
  );
};

export default ProjectosImpact;
