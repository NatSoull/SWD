import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h3>Home</h3>
      <NavLink to={"/about"}>
        <button>Click</button>
      </NavLink>
    </div>
  )
}

export default Home
