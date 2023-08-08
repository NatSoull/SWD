import React, { useContext, useState } from 'react'
import Movies from "./Movies"
import { StateContext } from './Context/StateContext'

const MoviesList = () => {

  const {moviesList , setMoviesList} = useContext(StateContext)

  return (
    <div className=' flex align-middle justify-center items-center flex-col gap-10 h-[100vh]'>
      {moviesList.map(movie => (
        <Movies key={movie.id} {...movie}/>
      ))}
    </div>
  )
}

export default MoviesList
