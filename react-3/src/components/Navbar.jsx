import React, { useState } from 'react'
import { GiKnifeFork } from "react-icons/gi"
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {

  const [search , setSearch] = useState("")

  const nav = useNavigate()

  console.log(search)

  const submitHandler = e => {
    e.preventDefault()
    nav(`/search/${search}`)
  }

  return (
    <div className=' container flex justify-between mx-auto p-7 rounded-lg shadow-lg'>
      <Link to={"/"}>
        <GiKnifeFork className=' text-3xl' />
      </Link>
      <div>
        <form onSubmit={submitHandler} action="">
          <input value={search} onChange={e => setSearch(e.target.value)} type="text" className=' outline-none border-b-2 border-b-red-600' placeholder='Search...' />
        </form>
      </div>
    </div>
  )
}

export default Navbar
