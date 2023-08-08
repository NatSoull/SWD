/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Product from './Product'
import Loading from './Loading'

const Products = () => {

  const [products , setProducts] = useState([])
  const [isLoading , setIsLoading] = useState(true)

  useEffect(() => {
    dataFetch()
  } , [])

  const dataFetch = async () => {
    const api = await fetch(`https://fakestoreapi.com/products`)
    const data = await api.json()
    setProducts(data)
    setIsLoading(false)
  }

  if(isLoading){
    return (
      <Loading/>
    )
  }

  return (
    <div className=' flex flex-wrap gap-10 mt-20 justify-center'>
     {products.map(item => (
      <Product key={item.id} {...item}/>
     ))}
    </div>
  )
}

export default Products
