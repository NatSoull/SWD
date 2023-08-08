import React from 'react'
import { StateContextCustom } from '../Context/StateContext'

const Two = () => {

    const {dispatch} = StateContextCustom()

  return (
    <div>
      <button onClick={() => dispatch({type : "increase" , payload : 20} )} className=' text-white bg-teal-500 px-5 py-1 rounded-xl'>Increase</button>
    </div>
  )
}

export default Two
