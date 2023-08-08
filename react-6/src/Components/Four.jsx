import React from 'react'
import { StateContextCustom } from '../Context/StateContext'

const Four = () => {

    const {dispatch} = StateContextCustom()

  return (
    <div>
      <button onClick={() => dispatch({type : "increase2"})} className='text-white bg-red-600 px-5 py-1 rounded-xl'>Increase Value</button>
    </div>
  )
}

export default Four
