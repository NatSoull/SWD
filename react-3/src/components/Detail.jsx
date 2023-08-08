import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./detail.css"
import {BsYoutube} from "react-icons/bs"

const Detail = () => {
    
    const {id} = useParams()
    // console.log(id)

    const [meal , setMeal] = useState({})
    const [items , setItems] = useState([])

    useEffect(() => {
        fetchMeal()
    } , [])

    const fetchMeal = async () => {
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        const {meals} = await api.json()
        setMeal(meals[0])
        console.log(meals[0])
    }

  return (
    <div className='flex w-[80%] mx-auto gap-20 items-center h-screen'>
      <img className=' w-[40%] rounded-lg' src={meal.strMealThumb} alt="" />
      <div className='w-[60%]'>
        <h1 className=' text-2xl font-semibold text-gray-700 tracking-wide mb-3'>{meal.strMeal}</h1>
        <h3 className=' text-xl text-red-500 tracking-wide mb-2'>{meal.strArea}</h3>
        <h5 className='badge font-semibold tracking-wide'>{meal.strCategory}</h5>
        <p className=' text-gray-700 tracking-wide leading-8'>{meal.strInstructions}</p>
        <a href={meal.strYoutube}>
            <BsYoutube className=' text-red-600 text-6xl' />
        </a>
      </div>
    </div>
  )
}

export default Detail