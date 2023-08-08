import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from './features/counterSlice'
import One from './One'
import Two from './Two'


const App = () => {

  const {count} = useSelector(state => state.counter)
  const dispatch = useDispatch()


  return (
    <div>
      <One/>
      <Two/>
    </div>
  )
}

export default App
