import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from './Components/Products'
import Navbar from "./Components/Navbar"
import AddToCart from './Components/AddToCart'

const App = () => {
  return (
    <div>
      
      <Navbar/>
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/addtocart' element={<AddToCart/>}/>
      </Routes>
    </div>
  )
}

export default App
