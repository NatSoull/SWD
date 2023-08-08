import React from 'react'
import { useLocation } from 'react-router-dom'

const Service = () => {

  const location = useLocation()
  console.log(location)

  return (
    <div>
      <h2>Service</h2>
      <h5>{location.state.text ? location.state.text : null}</h5>
      <h5>{location.state?.text}</h5>

    </div>
  )
}

export default Service
