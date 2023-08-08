import React from 'react'
import { StateContextCustom } from '../Context/StateContext'

const Three = () => {

    const {state} = StateContextCustom()

  return (
    <div>
      <h1 className='text-4xl'>Three : {state.value}</h1>
    </div>
  )
}

export default Three
