import React, { useState } from 'react'
import ComponA from './ComponA'

const Wrapper = () => {

    const [isShow , setIsShow] = useState(true)

    const toggle = () => {
        setIsShow(!isShow)
    }

  return (
    <div>
      {isShow && <ComponA/>}
      <button onClick={toggle}>{isShow ? "hide" : "show"}</button>
    </div>
  )
}

export default Wrapper
