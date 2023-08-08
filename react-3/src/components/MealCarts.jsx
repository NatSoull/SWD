import React from 'react'
import {BsSearch} from "react-icons/bs"
import "./mealCarts.css"
import { Link } from 'react-router-dom'

const MealCarts = ({name , image , id }) => {


  return (
    <div className=' relative parent'>
      <Link to={`/detail/${id}`}>
        <img className=' h-[300px] object-cover rounded-2xl image' src={image} alt="" />
        <p className=' icon bg-orange-600 w-12 h-12 rounded-[100%] flex justify-center align-middle items-center absolute top-[45%] left-[40%]'>
          <BsSearch className=' text-2xl text-white' />
        </p>
      </Link>
    </div>
  )
}

export default MealCarts
