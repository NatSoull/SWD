// import React from 'react'
// import One from './components/One'
// import Two from './components/Two'
// import Three from './components/Three'

// const App = () => {
//   return (
//     <div>
//       <One/>
//       <Two/>
//       <Three/>
//     </div>
//   )
// }

// export default App



import React, { useReducer, useState } from 'react'

const App = () => {

  const initialState = {
    count : 0,
    // value : 10
  }
  const reducer = (state , action) => {
    switch(action.type){
      case "increase" :
        return state.count + 1
      case "decrease" :
        return state.count - 1
      case "reset" :
        return 0
        default :
        return state

    }
  }
  const [state , dispatch] = useReducer(reducer , initialState)

  return (
    <div>
      <h1>
        {state.count}
      </h1>
      <button className=' me-5' onClick={() => dispatch({type : "increase"})}>Update</button>
      <button className=' me-5' onClick={() => dispatch({type : "decrease"})}>Down</button>
      <button className=' me-5' onClick={() => dispatch({type : "reset"})}>Reset</button>
    </div>
  )
}

export default App
