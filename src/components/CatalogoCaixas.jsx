import React from 'react'
import ProductCard from './ui/ProductCard'



const products = [
    {
        name: 'Tomate Fresco',
        price: 100,
        image: 'https://images.unsplash.com/photo-1662370761575-05ff1ee40d7d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dmVnZXRhYmxlc3xlbnwwfHwwfHx8MA%3D%3D',
        alt: 'Product 1'
    },
    {
        name: 'Carne Fresca',
        price: 300,
        image: 'https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1lYXR8ZW58MHx8MHx8fDA%3D',
        alt: 'Product 2'
    },
    {
        name: 'Carne Fresca',
        price: 300,
        image: 'http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRPZXoKVF3VMN8gkuiAcYhpnLzU-t0X6vsXFIcAwRJBBHr9uPG7kVzKYUdYfq5n6uTjs02Hf1v890R28_DZPNg',
        alt: 'Product 3'
    }
]

const CatalogoCaixas = () => {
  return (
   
 <div className='max-w-7xl mx-auto'>
            {/* Card Component imported of the products */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20'>
            {products.map((product, index) => (
                <ProductCard key={index} {...product} />
            ))}
            </div>           
        </div>
  )
}

export default CatalogoCaixas