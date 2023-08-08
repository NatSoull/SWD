import React, { useReducer } from 'react'
import One from './Components/One'
import Two from './Components/Two'
import Three from './Components/Three'
import Four from './Components/Four'

const App = () => {

  

  return (
    <div>
      {/* <h1 className='text-3xl'>{state.count}</h1>
      <button onClick={() => dispatch({type : "increase" , payload : 20} )} className=' text-white bg-teal-500 px-5 py-1 rounded-xl'>Increase</button>
      <h1 className='text-3xl'>{state.value}</h1>
      <button onClick={() => dispatch({type : "increase2"} )} className=' text-white bg-teal-500 px-5 py-1 rounded-xl'>Increase Value</button> */}
      <One/>
      <Two/>
      <Three/>
      <Four/>
    </div>
  )
}

export default App
