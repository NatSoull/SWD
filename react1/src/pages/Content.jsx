import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Content = () => {
  return (
    <div>
      <h3>
        Content
      </h3>
      <NavLink to={"/"}>
        <button>Click</button>
      </NavLink>
    </div>
  )
}

export default Content
