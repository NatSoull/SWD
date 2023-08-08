import React from 'react'
import About from "./About"

const Home = (props) => {

  console.log(props.info)

  return (
    <>
      <h1>home page {props.info.name} - {props.info.age}</h1>
      <About/>
    </>
  )
}

export default Home
