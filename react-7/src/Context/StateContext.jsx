import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { reducer } from "./Reducer";

export const StateContext = createContext()

export const StateContextProvider = ({children}) => {

    const [productsList , setProductsList] = useState([])
    const [search , setSearch] = useState("")

    useEffect(() => {
        fetchData()
    } , [])

    useEffect(() => {
        dispatch({type: "getProducts" , payload: productsList})
        const filterProducts = productsList.filter(product => product.title.toLowerCase().includes(search.toLowerCase()))
        dispatch({type: "getProducts" , payload: filterProducts})
    } , [productsList , search])

    // search && setProductsList(productsList.map(product => product.title.includes(search)))


    const fetchData = async () => {
        const api = await fetch("https://fakestoreapi.com/products")
        const data = await api.json()
        setProductsList(data)
    }


    

    const initialState = {
        products:[],
        cart: []
    }

    
    const [state , dispatch] = useReducer(reducer , initialState)

    // console.log(state)

    const data = {state , dispatch , search , setSearch}

    return (
        <StateContext.Provider value={data}>
            {children}
        </StateContext.Provider>
    )
}

export const StateContextCustom = () => useContext(StateContext)