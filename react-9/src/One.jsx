import React from 'react'
import { useSelector } from 'react-redux'

const One = () => {

    const {count} = useSelector(state => state.counter)

  return (
    <div>
      <h1>One - {count}</h1>
    </div>
  )
}

export default One
