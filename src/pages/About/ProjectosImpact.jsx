import React from 'react'
import { Button } from '../../components/ui/button';
import { motion } from "framer-motion";
import Picture20 from "../../assets/Picture20.jpg"
import Picture21 from "../../assets/Picture21.jpg"
import Picture22 from "../../assets/Vigne-Riesling-86453-1.jpg"
import Picture23 from "../../assets/Picture23.jpg"
import Picture24 from "../../assets/Picture24.jpg"
import Picture25 from "../../assets/Picture25.jpg"
import Picture26 from "../../assets/Picture26.jpg"


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
                <p className='text-gray-600 text-lg'>
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
      <section className='w-full min-h-screen my-8 md:my-16 -mt-10 md:-mt-16 bg-secondary py-8'>
       <div className='text-center'>
         <p className='text-primary font-medium tracking-[0.2em] uppercase text-lg mb-4'>Agricultura Sustentável e Orgânica</p>
       </div>
       <div className='max-w-7xl mx-auto p-2'>
        <img src={Picture23} alt="" className='rounded-3xl w-full h-[50vh] object-cover object-center' />
       </div>

       {/*Texto */}
       <div className='max-w-4xl mx-auto mt-6 p-2'>
        <p className='text-center text-justify text-lg text-gray-600'>A agricultura é a base da vida. Acreditamos que a natureza já nos oferece tudo o que precisamos para viver de forma saudável e equilibrada. O grande desafio do nosso tempo não é a falta de recursos, mas sim a forma como os utilizamos.</p>

        <p className='text-lg text-gray-600'>Na WutomiDC, promovemos uma agricultura que:</p>

        <ul className='text-lg list-disc ml-5 mt-4 text-gray-600'>
            <li>Respeita o solo, a água e os ecossistemas</li>
            <li>Valoriza práticas naturais e sustentáveis </li>
            <li>Reduz a dependência de produtos químicos agressivos</li>
            <li>Preserva a fertilidade da terra para as próximas gerações</li>
        </ul>

        <p className='text-lg text-gray-600 mt-4'>Encorajamos os agricultores a enxergarem a terra como um bem precioso, que precisa ser cuidado e não explorado de forma excessiva. A agricultura orgânica não é apenas um método de produção — é uma forma de vida, baseada no equilíbrio, na paciência e no respeito pelos ciclos naturais.</p>
       </div>

       <div className='text-center mt-16'>
         <p className='text-primary font-medium tracking-[0.2em] uppercase text-lg mb-4'>Agricultura Sustentável e Orgânica</p>
       </div>

        <div className='max-w-7xl mx-auto mt-10 p-2'>
        <img src={Picture24} alt="" className='rounded-3xl w-full h-[50vh] object-cover object-center' />
       </div>

       <div className='max-w-4xl mx-auto mt-8'>
        <p className='text-center text-justify text-lg text-gray-600'>Cuidar do meio ambiente é um acto de responsabilidade e amor pela vida. A WutomiDC entende que não existe desenvolvimento verdadeiro se ele não for sustentável.</p>
        <p className='text-center text-justify text-lg text-gray-600'>As nossas iniciativas ambientais focam-se em:</p>
       <ul className='text-center text-justify text-lg list-disc ml-5 mt-4 text-gray-600'>
        <li>Plantio de árvores como forma de regenerar o solo e melhorar a qualidade do ar</li>
        <li>Educação ambiental para comunidades, jovens e agricultores</li>
        <li>Promoção de práticas agrícolas que preservam a biodiversidade</li>
        <li>Incentivo à redução de resíduos e ao reaproveitamento consciente dos recursos naturais</li>
      
       </ul>

       <p className='text-center text-justify text-lg text-gray-600 mt-4'>A sustentabilidade é um compromisso contínuo. Queremos contribuir para um futuro onde o desenvolvimento económico caminhe lado a lado com a preservação da natureza.</p>
       </div>

       <section className='max-w-7xl mx-auto flex flex-col md:flex-row gap-4'>
        {/*Nutricao e Saude*/}
       <div className='md:w-1/2 p-2'>
        <div className='text-center mt-16'>
         <p className='text-primary font-medium tracking-[0.2em] uppercase text-lg mb-4'>Nutrição e Saúde</p>
       </div>

        <div className='max-w-7xl mx-auto mt-10'>
        <img src={Picture25} alt="" className='rounded-3xl w-full h-[50vh] object-cover object-center' />
       </div>

       <div className='max-w-4xl mx-auto mt-8'>
        <p className='text-center text-justify text-lg text-gray-600'>Antes de cuidarmos do exterior, precisamos cuidar do nosso interior. A alimentação é o combustível que nos permite viver, trabalhar, crescer e servir.</p>
        <p className='text-center text-justify text-lg text-gray-600'>Na WutomiDC, acreditamos que uma alimentação saudável:</p>
       <ul className='text-center text-justify text-lg list-disc ml-5 mt-4 text-gray-600'>
        <li>Fortalece o corpo</li>
        <li>Previne doenças</li>
        <li>Melhora a qualidade de vida</li>
        <li>Impacta directamente o bem-estar físico e emocional</li>
      
       </ul>

       <p className='text-center text-justify text-lg text-gray-600 mt-4'>Promovemos a educação nutricional como ferramenta de transformação social, ajudando famílias e comunidades a fazerem escolhas alimentares mais conscientes, acessíveis e equilibradas.</p>
       </div>
       </div>


       {/* Nutrição Infantil */}
       <div className='md:w-1/2 p-2'>
        <div className='text-center mt-16'>
         <p className='text-primary font-medium tracking-[0.2em] uppercase text-lg mb-4'>Nutrição Infantil</p>
       </div>

        <div className='max-w-7xl mx-auto mt-10'>
        <img src={Picture26} alt="" className='rounded-3xl w-full h-[50vh] object-cover object-center' />
       </div>

       <div className='max-w-4xl mx-auto mt-8'>
        <p className='text-center text-justify text-lg text-gray-600'>A infância é a fase mais importante da formação humana. Os hábitos alimentares desenvolvidos nessa etapa influenciam toda a vida adulta.</p>
        <p className='text-center text-justify text-lg text-gray-600'>Por isso, damos especial atenção à nutrição infantil, promovendo:</p>
       <ul className='text-center text-justify text-lg list-disc ml-5 mt-4 text-gray-600'>
        <li>Alimentação saudável desde os primeiros anos</li>
        <li>Uso de alimentos naturais e nutritivos</li>
        <li>Conscientização dos pais e cuidadores</li>
        <li>Combate à desnutrição e má alimentação</li>
      
       </ul>

       <p className='text-center text-justify text-lg text-gray-600 mt-4'>Crianças bem alimentadas crescem mais fortes, saudáveis e com maior capacidade de aprendizagem e desenvolvimento.</p>
       </div>
       </div>

       </section>
      </section>
    </>
  )
}

export default ProjectosImpact