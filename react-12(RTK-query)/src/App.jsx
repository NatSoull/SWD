/* eslint-disable no-unused-vars */
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Blog from './components/Blog'
import Detail from './components/Detail'
import Create from './components/Create'
import Edit from './components/Edit'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Blog/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
      </Routes>
    </div>
  )
}

export default App
