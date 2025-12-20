import React from 'react'
import heroImage from "../assets/Hero.png"

const Hero = () => {
  return (
    <>
    <section className="relative w-full h-[600px]">
        <img src={heroImage} alt="Hero" className="w-full h-full object-cover opacity-80" />
        <div className='absolute top-1/2 left-1/2 md:left-1/5 transform -translate-x-1/2 -translate-y-1/2  flex flex-col shadow-lg'>
        <span className='text-2xl md:text-6xl font-bold  text-primary'>Wutomi<span className='text-secondary'>DC</span></span>
            <p className="text-2xl md:text-5xl font-bold text-center  text-white italic">Onde a natureza gera Vida</p>
        </div>
    </section>
    </>
  )
}

export default Hero