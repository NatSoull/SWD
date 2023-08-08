import React, { useState } from 'react'
import {MdKeyboardArrowDown , MdKeyboardArrowUp} from "react-icons/md"
import { StateContextCustom } from '../Context/StateContext'

const Cart = ({product , increaseTotalPrice , decreaseTotalPrice , mainTotal , setMainTotal}) => {

    const {dispatch} = StateContextCustom()

    const [quantity , setQuantity] = useState(1)

    const increaseQNT = () => {
        setQuantity(quantity + 1)
        increaseTotalPrice(product.price)
    }

    const decreaseQNT = () => {
        0 < quantity && (setQuantity(quantity - 1) , decreaseTotalPrice(product.price))
    }

    const oneProductPrice = product.price * quantity

    const removeTotal = () => {
        // setMainTotal(mainTotal - oneProductPrice)
        // or
        decreaseTotalPrice(oneProductPrice)
    }

  return (
    <div className=' flex justify-between items-center w-[60%] mx-auto'>
        <div className=' flex items-center gap-7'>
            <img className=' h-[200px] w-[150px] object-contain' src={product.image} alt="" />
            <div>
                <h1 className=' text-gray-800 font-semibold text-lg'>{product.title}</h1>
                <p>$ {oneProductPrice.toFixed(2)}</p>
                <p onClick={() => (dispatch({type: "REMOVE-FROM-CART" , payload: product}) , removeTotal())} className=' cursor-pointer text-red-600'>remove</p>
            </div>
        </div>
        <div className=' text-center'>
            <button onClick={() => increaseQNT()} className=' cursor-pointer'><MdKeyboardArrowUp className='text-2xl'/></button>
            <p>{quantity}</p>
            <button onClick={() => decreaseQNT()} className=' cursor-pointer'><MdKeyboardArrowDown className='text-2xl'/></button>
        </div>

    </div>
  )
}

export default Cart
