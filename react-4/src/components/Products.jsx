import React, { useEffect, useState } from 'react'
import Product from './Product'

const Products = ({products}) => {


  return (
    <div className='flex flex-wrap gap-10 justify-center align-middle items-center'>
      {products.map(item => (
        <Product key={item.id} id={item.id} title={item.title} price={item.price} category={item.category} image={item.image} />
      ))}
    </div>
  )
}

export default Products
