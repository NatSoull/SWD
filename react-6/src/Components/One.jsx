import React, { useContext } from 'react'
import { StateContext, StateContextCustom } from '../Context/StateContext'

const One = () => {

    const {state , dispatch} = useContext(StateContext)
    // const {name , id} = useContext(StateContext)

  return (
    <div>
      <h1 className='text-4xl'>One : {state.count}</h1>
      <h1></h1>
    </div>
  )
}

export default One
