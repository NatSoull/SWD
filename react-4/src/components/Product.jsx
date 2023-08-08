import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({ id , price , title , category , image }) => {
  return (
    <div>
      <div className=' w-[300px] shadow-xl border-1 border-black rounded-xl'>
        <img className='h-[300px] object-contain' src={image} alt="" />
        <div>
            <h1>{title.substring(0 , 25)}...</h1>
            <p>{price}</p>
            <button className=' py-1 px-6 bg-teal-500 text-white rounded-md text-lg font-medium w-[100%]'>Add to Cart</button>
            <Link to={`/detail/${id}`}>
            <button className=' py-1 px-6 border-teal-500 text-teal-500 rounded-md text-lg font-medium w-[100%]'>Detail</button>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Product
