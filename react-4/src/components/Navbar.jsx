import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({setItems , items}) => {

  const [search , setSearch] = useState("")

  const fetchPD = items.filter(item => item.title.toLowerCase().includes(search))

  const submitHandler = e => {
    e.preventDefault()
    setItems(fetchPD)
  }

  return (
    <div className=' p-5 shadow-sm my-5 flex px-[400px] justify-between mb-20 items-center align-middle'>
      <Link to={"/"}>
        <h1 className=' text-2xl font-medium tracking-wide'>Comfity</h1>
      </Link>
      <form onSubmit={submitHandler}>
        <input value={search} onChange={e => {setSearch(e.target.value)} } className=' outline-none border-b-teal-500 border-b-2' placeholder='Search...' type="text" />
      </form>
    </div>
  )
}

export default Navbar
