import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Picture18 from "../assets/Picture18.jpeg"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';
import { Pagination, Autoplay } from 'swiper/modules';



const Slider = () => {
  return (

   <section className='w-full min-h-[50vh] flex items-center bg-gray-50 py-8'>
    <div className='max-w-7xl mx-auto px-4 flex flex-col md:flex-row w-full gap-8'>
        {/*First Column*/}
        <div className="w-full md:max-w-4xl">
            <Swiper 
              pagination={true} 
              modules={[Pagination, Autoplay]} 
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
              }}
              loop={true}
              className="mySwiper w-full h-78 rounded-2xl bg-white shadow-lg border border-gray-100">
              <SwiperSlide className='flex items-center justify-center'>
                <div className="flex flex-col space-y-4 md:space-y-6 p-6 md:p-10 items-center justify-center text-center">
                  <p className="text-xl md:text-3xl italic text-gray-600 leading-relaxed">“O sucesso não se mede pela aparência da sua vida para os outros. Ele se mede pela forma como você se sente.” </p>
                  <div className="flex flex-col items-center">
                    <span className="font-bold text-primary text-lg md:text-2xl">Michelle Obama</span>
                    
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='flex items-center justify-center'>
                <div className="flex flex-col space-y-4 md:space-y-6 p-6 md:p-10 items-center justify-center text-center">
                  <p className="text-xl md:text-3xl italic text-gray-600 leading-relaxed">"Você precisa acreditar em si mesma quando ninguém mais acredita.”</p>
                  <div className="flex flex-col items-center">
                    <span className="font-bold text-primary text-lg md:text-2xl">Serena Williams</span>
                    
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='flex items-center justify-center'>
                <div className="flex flex-col space-y-4 md:space-y-6 p-6 md:p-10 items-center justify-center text-center">
                  <p className="text-xl md:text-3xl italic text-gray-600 leading-relaxed">“Espalhe amor por onde você for. Que ninguém jamais saia daqui sem se sentir mais feliz.”</p>
                  <div className="flex flex-col items-center">
                    <span className="font-bold text-primary text-lg md:text-2xl">Madre Teresa</span>
                    
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

        </div>
        {/*Second Column*/}
        <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4">
             {/* <h2 className="text-3xl font-bold text-primary">O que dizem sobre nós</h2>
             <p className="text-gray-600">
               Nossa missão é impactar vidas e comunidades. Veja o depoimento de quem já faz parte dessa transformação.
             </p> */}
             <img src={Picture18} className="rounded-r-[100px] rounded-br-[350px] rounded-tr-[90px] md:h-[250px] md:w-[300px]" alt="" />
        </div>
 
    </div>

   </section>
  
  )
}

export default Slider