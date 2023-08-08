/* eslint-disable no-unused-vars */
import React from 'react'
import { useLocation } from 'react-router-dom'
import SearchProduct from './searchProduct'


const Search = () => {

    const location = useLocation()

    console.log(location.state.filterProducts)

    const products = location.state.filterProducts

  return (
    <div className=' flex flex-wrap gap-10 mt-20 justify-center'>
      {products.map( product => (
        <SearchProduct key={product.id} {...product}/>
      ))}
    </div>
  )
}

export default Search
