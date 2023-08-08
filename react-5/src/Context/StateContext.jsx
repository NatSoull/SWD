import { createContext, useContext, useState } from "react";
import Movies from "../Movies";

export const StateContext = createContext()

export const StateContextProvider = ({children}) => {

    // const [moviesList , setMoviesList] = useState([
    //     {id: "1" , name: "Naruto" , price: "90$"},
    //     {id: "2" , name: "Attack on Titan" , price: "95$"},
    //     {id: "3" , name: "Demon Slayer" , price: "75$"},
    //     {id: "4" , name: "ChainSaw Man" , price: "80$"},
    // ])

    // const name = "Min Thu Khant"
    // const data = {moviesList , setMoviesList}

    const [count , setCount] = useState(0)
    const data = {count , setCount}

    return(
        <StateContext.Provider value={data}>
            {children}
        </StateContext.Provider>
    )
}

export const useContextCustom = () => useContext(StateContext)