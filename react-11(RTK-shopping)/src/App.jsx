/* eslint-disable no-unused-vars */
// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { increase } from './feature/services/CounterSlice'

// const App = () => {

//   const {value} = useSelector(state => state.counter)
//   console.log(value)

//   const dispatch = useDispatch()

//   return (
//     <div>
//       <h1 className=' text-2xl'>{value}</h1>
//       <button onClick={() => dispatch(increase(2))}>Click</button>
//     </div>
//   )
// }

// export default App



import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from './components/Products'
import Navbar from './components/Navbar'
import AddToCart from './components/AddToCart'
import Search from './components/Search'
import RouteGuard from './components/RouteGuard'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/addtocart' element={<AddToCart/>}/>
        <Route path='/search' element={<RouteGuard><Search/></RouteGuard>}/>
      </Routes>
    </div>
  )
}

export default App
