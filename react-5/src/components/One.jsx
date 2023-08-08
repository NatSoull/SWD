import React, { useContext } from 'react'
import { StateContext, useContextCustom } from '../Context/StateContext'

const One = () => {

    // const {count} = useContext(StateContext)
    const {count} = useContextCustom()

  return (
    <div>
      <h1>
        One : {count}
      </h1>
    </div>
  )
}

export default One
