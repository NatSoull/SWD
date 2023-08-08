import React from 'react'
import { NavLink } from 'react-router-dom'
import "./nav.css"

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
            <NavLink to={"/"}>
                Home
            </NavLink>
        </li>
        <li>
            <NavLink to={"/about"}>
                About
            </NavLink>
        </li>
        <li>
            <NavLink to={"/content"}>
                Content
            </NavLink>
        </li>
        <li>
            <NavLink to={"/service"}>
                Service
            </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
