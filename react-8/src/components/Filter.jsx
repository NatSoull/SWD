import React, { useEffect } from 'react'

const Filter = ({filter , setFilter , activeGenre , setActiveGenre , popular}) => {

  const all = () => {
    setActiveGenre(0)
    console.log(0)
  }

  useEffect(() => {
    if(activeGenre == 0){
      setFilter(popular)
    }else{
      const filterMovies = popular.filter(movie => movie.genre_ids.includes(activeGenre))
    setFilter(filterMovies)
    }
    
  } , [activeGenre])

  return (
    <div className='mt-16 ml-28 flex gap-5'>
        <button onClick={all} className=' bg-gray-700 text-white py-1 px-4 rounded text-center'>All</button>
        <button onClick={() => setActiveGenre(28)} className=' bg-gray-700 text-white py-1 px-4 rounded text-center'>Action</button>
        <button onClick={() => setActiveGenre(35)} className=' bg-gray-700 text-white py-1 px-4 rounded text-center'>Comedy</button>
    </div>
  )
}

export default Filter
