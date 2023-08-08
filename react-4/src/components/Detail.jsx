import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {

    const {id} = useParams()
    
    const [item , setItem] = useState([])

    useEffect(() => {
      fetchData()
    } , [])

    const fetchData = async () => {
      const api = await fetch(`https://fakestoreapi.com/products/${id}`)
      const data = await api.json()
      setItem(data)
      console.log(data)
    }

  return (
    <div>
      <h1>
        {item.title}
      </h1>
    </div>
  )
}

export default Detail
