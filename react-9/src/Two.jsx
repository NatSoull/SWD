import React from 'react'
import { useDispatch } from 'react-redux'
import { decrement, increment } from './features/counterSlice'

const Two = () => {

    const dispatch = useDispatch()

  return (
    <div>
      <button onClick={() => dispatch(increment(1000))} className=' bg-teal-500 text-white px-5 py-2 rounded-lg'>two - increment</button>
      <button onClick={() => dispatch(decrement(1000))} className=' bg-teal-500 text-white px-5 py-2 rounded-lg'>two - decrement</button>
    </div>
  )
}

export default Two
