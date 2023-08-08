import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from './components/Products'
import Navbar from './components/Navbar'
import Detail from './components/Detail'

const App = () => {

  const [items , setItems] = useState([])

    useEffect(() => {
        fetchData()
    } , [])

    const fetchData = async () => {
        const api = await fetch("https://fakestoreapi.com/products")
        const data = await api.json()
        setItems(data)
        console.log(data)
    }

    // const filterData = items.filter(item , => item.title.toLowerCase().includes(search))


  return (
    <div>
      
      <Navbar setItems={setItems} items={items}/>
      <Routes>
        <Route path='/' element={<Products products={items}/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
      </Routes>
    </div>
  )
}

export default App
