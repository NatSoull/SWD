/* eslint-disable no-unused-vars */
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashBoard from '../pages/DashBoard'
import Register from '../pages/Register'
import Login from '../pages/Login'
import RouteGuard from '../components/RouteGuard'
import CreateContact from '../pages/CreateContact'
import ContactInfo from '../pages/ContactInfo'

const Path = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<RouteGuard><DashBoard/></RouteGuard>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/create' element={<CreateContact/>}/>
        <Route path='/contact-info/:id' element={<ContactInfo/>}/>
      </Routes>
    </div>
  )
}

export default Path
