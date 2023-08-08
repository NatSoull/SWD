/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../components/Navbar'
import { useSelector } from 'react-redux'
import Contact from '../components/Contact'

const DashBoard = () => {
  const {token , user} = useSelector(state => state.authSlice)
  
  return (
    <div>
      <Navbar/>
      <Contact/>
    </div>
  )
}

export default DashBoard
