import React, { useContext } from 'react'
import { StateContext } from '../Context/StateContext'

const Two = () => {

    const {setCount} = useContext(StateContext)

  return (
    <div>
      <button onClick={() => setCount(prev => prev + 1)}>Increase from Two</button>
    </div>
  )
}

export default Two
