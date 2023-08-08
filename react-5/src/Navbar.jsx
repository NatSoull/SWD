import React, { useContext } from 'react'
import { StateContext } from './Context/StateContext'

const Navbar = () => {

  const {moviesList , setMoviesList} = useContext(StateContext)

  return (
    <div className='flex justify-around align-middle items-center py-10 bg-slate-600 text-white'>
      <h1 className='text-2xl'>Developed by....</h1>
      <div>
        <h2 className='text-lg'>Movies List of : {moviesList.length}</h2>
      </div>
    </div>
  )
}

export default Navbar
