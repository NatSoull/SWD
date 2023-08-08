import React, { useEffect } from 'react'

const ComponA = () => {
  
  const changeLog = e => {
    console.log(e.clientX)
    console.log(e.clientY)
  }

  useEffect(() => {
    window.addEventListener("mousemove" , changeLog)
    return () => {
      window.removeEventListener("mousemove" , changeLog)
    }
  } , [])

  return (
    <div>
      <h1>ComponA</h1>
    </div>
  )
}

export default ComponA
