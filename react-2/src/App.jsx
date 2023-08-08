import React from 'react'
import "./style.css"
import Navbar from './components/Navbar'
import { Routes , Route } from 'react-router-dom'
import Service from './pages/Service'
import Content from './pages/Content'
import About from './pages/About'
import Home from './pages/Home'
import Error from './components/Error'
import Admin from './components/Admin'


const App = () => {
  return (
    <div>
      <Navbar/>

      {/* <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/content" element={<Content/>}/>
        <Route path='/service' element={<Service/>}></Route>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes> */}

      <About/>
    </div>
  )
}

export default App
