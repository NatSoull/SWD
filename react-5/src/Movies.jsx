import React, { useContext } from 'react'
import { StateContext } from './Context/StateContext'

const Movies = ({ price}) => {

  // const {name} = useContext(StateContext)
  // console.log(name)

  return (
    <div>
      <ul className=' text-center'>
        <li className=''></li>
        <li className=''>{price}</li>
      </ul>
    </div>
  )
}

export default Movies
