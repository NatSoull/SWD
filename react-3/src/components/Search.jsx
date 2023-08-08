import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Search = () => {

    const {name} = useParams()

    const [item , setItem] = useState({})

    useEffect(() => {
        fetchData()
    } , [])

    const fetchData = async () => {
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
        const {meals} = await api.json()
        console.log(meals[0])
        setItem(meals[0])
    }

  return (
    <div>
      <h1>{item.strMeal}</h1>
    </div>
  )
}

export default Search
