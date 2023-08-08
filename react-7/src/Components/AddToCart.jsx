import React, { useEffect, useState } from 'react'
import { StateContextCustom } from '../Context/StateContext'
import Cart from './Cart'

const AddToCart = () => {

    const {state: {cart} , dispatch} = StateContextCustom()
    console.log(cart)

    const [mainTotal , setMainTotal] = useState(0)

    useEffect(() => {
        setMainTotal(total)
    } , [])


    const increaseTotalPrice = (price) => {
        setMainTotal(mainTotal + price)
    }

    const decreaseTotalPrice = (price) => {
        setMainTotal(mainTotal - price)
    }

    
    const total = () => cart?.reduce((pv , cv) => pv + cv.price , 0)

  return (
    <div>
        <div className='flex flex-col my-10 gap-10'>
            {cart.map(product => (
                <Cart key={product.id} product={product} increaseTotalPrice={increaseTotalPrice} decreaseTotalPrice={decreaseTotalPrice} mainTotal={mainTotal} setMainTotal={setMainTotal}/>
            ))}
        </div>
        <hr className=' w-[70%] mx-auto'/>
        <div className=' flex justify-around'>
            <p>Total</p>
            <p>$ {mainTotal.toFixed(2)}</p>
        </div>
        <div className=' text-center'>
            <button onClick={() => dispatch({type: "CLEAR-CART"})} className=' border px-5 py-2 border-red-500 text-red-500 rounded-lg'>Clear All</button>
        </div>
    </div>
  )
}

export default AddToCart
