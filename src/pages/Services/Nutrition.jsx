import React,{ useEffect } from 'react'

const Nutrition = () => {


  //Scrool the page from top
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <section className='w-full min-h-screen'>
        <div className='max-w-7xl mx-auto px-4'>
            <div>
                Pagina em desenvolvimento....
            </div>

        </div>
    </section>
  )
}

export default Nutrition