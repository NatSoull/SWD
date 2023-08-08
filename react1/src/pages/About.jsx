import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h3>About</h3>
      <NavLink to={"/content"}>
        <button>Click</button>
      </NavLink>
    </div>
  )
}

export default About
