import React from 'react'
import { StateContextCustom } from '../Context/StateContext'
import Product from './Product'

const Products = () => {

  const {state : {products}} = StateContextCustom()
  console.log(products)

  return (
    <div className=' flex flex-wrap gap-10 p-10 justify-center align-middle items-center'>
      {products?.map(product => (
        <Product key={product.id} {...product}/>
      ))}
    </div>
  )
}

export default Products
