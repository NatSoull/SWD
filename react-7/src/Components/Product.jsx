import React from 'react'
import { StateContextCustom } from '../Context/StateContext'

const Product = (props) => {

    const {title , price , description , category , image} = props

    const {dispatch} = StateContextCustom()

  return (
    <div className=' flex flex-col w-[200px] h-[380px] justify-between'>
      <div>
        <img className=' h-[200px] object-contain' src={image} alt="" />
        <h1 className=' text-xl'>{title.substring(0 , 25)}...</h1>
      </div>
      <div>
        <h2>$ {price}</h2>
      </div>
      <div className=' flex flex-col'>
        <button onClick={() => dispatch({type: "ADD_TO_CART" , payload: props})} className=' px-6 py-2 bg-teal-500 text-white rounded-xl '>Add to Cart</button>
        <button className=' px-6 py-2 text-teal-500 rounded-xl border border-teal-500 '>Detail</button>
      </div>
    </div>
  )
}

export default Product
