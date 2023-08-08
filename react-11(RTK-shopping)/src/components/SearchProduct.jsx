/* eslint-disable no-unused-vars */
import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../feature/services/cartSlice'

const SearchProduct = (props) => {
    const {image , title , price } = props
    const dispatch = useDispatch()
    
  return (
    <div>
      <div className=' w-[250px] h-[400px] flex flex-col mb-10'>
        <img className=' object-contain h-[250px]' src={image} alt="" />
        <div className='flex flex-col'>
          <h1>{title.substring(0,25)}...</h1>
          <p>${price}</p>
          <button onClick={() => dispatch(addToCart(props))} className=' text-white bg-purple-700 hover:bg-purple-500 px-6 py-2 rounded-2xl'>Add to Cart</button>
        </div>
        
      </div>
    </div>
  )
}

export default SearchProduct
