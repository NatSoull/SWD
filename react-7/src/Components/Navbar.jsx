import React, { useState } from 'react'
import {AiOutlineShoppingCart} from "react-icons/ai"
import { StateContextCustom } from '../Context/StateContext'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const {search , setSearch , state:{cart}} = StateContextCustom()
    console.log(cart)

    // console.log(search)

  return (
    <div className='flex justify-around p-5 shadow-sm'>
      <Link to={"/"}>
        <h1 className=' text-4xl'>Shop</h1>
      </Link>
      <div className='flex items-center justify-between'>
        <input value={search} onChange={e => setSearch(e.target.value)} className=' outline-none border-b-2 border-teal-500 py-2 me-5' type="text" placeholder='Search . . .' />
        <Link to={"/addtocart"}>
          <div className='flex relative'>
            <AiOutlineShoppingCart className=' text-4xl'/>
            <span className=' absolute left-6 bottom-6 text-xl bg-red-500 text-white w-7 h-7 flex justify-center align-middle items-center rounded-[100%]'>{cart.length}</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
