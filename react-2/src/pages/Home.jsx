import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Child from '../components/Child'

const Home = () => {

    // const navigate = useNavigate()

    // const handle = () => {
    //     navigate("/content")
    // }

    // const inputRef = useRef("Hi")
    // console.log(inputRef)

    // const [count , setCount] = useState(0)
    const inputRef = useRef()
    const nav = useNavigate()

    // const update = () => {
    //   setCount(count + 1)
    // }

    

    const click = () => {
      // console.log(inputRef.current.value)
      nav("/service" , {state:{text: inputRef.current.value}})
    }


    console.log("home")

  return (
    <div>
      <h2>Home</h2>
      {/* <button onClick={handle}>go to Content</button> */}
      {/* {count}
      <button onClick={() => update()}>Update</button> */}
      <input type="text" ref={inputRef} />
      <button onClick={() => click()}>Click</button>
      <Child/>
    </div>
  )
}

export default Home